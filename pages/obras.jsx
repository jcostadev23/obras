import SiteMenu from "@/components/menu";
import { People } from "@/src/models";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { Link, SwitchField, Card, Heading, Grid, View, colors, useTheme } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import * as React from 'react';

export default function Obras() {
    const [openswitch, setSwitch] = useState(false)
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
        <div>{ola} pita </div>
        <Grid>
            {people.map((user) => {
                return (
                    <Card variation="elevated" key={user.id}>
                        <Heading level={4}>{user.name}</Heading>
                        <div>{user.phonenumber}</div>
                        <div>{user.role}</div>
                    </Card>
                )
            })}
        </Grid>



        <SwitchField
            onClick={() => setSwitch(true)}
            label="SwitchField"
            labelPosition="start"
        >
        </SwitchField>


        {openswitch && <div>opcoes de escolha</div>}


        <PeopleCreateForm
            onSubmit={(fields) => {
                // Example function to trim all string inputs
                console.log(fields)
                return fields
            }}
        />

    </div>
}
