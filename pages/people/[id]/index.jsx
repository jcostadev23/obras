import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Collection } from "@aws-amplify/ui-react";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/button"
import CalendarList from "../../../components/calendarlist";
import { useRouter } from "next/router"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Person Info" }
];

export default function PersonInfo() {
    const [person, setPerson] = useState()
    const router = useRouter()
    const personId = router.query.id

    useEffect(() => {
        async function GetDetails() {
            try {
                const details = await DataStore.query(Calendar, (c) => c.calendarPeopleId.eq(personId));
                const promisedetals = await Promise.all(details.map(async (PersonInformation) => {
                    return {
                        day: PersonInformation.day,
                        id: PersonInformation.id,
                        people: await PersonInformation.people,
                        workerTimeMinutes: PersonInformation.workerTimeMinutes,
                        job: await PersonInformation.job,
                        equipement: await PersonInformation.equipement,
                        equipmentTimeMinutes: PersonInformation.equipmentTimeMinutes
                    };
                }))
                setPerson(promisedetals)
            } catch (error) {
                console.log("Error don't get the GetDetails", error);
            }
        }
        if (personId) {
            GetDetails()
        }
    }, [personId])
    if (!person) {
        return <div>Loading...</div>
    }
    console.log(person)

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <CalendarList props={person} />
            <CustomButton color={"green"} link={"/people/"} text={"Return"} />
        </Layout>
    )
}