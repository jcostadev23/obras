import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Link, Heading, Loader } from "@aws-amplify/ui-react";

function itemdetails() {
    const { query, push } = useRouter()
    const itemid = query.id
    const [name, setName] = useState()

    async function deleteitem() {
        const postToDelete = await DataStore.query(People, itemid);
        await DataStore.delete(postToDelete);
        push("/obras")


    }
    async function itemname() {
        try {
            const itemFromDatastore = await DataStore.query(People, itemid);
            setName(itemFromDatastore)

            console.log("Posts retrieved successfully!", JSON.stringify(itemFromDatastore, null, 2));
        } catch (error) {
            console.log("Error retrieving posts", error);
        }
    }

    useEffect(() => {

        if (!itemid) {
            return
        }
        itemname()
    }, [itemid])

    if (!name) {
        return <Loader />
    }


    return <>
        <SiteMenu />
        <Grid>
            <Card variation="elevated">
                <div style={{ color: 'red' }}> (By Continue you gone delete all the data one this id)</div>
                <Heading level={4}>{name.name}</Heading>
                <div>{name.phonenumber}</div>
                <div>{name.role}</div>
                <button onClick={deleteitem}>Continue</button>
                <div><Link href="/obras">Exit</Link></div>
            </Card>
        </Grid>
    </>
}
export default itemdetails

