import Layout from "@/components/layout"
import { Card, Heading, Grid, } from "@aws-amplify/ui-react";
import JobCreateForm from "@/src/ui-components/JobCreateForm";
import { useRouter } from "next/router"

export default function Create() {
    const { push } = useRouter()
    return (
        <Layout>
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Job"}</Heading>
                    <JobCreateForm
                        onSuccess={() => push("/jobs")} />  </Card>
            </Grid>
        </Layout>
    )
}