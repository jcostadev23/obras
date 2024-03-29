import Layout from "@/components/layout"
import getPeople from "../../helpers/getPeople"
import Breadcrumb from "@/components/breadcrumb"
import { Link, Collection, Button, Grid, } from "@aws-amplify/ui-react";
import { useEffect, useState, } from "react";
import * as React from 'react';

import PersonCard from "@/components/personcard"
const breadcrumbItems = [{ label: "People" },
];

export default function AllPeople() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        getPeople()
            .then(peopleFromDB => {
                setPeople(peopleFromDB);
            });
    }, [])

    return <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <Collection color="black" items={people} isPaginated itemsPerPage={10} isSearchable >
            {(person) => {
                return <Grid className="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                    <PersonCard person={person}>
                        <Link style={{ display: "flex", justifyContent: "center" }} className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center align-middle transition-all border-0 rounded-lg  lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id + "/edit"}>Edit</Link>
                        <Link style={{ display: "flex", justifyContent: "center" }} className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center  uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id}>Person Info</Link>
                        <Link style={{ display: "flex", justifyContent: "center" }} label="Delete" className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id + "/delete"}>Delete</Link>
                    </PersonCard>
                </Grid>
            }}
        </Collection>
        <Button style={{ display: "flex", justifyContent: "center" }} label="Edit" className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/people/create/")}>
            Add Person</Button>
    </Layout>
}
