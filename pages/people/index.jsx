import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import Breadcrumb from "@/components/breadcrumb"
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import * as React from 'react';
import { useRouter } from "next/router";
import PersonCard from "../../components/helpers/personcard";
const breadcrumbItems = [{ label: "People" },
];

export default function Getpeople() {
    const router = useRouter()
    const [people, setPeople] = useState([])
    const [searchpeople, setSearchPeople] = useState("")
    const onChange = (e) => {
        setSearchPeople(e.target.value)
    }

    useEffect(() => {
        async function GetPerson() {
            try {
                const peopledainternet = await DataStore.query(People, c => c.name.contains(searchpeople,));
                setPeople(peopledainternet)
                console.log("People retrieved successfully!");
            } catch (error) {
                console.log("Error retrieving People", error);
            }
        }
        GetPerson()
    }, [searchpeople])

    return <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <PersonCard props={people} />
        <CustomButton color={"lightgreen"} link={"/people/create/"} text={"Create people"} />
    </Layout>
}
