
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, Collection } from "@aws-amplify/ui-react";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import * as React from 'react';
import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
import EquipementCard from "../../components/helpers/equipementcard";
const breadcrumbItems = [{ label: "Equipements", },
];

export default function CheckMachine() {
    const [machine, setMachine] = useState([])

    useEffect(() => {
        async function CallMachine() {
            try {
                const serchmachine = await DataStore.query(Equipements,);
                setMachine(serchmachine)
                console.log("Equipements retrieved successfully!");
            } catch (error) {
                console.log("Error retrieving Equipements", error);
            }
        }
        CallMachine()
    }, [])

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={machine} isPaginated itemsPerPage={10} isSearchable>
                {(equip) => {
                    return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                        <EquipementCard props={equip}>
                            <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center 
                             uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/equipements/" + equip.id + "/edit"}>Edit</Link>
                            <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center 
                             uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/equipements/" + equip.id}>Equipements Info</Link>
                            <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in 
                            tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/equipements/" + equip.id + "/delete"}>Delete</Link>
                        </EquipementCard></Grid>
                }}
            </Collection>
            <CustomButton color={"green"} link={"/equipements/create/"} text={"Create Equipements"} />
        </Layout>
    )
}




