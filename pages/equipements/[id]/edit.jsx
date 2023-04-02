import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import EquipementsUpdateForm from "@/src/ui-components/EquipementsUpdateForm";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Heading, Loader } from "@aws-amplify/ui-react";

export default function EquipementDetails() {
    const router = useRouter()
    const equipementid = router.query.id
    const [equipement, setEquipement] = useState()

    useEffect(() => {
        async function FindEquipement() {
            try {
                const machineFromDatastore = await DataStore.query(Equipements, equipementid);
                setEquipement(machineFromDatastore)

                console.log("Equipements retrieved successfully!", JSON.stringify(machineFromDatastore, null, 2));
            } catch (error) {
                console.log("Error retrieving Equipements", error);
            }
        }

        if (!equipementid) {
            return
        }
        FindEquipement()
    }, [equipementid])

    if (!equipement) {
        return <Loader />
    }

    return (
        <Layout>
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{equipement.name}</Heading>
                    <div>{equipement.Attachments}</div>
                </Card>
            </Grid>
            <Grid>
                <Card variation="elevated">
                    <EquipementsUpdateForm id={equipementid}
                        onSuccess={() => router.reload()} />
                </Card>
            </Grid>
        </Layout>
    )
}