import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import EquipementsUpdateForm from "@/src/ui-components/EquipementsUpdateForm";
import { Grid, Loader } from "@aws-amplify/ui-react";
import Breadcrumb from "@/components/breadcrumb"
import EquipementCard from "../../../components/equipementcard";
import getEquipement from "../../../helpers/get-equipements";
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Edit" }
];

export default function EquipementDetails() {
    const router = useRouter()
    const equipementid = router.query.id
    const [equipement, setEquipement] = useState()

    useEffect(() => {
        if (!equipementid) {
            return
        }
        getEquipement(equipementid)
            .then(equipementFromDB => {
                setEquipement(equipementFromDB);
            });

    }, [equipementid])

    if (!equipement) {
        return <Loader />
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                <EquipementCard equipement={equipement}>
                    <EquipementsUpdateForm id={equipementid}
                        onSuccess={() => router.reload()} />
                </EquipementCard>

            </Grid>
        </Layout>)
}