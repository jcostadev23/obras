import SiteMenu from "@/components/menu";
import { People } from "@/src/models";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { Link, SwitchField, Card, Heading, Grid, SearchField, View, colors, Button, useTheme } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import * as React from 'react';


export default function Obras() {
    const [openswitch, setSwitch] = useState(false)
    const [people, setPeople] = useState([])
    const [searchpeople, setSearchPeople] = useState("")
    const onChange = (e) => {
        setSearchPeople(e.target.value)
    }



    async function chamarpessoas() {
        try {

            const peopledainternet = await DataStore.query(People, c => c.name.contains(searchpeople,));
            setPeople(peopledainternet)

            console.log("Posts retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
        } catch (error) {
            searchpeople,
                console.log("Error retrieving posts", error);
        }

    }
    useEffect(() => {


        chamarpessoas()

    }, [])


    return <div>

        <SiteMenu
        />
        <SearchField
            type="text"
            onChange={(e) => {
                setSearchPeople(e.target.value)
                chamarpessoas()
            }
            } />



        <div>{searchpeople}</div>

        <Grid>
            {people.map((user) => {
                return (
                    <Card variation="elevated" key={user.id}>
                        <Heading level={4}>{user.name}</Heading>
                        <div>{user.phonenumber}</div>
                        <div>{user.role}</div>
                        <Link href={"/people/" + user.id}>Edit</Link>


                    </Card>
                )
            })}
        </Grid>
        <Grid>
            <Card variation="elevated" >
                <Heading level={4}>{"ADD WORKERS"}</Heading>
                <PeopleCreateForm
                    onSubmit={(fields) => {
                        // Example function to trim all string inputs
                        console.log(fields)
                        return fields
                    }}
                />  </Card>
        </Grid>

        <SwitchField
            onClick={() => setSwitch(true)}
            label="SwitchField"
            labelPosition="start"
        >

        </SwitchField>


        {openswitch && <div>opcoes de escolha</div>}


    </div>


}
