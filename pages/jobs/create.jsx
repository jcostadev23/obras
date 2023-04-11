import Layout from "@/components/layout"
import { Card, Heading, } from "@aws-amplify/ui-react";
import JobCreateForm from "@/src/ui-components/JobCreateForm";
import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Create" }
];

export default function Create() {
    const { push } = useRouter()
    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Card className="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
                <Heading className="text-xl text-center my-5 font-bold">Add Job</Heading>
                <JobCreateForm
                    onSuccess={() => push("/jobs")} />  </Card>
        </Layout>
    )
}