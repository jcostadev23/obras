import SiteMenu from "@/components/menu";
import { Card, Heading, Grid, } from "@aws-amplify/ui-react";
import JobCreateForm from "@/src/ui-components/JobCreateForm";
import { useRouter } from "next/router"

export default function Create() {
    const router = useRouter()
    return (
        <><SiteMenu />
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Job"}</Heading>
                    <JobCreateForm
                        onSuccess={() => router.reload()} />  </Card>
            </Grid></>
    )
}