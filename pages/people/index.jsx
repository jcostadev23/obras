import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import { People } from "@/src/models";
import { Link, Collection, Card, Heading, Grid, Button, } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import * as React from 'react';
import { useRouter } from "next/router";

const breadcrumbItems = [{ label: "People" },
];

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

    return <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <Collection items={people} isPaginated itemsPerPage={10} isSearchable >
            {(person) => {
                return <Grid>
                    <Card variation="elevated" key={person.id}>
                        <Heading>{person.name}</Heading>
                        <div>Phone: {person.phonenumber}</div>
                        <div>Role: {person.role}</div>
                        <Link href={"/people/" + person.id + "/edit"}>Edit</Link>
                        <Link href={"/people/" + person.id + "/delete"}>Delete</Link>
                    </Card>
                </Grid>
            }}
        </Collection>
        <div></div>
        <Button>
            <Link href={"/people/create/"}>Create People</Link>
        </Button>
    </Layout>
}
