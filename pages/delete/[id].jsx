import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { Grid, Card, Link, Heading, Loader } from "@aws-amplify/ui-react";



function itemdetails() {
    const { query } = useRouter()
    const itemid = query.id
    const [name, setName] = useState()

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
    function MyButton() {
        const router = useRouter();
        const handleClick = () => {
            router.push(href = "/obras")
        };
        return (<button
            onClick={handleClick}></button>
        )
    };

    async function deleteitem() {

        const postToDelete = await DataStore.query(People, itemid);
        await DataStore.delete(postToDelete);


    }
    return <>
        <SiteMenu />
        <Grid>
            <Card variation="elevated">
                <Heading level={4}>{name.name}</Heading>
                <div>{name.phonenumber}</div>
                <div>{name.role}</div>
                <button onClick={MyButton}>Continue</button>
                <div><Link href="/obras">Exit</Link></div>
            </Card>
        </Grid>
    </>
}


export default itemdetails

