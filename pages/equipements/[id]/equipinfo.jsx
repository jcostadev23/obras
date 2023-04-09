import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import React from "react";
import { Card, Collection, Grid, Heading, } from "@aws-amplify/ui-react";
import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import CustomButton from "@/components/helpers/button"
import FormatTime from "../../../components/helpers/formattime";
import { useRouter } from "next/router"
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Equipements Info" }
];

export default function EquipInfo() {
    const [equip, setEquip] = useState()
    const router = useRouter()
    const equipId = router.query.id

    useEffect(() => {
        async function GetDetails() {
            try {
                const details = await DataStore.query(Calendar, (c) => c.calendarEquipementId.eq(equipId));
                const promisedetals = await Promise.all(details.map(async (Equipinfo) => {
                    return {
                        day: Equipinfo.day,
                        id: Equipinfo.id,
                        people: await Equipinfo.people,
                        workerTimeMinutes: Equipinfo.workerTimeMinutes,
                        job: await Equipinfo.job,
                        equipement: await Equipinfo.equipement,
                        equipmentTimeMinutes: Equipinfo.equipmentTimeMinutes
                    };
                })
                )
                setEquip(promisedetals)
            } catch (error) {
                console.log("Error don't get the GetDetails", error);
            }
        }
        if (equipId) {
            GetDetails()
        }
    }, [equipId])
    if (!equip) {
        return <div>Loading...</div>
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={equip} isPaginated itemsPerPage={10} isSearchable>
                {(info) => {
                    return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                        <Card variation="elevated" key={info.id}>
                            <Heading>{info.day}</Heading>
                            {info.equipement && <div>Equipement: {info.equipement.name}</div>}
                            {/* need to do something to resole when is not hours selected */}
                            {info.equipmentTimeMinutes && <div>Equipement Hours: {FormatTime(info.equipmentTimeMinutes)}</div>}
                            <div>People: {info.people.name}</div>
                            {info.workerTimeMinutes && <div>Hours: {FormatTime(info.workerTimeMinutes)}</div>}
                            {info.job && <div>Job: {info.job.name}</div>}

                        </Card>
                    </Grid>
                }}
            </Collection>
            <CustomButton color={"green"} link={"/equip/"} text={"Return"} />
        </Layout>
    )
}