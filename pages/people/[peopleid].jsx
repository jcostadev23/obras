import SiteMenu from "@/components/menu";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PeopleUpdateForm from "@/src/ui-components/PeopleUpdateForm";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";

function PeopleDetails() {
    const { query, isReady } = useRouter()
    const peopleid = query.peopleid
    const [people, setPeople] = useState()

    async function chamarpessoas() {


        try {
            console.log("id:", peopleid)
            const peopledainternet = await DataStore.query(People, peopleid);
            setPeople(peopledainternet)

            console.log("Posts retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
        } catch (error) {
            console.log("Error retrieving posts", error);
        }
        console.log(peopleid)


    }
    useEffect(() => {
        if (!peopleid) {
            return
        }
        chamarpessoas()


    }, [peopleid])

    return <><SiteMenu />
        <PeopleUpdateForm />
        <div> {peopleid} </div>


        {JSON.stringify(people)} </>



}


export default PeopleDetails