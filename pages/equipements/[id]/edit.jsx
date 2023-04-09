import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import EquipementsUpdateForm from "@/src/ui-components/EquipementsUpdateForm";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Loader } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import EquipementCard from "../../../components/equipementcard";
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Edit" }
];

export default function EquipementDetails() {
    const router = useRouter()
    const equipementid = router.query.id
    const [equipement, setEquipement] = useState()

    useEffect(() => {
        async function FindEquipement() {
            try {
                const machineFromDatastore = await DataStore.query(Equipements, equipementid);
                setEquipement(machineFromDatastore)

                console.log("Equipements retrieved successfully!");
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
            <Breadcrumb items={breadcrumbItems} />
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <EquipementCard props={equipement}>
                    <EquipementsUpdateForm id={equipementid}
                        onSuccess={() => router.reload()} />
                </EquipementCard>

            </Grid>
        </Layout>)
}