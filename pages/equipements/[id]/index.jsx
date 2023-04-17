import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import CustomButton from "@/components/button"
import CalendarList from "../../../components/calendarlist";
import getDayDetails from "../../../helpers/FormatDays";
import { Loader } from "@aws-amplify/ui-react";
import CalculateHours from "../../../components/calculatehours";

const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Equipements Info" }
];

export default function EquipInfo() {
    const [equipementecalendar, setEquipementcalendar] = useState()
    const router = useRouter()
    const equipementId = router.query.id

    useEffect(() => {
        async function equipementDetails() {
            try {
                const days = await DataStore.query(Calendar, (c) => c.calendarEquipementId.eq(equipementId));
                const daysInfo = await Promise.all(days.map((day) => getDayDetails(day)));
                setEquipementcalendar(daysInfo)
            } catch (error) {
                console.log("Error don't get the GetDetails", error);
            }
        }
        if (equipementId) {
            equipementDetails()
        }
    }, [equipementId])

    if (!equipementecalendar) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <CalendarList days={equipementecalendar} />
            <CalculateHours arrayofdays={equipementecalendar} />
            <CustomButton color={"green"} link={"/equipements/"} text={"Return"} />
        </Layout>
    )
}