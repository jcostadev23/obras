import { People } from "@/src/models";
import { DataStore } from "aws-amplify";

async function getPeople(id) {
    console.log("getpeople", id)
    try {
        const personFromDB = await DataStore.query(People, c => c.name.contains(id))

        return personFromDB
    }
    catch (error) { console.log("Error don't get any People") }

}

export default getPeople

