
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, SearchField, Button } from "@aws-amplify/ui-react";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import SiteMenu from "@/components/menu";
import * as React from 'react';
import { useRouter } from "next/router"

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

    return <><SiteMenu />

        <SearchField
            type="text"
            onChange={(e) => {
                setMachineserch(e.target.value)
            }
            } />
        <div>

            <Grid>
                {machine.map((equip) => {
                    return (
                        <Card variation="elevated" key={equip.id}>
                            <Heading level={4}>{equip.name}</Heading>
                            <div>{equip.attachments}</div>
                            <Link href={"/equipements/" + equip.id + "/edit"}>Edit</Link>
                            <div><Link href={"/equipements/" + equip.id + "/delete"}>Delete</Link></div>
                        </Card>
                    );
                })}
            </Grid>
            <Button>
                <div> <Link href={"/equipements/create/"}>Create Equipement</Link>
                </div></Button>
        </div></>


}




