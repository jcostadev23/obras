import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
import { Calendar, } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import React from "react";
import Layout from "@/components/layout"
import { Button } from "@aws-amplify/ui-react";
import CalendarList from "../../../components/calendarlist";
import getDayDetails from "../../../helpers/formatDays";
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
            <Button style={{ display: "flex", justifyContent: "center" }} label="Edit" class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/equipements")}>
                Return</Button>
        </Layout>
    )
}