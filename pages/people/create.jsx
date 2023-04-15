import Layout from "@/components/layout"
import { Card, Heading } from "@aws-amplify/ui-react";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/breadcrumb"

const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Create" }
];

export default function CreatePerson() {
    const router = useRouter()
    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Card class="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
                <Heading className="largerText-front-size-25px" style={{ display: "flex", justifyContent: "center" }}>Add Person</Heading>
                <PeopleCreateForm
                    onSuccess={() => router.push("/people")} />  </Card>
        </Layout>
    )
}