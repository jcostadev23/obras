import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";

async function getJob(id) {
    if (!id) {
        return (await DataStore.query(Job))
    }
    return (await DataStore.query(Job, id))
}
export default getJob