import SiteMenu from "@/components/menu";
import { People } from "@/src/models";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { Link, SwitchField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";

export default function Obras() {
    const [people, setPeople] = useState([])
    const ola = "ola aurelio"
    useEffect(() => {
        async function chamarpessoas() {
            try {

                const peopledainternet = await DataStore.query(People);
                setPeople(peopledainternet)
                console.log("Posts retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
            } catch (error) {
                console.log("Error retrieving posts", error);
            }

        }
        chamarpessoas()

    }, [])
    return <div>
        <SiteMenu
        />
        obra do costa ola
        <div>{JSON.stringify(people)}</div>
        <div>{ola} pita </div>
        <div>
            <SwitchField
                isDisabled={false}
                label="SwitchField"
                labelPosition="start"
            />
        </div>
        <PeopleCreateForm
            onSubmit={(fields) => {
                // Example function to trim all string inputs
                console.log(fields)
                return fields
            }}
        />

    </div>
}
