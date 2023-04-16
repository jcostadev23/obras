import Layout from "@/components/layout"
import CustomButton from "@/components/button"
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Alert, Loader, Button } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import EquipementCard from "../../../components/equipementcard";
import getEquipement from "../../../helpers/get-equipements";
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Delete" }
];

export default function ItemDetails() {
    const { query, push } = useRouter()
    const equipId = query.id
    const [equipements, setEquipements] = useState([])

    async function DeleteEquipement() {
        const equipementToDelete = await DataStore.query(Equipements, equipId);
        await DataStore.delete(equipementToDelete);
        push("/equipements")
    }

    useEffect(() => {
        if (!equipId) {
            return
        }
        getEquipement(equipId)
            .then(equipementsFromDB => {
                setEquipements(equipementsFromDB);
            });
    }, [equipId])

    if (!equipements) {
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
                <EquipementCard equip={equipements}>
                    <Button
                        variation="destructive"
                        loadingText=""
                        onClick={DeleteEquipement}
                        ariaLabel="">
                        Delete
                    </Button> {"  "}
                    <CustomButton color={"green"} link={"/equipements"} text={"Exit"} />
                </EquipementCard>
            </Grid>
        </Layout>)
}

