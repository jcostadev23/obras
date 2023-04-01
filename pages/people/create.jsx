import SiteMenu from "@/components/menu";
import { Card, Heading, Grid } from "@aws-amplify/ui-react";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { useRouter } from "next/router";


export default function Create() {
    const router = useRouter()
    return (
        <><SiteMenu />
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Person"}</Heading>
                    <PeopleCreateForm
                        onSuccess={() => router.push("/people")} />  </Card>
            </Grid>
        </>
    )
}