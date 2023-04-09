import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Collection } from "@aws-amplify/ui-react";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import CalendarList from "../../../components/calendarlist";
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "EquipementsId" }
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
                {(details) => {
                    return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                        <CalendarList props={details} />
                    </Grid>
                }}
            </Collection>
            <CustomButton color={"green"} link={"/equipements/"} text={"Return"} />
        </Layout>
    )
}