import SiteMenu from "@/components/menu";
import { People } from "@/src/models";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { Link, SwitchField, Card, Heading, Grid, SearchField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import * as React from 'react';
import { useRouter } from "next/router";


export default function Obras() {
    const router = useRouter()
    const [openswitch, setSwitch] = useState(false)
    const [people, setPeople] = useState([])
    const [searchpeople, setSearchPeople] = useState("")
    const onChange = (e) => {
        setSearchPeople(e.target.value)
    }

    useEffect(() => {
        async function ChamarPessoas() {

            try {

                const peopledainternet = await DataStore.query(People, c => c.name.contains(searchpeople,));
                setPeople(peopledainternet)

                console.log("Worker retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
            } catch (error) {
                searchpeople,
                    console.log("Error retrieving Worker", error);
            }

        }



        ChamarPessoas()

    }, [searchpeople])


    return <div>

        <SiteMenu
        />
        <SearchField
            type="text"
            onChange={(e) => {
                setSearchPeople(e.target.value)
                ChamarPessoas()
            }
            } />



        <div>{searchpeople}</div>

        <Grid>
            <h1 className="text-1.25xl ">
                {people.map((user) => {
                    return (
                        <Card variation="elevated" key={user.id}>
                            <Heading level={4}>{user.name}</Heading>
                            <div>{user.phonenumber}</div>
                            <div>{user.role}</div>
                            <Link href={"/person/" + user.id}>Edit</Link>
                            <div><Link href={"/person/delete/" + user.id}>Delete</Link></div>

                        </Card>
                    )
                })}
            </h1>  </Grid>
        <Grid>
            <Card variation="elevated" >
                <Heading level={4}>{"ADD WORKERS"}</Heading>
                <PeopleCreateForm
                    onSuccess={() => router.reload()}
                />  </Card>
        </Grid>

        <SwitchField
            onClick={() => setSwitch(true)}
            label="SwitchField"
            labelPosition="start"
        >
        </SwitchField>


        {openswitch && <div>opcoes de escolha</div>}
        <div
            onClick={() => setSwitch(true)}
            label="SwitchField"
            labelPosition="start"
        >
        </div>

    </div>


}
