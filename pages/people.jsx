import SiteMenu from "@/components/menu";
import { People } from "@/src/models";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { Link, Card, Heading, Grid, SearchField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState, } from "react";
import * as React from 'react';
import { useRouter } from "next/router";


export default function Getpeople() {
    const router = useRouter()
    const [openswitch, setSwitch] = useState(false)
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

                console.log("People retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
            } catch (error) {
                searchpeople,
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
                GetPerson()
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
                            <Link href={"/person/" + user.id}>Edit</Link>
                            <div><Link href={"/person/delete/" + user.id}>Delete</Link></div>

                        </Card>
                    )
                })}
            </h1>  </Grid>
        <Grid>
            <Card variation="elevated" >
                <Heading level={4}>{"ADD People"}</Heading>
                <PeopleCreateForm
                    onSuccess={() => router.reload()}
                />  </Card>
        </Grid>

    </div>


}
