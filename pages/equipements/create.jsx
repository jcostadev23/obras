import Layout from "@/components/layout"
import { Card, Heading, Grid } from "@aws-amplify/ui-react";
import EquipementsCreateForm from "@/src/ui-components/EquipementsCreateForm";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Create" }
];
export default function Create() {
    const { push } = useRouter()
    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Card class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 " variation="elevated">
                <Heading level={4}>{"ADD Equipement"}</Heading>
                <EquipementsCreateForm
                    onSuccess={() => push("/equipements")} />  </Card>
        </Layout>
    )
}