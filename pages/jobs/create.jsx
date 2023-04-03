import Layout from "@/components/layout"
import { Card, Heading, Grid, } from "@aws-amplify/ui-react";
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
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Job"}</Heading>
                    <JobCreateForm
                        onSuccess={() => push("/jobs")} />  </Card>
            </Grid>
        </Layout>
    )
}