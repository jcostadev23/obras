import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import CustomButton from "@/components/button"
import CalendarList from "../../../components/calendarlist";
import formatDays from "../../../helpers/daysformat";
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
                const promisedetals = await Promise.all(details.map((day) => formatDays(day)));
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
            <CalendarList props={equip} />
            <CustomButton color={"green"} link={"/equipements/"} text={"Return"} />
        </Layout>
    )
}