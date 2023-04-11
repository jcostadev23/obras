import Layout from "@/components/layout"
import CustomButton from "@/components/button"
import Breadcrumb from "@/components/breadcrumb"
import { Link, Collection, Grid, } from "@aws-amplify/ui-react";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import * as React from 'react';
import PersonCard from "@/components/personcard"
const breadcrumbItems = [{ label: "People" },
];

export default function Getpeople() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function GetPerson() {
            try {
                const peopledainternet = await DataStore.query(People,);
                setPeople(peopledainternet)
                console.log("People retrieved successfully!");
            } catch (error) {
                console.log("Error retrieving People", error);
            }
        }
        GetPerson()
    }, [])

    return <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <Collection color="black" items={people} isPaginated itemsPerPage={10} isSearchable >
            {(person) => {
                return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                    <PersonCard person={person}>
                        <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center align-middle transition-all border-0 rounded-lg  lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id + "/edit"}>Edit</Link>
                        <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center  uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id}>Person Info</Link>
                        <Link style={{ display: "flex", justifyContent: "center" }} label="Delete" class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id + "/delete"}>Delete</Link>
                    </PersonCard>

                </Grid>
            }}
        </Collection>

        <CustomButton color={"green"} link={"/people/create/"} text={"Create people"} />
    </Layout>
}
