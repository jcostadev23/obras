import { Card, Collection, Grid, Heading, Link } from "@aws-amplify/ui-react";
import FormatTime from "../../components/helpers/formattime";

export default function CalendarList({ props, link }) {
    return (
        <Collection items={props} isPaginated itemsPerPage={10} isSearchable>
            {(days) => {
                return <Grid>
                    <Card variation="elevated" key={days.id}>
                        <Heading>{days.day}</Heading>
                        <div>People: {days.people.name}</div>
                        {days.workerTimeMinutes && <div>Hours: {FormatTime(days.workerTimeMinutes)}</div>}
                        {days.job && <div>Job: {days.job.name}</div>}
                        {days.equipement && <div>Equipement: {days.equipement.name}</div>}
                        {/* need to do something to resole when is not hours selected */}
                        {days.equipmentTimeMinutes && <div>Equipement Hours: {FormatTime(days.equipmentTimeMinutes)}</div>}
                        <Link href={"/calendar/" + days.id + "/delete"}>Delete</Link>
                    </Card>
                </Grid>
            }}
        </Collection>
    )
}