import Layout from "@/components/layout"
import { Card, Heading, Grid } from "@aws-amplify/ui-react";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { useRouter } from "next/router";
import Breadcrumb from "../../components/breadcrumb";


export default function Create() {
    const router = useRouter()
    return (
        <Layout>
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Person"}</Heading>
                    <PeopleCreateForm
                        onSuccess={() => router.push("/people")} />  </Card>
            </Grid>
        </Layout>
    )
}