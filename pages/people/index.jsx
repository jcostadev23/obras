import SiteMenu from "@/components/menu";
import { People } from "@/src/models";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { Link, Card, Heading, Grid, SearchField, Button } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import * as React from 'react';
import { useRouter } from "next/router";


export default function Getpeople() {
    const router = useRouter()
    const [people, setPeople] = useState([])
    const [searchpeople, setSearchPeople] = useState("")
    const onChange = (e) => {
        setSearchPeople(e.target.value)
    }

    useEffect(() => {
        async function GetPerson() {
            try {
                const peopledainternet = await DataStore.query(People, c => c.name.contains(searchpeople,));
                setPeople(peopledainternet)

                console.log("People retrieved successfully!");
            } catch (error) {
                console.log("Error retrieving People", error);
            }
        }
        GetPerson()

    }, [searchpeople])

    return <div>

        <SiteMenu
        />
        <SearchField
            type="text"
            onChange={(e) => {
                setSearchPeople(e.target.value)
            }
            } />

        <Grid>
            <h1 className="text-1.25xl ">
                {people.map((user) => {
                    return (
                        <Card variation="elevated" key={user.id}>
                            <Heading level={4}>{user.name}</Heading>
                            <div>{user.phonenumber}</div>
                            <div>{user.role}</div>
                            <Link href={"/people/" + user.id + "/edit"}>Edit</Link>
                            <div><Link href={"/people/" + user.id + "/delete"}>Delete</Link></div>

                        </Card>
                    )
                })}
            </h1>  </Grid>
        <Button>
            <div> <Link href={"/people/create/"}>Create People</Link>
            </div></Button>
    </div>
}