import SiteMenu from "@/components/menu";
import { Card, Heading, Grid } from "@aws-amplify/ui-react";
import EquipementsCreateForm from "@/src/ui-components/EquipementsCreateForm";
import { useRouter } from "next/router";


export default function Create() {
    const router = useRouter()
    return (
        <><SiteMenu />
            <Grid>
                <Card variation="elevated">
                    <Heading level={4}>{"ADD Equipement"}</Heading>
                    <EquipementsCreateForm
                        onSuccess={() => router.reload()} />  </Card>
            </Grid>
        </>
    )
}