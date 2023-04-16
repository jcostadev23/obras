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
import { Loader } from "@aws-amplify/ui-react";
import CalculateHours from "../../../components/calculatehours";

const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Equipements Info" }
];

export default function EquipInfo() {
    const [equipementecalendar, setEquipementcalendar] = useState()
    const router = useRouter()
    const equipId = router.query.id

    useEffect(() => {
        async function equipementDetails() {
            try {
                const days = await DataStore.query(Calendar, (c) => c.calendarEquipementId.eq(equipId));
                const daysInfo = await Promise.all(days.map((day) => formatDays(day)));
                setEquipementcalendar(daysInfo)
            } catch (error) {
                console.log("Error don't get the GetDetails", error);
            }
        }
        if (equipId) {
            equipementDetails()
        }
    }, [equipId])

    if (!equipementecalendar) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <CalendarList calendarlist={equipementecalendar} />
            <CalculateHours arrayofdays={equipementecalendar} />
            <CustomButton color={"green"} link={"/equipements/"} text={"Return"} />
        </Layout>
    )
}