import SiteMenu from "@/components/menu";
import { Card, Heading, Grid, } from "@aws-amplify/ui-react";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";

export default function Create() {
    return (
        <><SiteMenu />
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Person"}</Heading>
                    <PeopleCreateForm
                        onSuccess={() => href = "/people"} />  </Card>
            </Grid></>
    )
}