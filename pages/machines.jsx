import EquipementsCreateForm from "@/src/ui-components/EquipementsCreateForm";
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, SearchField } from "@aws-amplify/ui-react";
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
                const serchmachine = await DataStore.query(Equipements, c => c.Name.contains(machineserch,));
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
                {machine.map((user) => {
                    return (
                        <Card variation="elevated" key={user.id}>
                            <Heading level={4}>{user.Name}</Heading>
                            <div>{user.Attachments}</div>
                            <Link href={"/equip./" + user.id}>Edit</Link>
                            <div><Link href={"/equip./deleteequip/" + user.id}>Delete</Link></div>
                        </Card>
                    );
                })}
            </Grid>
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Machine"}</Heading>
                    <EquipementsCreateForm
                        onSuccess={() => router.reload()} />  </Card>
            </Grid>

        </div></>


}




