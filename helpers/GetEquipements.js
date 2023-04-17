import { Equipements } from "@/src/models";
import { DataStore } from "aws-amplify";

async function getEquipements(id) {
    if (!id) {
        return (await DataStore.query(Equipements))
    }
    return (await DataStore.query(Equipements, id))
}
export default getEquipements