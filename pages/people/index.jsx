import Layout from "@/components/layout"
import Breadcrumb from "@/components/breadcrumb"
import { People } from "@/src/models";
import { Link, Collection, Card, Heading, Grid, SearchField, Button, Pagination } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import * as React from 'react';
import { useRouter } from "next/router";

const breadcrumbItems = [{ label: "People", url: "/people" },
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
        <SearchField
            type="text"
            onChange={(e) => {
                setSearchPeople(e.target.value)
            }
            } />
        <div></div>
        <Collection items={people} isPaginated itemsPerPage={10}>
            {(person) => {
                return <div><Grid>
                    <Card variation="elevated" key={person.name}>
                        <Heading>{person.name}</Heading>
                        <div>Phone: {person.phonenumber}</div>
                        <div>Role: {person.role}</div>
                        <div><Link href={"/people/" + person.id + "/edit"}>Edit</Link></div>
                        <div><Link href={"/people/" + person.id + "/delete"}>Delete</Link></div>
                    </Card>
                </Grid></div>
            }}
        </Collection>
        <div></div>
        <Button>
            <div> <Link href={"/people/create/"}>Create People</Link>
            </div></Button>
    </Layout>
}
