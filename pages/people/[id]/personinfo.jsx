import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import React from "react";
import { Card, Collection, Grid, Heading, Link } from "@aws-amplify/ui-react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/helpers/button"
import FormatTime from "../../../components/helpers/formattime";
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
                })
                )
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

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={person} isPaginated itemsPerPage={10} isSearchable>
                {(info) => {
                    return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                        <Card variation="elevated" key={info.id}>
                            <Heading>{info.day}</Heading>
                            <div>People: {info.people.name}</div>
                            {info.workerTimeMinutes && <div>Hours: {FormatTime(info.workerTimeMinutes)}</div>}
                            {info.job && <div>Job: {info.job.name}</div>}
                            {info.equipement && <div>Equipement: {info.equipement.name}</div>}
                            {/* need to do something to resole when is not hours selected */}
                            {info.equipmentTimeMinutes && <div>Equipement Hours: {FormatTime(info.equipmentTimeMinutes)}</div>}
                        </Card>
                    </Grid>
                }}
            </Collection>
            <CustomButton color={"green"} link={"/people/"} text={"Return"} />
        </Layout>
    )
}