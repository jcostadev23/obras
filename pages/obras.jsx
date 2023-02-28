import SiteMenu from "@/components/menu";
import { People } from "@/src/models";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { Link, SwitchField, Card, Heading, Grid, SearchField, View, colors, useTheme } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import * as React from 'react';

export const SearchFieldControlledExample = () => {
    const [value, setValue] = React.useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    // It is your responsibility to set up onClear
    const onClear = () => {
        setValue('');
    };

    return (
        <div>{value}</div>
    );
};

export default function Obras() {
    const [openswitch, setSwitch] = useState(false)
    const [people, setPeople] = useState([])

    const ola = "ola aurelio"
    useEffect(() => {
        async function chamarpessoas() {
            try {

                const peopledainternet = await DataStore.query(People, c => c.name.contains(""));
                setPeople(peopledainternet)

                console.log("Posts retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
            } catch (error) {
                pessoasearch,
                    console.log("Error retrieving posts", error);
            }

        }
        chamarpessoas()

    }, [])


    return <div>
        <SearchField
            label="Search"
            placeholder="Search here..."
        />

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
