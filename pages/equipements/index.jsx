
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, SearchField, Button, Collection } from "@aws-amplify/ui-react";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import Layout from "@/components/layout"
import * as React from 'react';
import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Equipements", },
];

export default function CheckMachine() {
    const router = useRouter()
    const [machine, setMachine] = useState([])
    const [machineserch, setMachineserch] = useState("")
    const onEquipementsChange = (e) => {
        setMachineserch(e.target.value)
    }

    useEffect(() => {
        async function CallMachine() {
            try {
                const serchmachine = await DataStore.query(Equipements, c => c.name.contains(machineserch,));
                setMachine(serchmachine)

                console.log("Equipements retrieved successfully!", JSON.stringify(serchmachine, null, 2));
            } catch (error) {
                machineserch,
                    console.log("Error retrieving Equipements", error);
            }
        }
        CallMachine()
    }, [machineserch,])

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={machine} isPaginated itemsPerPage={10} isSearchable>
                {(equip) => {
                    return <Grid>
                        <Card variation="elevated" key={equip.id}>
                            <Heading>{equip.name}</Heading>
                            <div>Attachments: {equip.attachments}</div>
                            <Link href={"/equipements/" + equip.id + "/edit"}>Edit</Link>
                            <Link href={"/equipements/" + equip.id + "/delete"}>Delete</Link>
                        </Card></Grid>
                }}
            </Collection>
            <Button type="button" class="inline-block px-6 py-3 mb-4 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-blue-200 to-blue-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">
                <Link href={"/equipements/create/"}>Create Equipement</Link>
            </Button>
        </Layout>
    )
}




