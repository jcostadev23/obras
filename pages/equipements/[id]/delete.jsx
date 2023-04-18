import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import EquipementCard from "../../../components/equipementcard";
import getEquipements from "../../../helpers/getEquipements";
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Delete" }
];

export default function ItemDetails() {
    const { query, push } = useRouter()
    const equipementId = query.id
    const [equipement, setEquipement] = useState([])

    async function DeleteEquipement() {
        const equipementToDelete = await DataStore.query(Equipements, equipementId);
        await DataStore.delete(equipementToDelete);
        push("/equipements")
    }

    useEffect(() => {
        if (!equipementId) {
            return
        }
        getEquipements(equipementId)
            .then(equipementFromDB => {
                setEquipement(equipementFromDB);
            });
    }, [equipementId])

    if (!equipement) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg 
             bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <Alert
                    variation="warning"
                    isDismissible={false}
                    hasIcon={true}
                    heading="Atenttion">
                    This will delete the Equipement
                </Alert>
                <EquipementCard equipement={equipement}>
                    <Button
                        variation="destructive"
                        loadingText=""
                        onClick={DeleteEquipement}
                        ariaLabel="">
                        Delete
                    </Button> {"  "}
                    <Button style={{ display: "flex", justifyContent: "center" }} label="Edit" class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/equipements")}>
                        Exit</Button>
                </EquipementCard>
            </Grid>
        </Layout>)
}

