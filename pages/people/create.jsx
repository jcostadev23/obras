import Layout from "@/components/layout"
import { Card, Heading, Grid } from "@aws-amplify/ui-react";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Create" }
];


export default function Create() {
    const router = useRouter()
    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Card class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400 " variation="elevated">
                <Heading level={4}>{"ADD Person"}</Heading>
                <PeopleCreateForm
                    onSuccess={() => router.push("/people")} />  </Card>
        </Layout>
    )
}