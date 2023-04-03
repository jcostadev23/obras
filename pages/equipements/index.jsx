
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, SearchField, Button, Collection } from "@aws-amplify/ui-react";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import Layout from "@/components/layout"
import * as React from 'react';
import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" },
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
            <SearchField
                type="text"
                onChange={(e) => {
                    setMachineserch(e.target.value)
                }} />
            <div>
                <Collection items={machine} isPaginated itemsPerPage={10}>
                    {(equip) => {
                        return <div><Grid>
                            <Card variation="elevated" key={equip.name}>
                                <Heading>{equip.name}</Heading>
                                <div>Attachments: {equip.attachments}</div>
                                <Link href={"/equipements/" + equip.id + "/edit"}>Edit</Link>
                                <div><Link href={"/equipements/" + equip.id + "/delete"}>Delete</Link></div>
                            </Card></Grid></div>
                    }}
                </Collection>

                <Button>
                    <div> <Link href={"/equipements/create/"}>Create Equipement</Link>
                    </div></Button>
            </div>
        </Layout>
    )
}




