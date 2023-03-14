import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import EquipementsUpdateForm from "@/src/ui-components/EquipementsUpdateForm";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Heading, Loader } from "@aws-amplify/ui-react";

function MachineDetails() {
    const router = useRouter()
    const { query, } = useRouter()
    const machineid = query.editequip
    const [machine, setMachine] = useState()

    useEffect(() => {
        async function FindMachine() {
            try {
                const machineFromDatastore = await DataStore.query(Equipements, machineid);
                setMachine(machineFromDatastore)

                console.log("Equipements retrieved successfully!", JSON.stringify(machineFromDatastore, null, 2));
            } catch (error) {
                console.log("Error retrieving Equipements", error);
            }
        }

        if (!machineid) {
            return
        }
        FindMachine()
    }, [machineid])

    if (!machine) {
        return <Loader />
    }

    return <>
        <SiteMenu /><Grid>
            <Card variation="elevated">
                <Heading level={4}>{machine.name}</Heading>
                <div>{machine.Attachments}</div>
            </Card>
        </Grid>
        <Grid>
            <Card variation="elevated">
                <EquipementsUpdateForm id={machineid}
                    onSuccess={() => router.reload()} />
            </Card>
        </Grid>

    </>
}

export default MachineDetails