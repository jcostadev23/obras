import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "EquipementsId" }
];

import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import React from "react";
import { Card, Collection, Grid, Heading, Link } from "@aws-amplify/ui-react";
import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import FormatTime from "../../../components/helpers/formattime";


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
                    return <Grid>
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