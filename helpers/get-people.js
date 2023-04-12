import { People } from "@/src/models";
import { DataStore } from "aws-amplify";

async function getPeople(id) {
    if (!id) {
        return (await DataStore.query(People))
    }
    return (await DataStore.query(People, id))

}

export default getPeople

