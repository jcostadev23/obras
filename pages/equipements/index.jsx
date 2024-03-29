
import { useEffect, useState } from "react";
import { Grid, Link, Button, Collection } from "@aws-amplify/ui-react";
import Layout from "@/components/layout"
import * as React from 'react';
import Breadcrumb from "@/components/breadcrumb"
import EquipementCard from "../../components/equipementcard";
import getEquipements from "../../helpers/getEquipements";
const breadcrumbItems = [{ label: "Equipements", },
];

export default function AllEquipements() {
    const [equipements, setEquipements] = useState([])

    useEffect(() => {
        getEquipements()
            .then(equipementFromDB => {
                setEquipements(equipementFromDB);
            });
    }, [])

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={equipements} isPaginated itemsPerPage={10} isSearchable>
                {(equipement) => {
                    return <Grid className="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                        <EquipementCard equipement={equipement}>
                            <Link style={{ display: "flex", justifyContent: "center" }} className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center 
                             uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/equipements/" + equipement.id + "/edit"}>Edit</Link>
                            <Link style={{ display: "flex", justifyContent: "center" }} className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center 
                             uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/equipements/" + equipement.id}>Equipements Info</Link>
                            <Link style={{ display: "flex", justifyContent: "center" }} className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in 
                            tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/equipements/" + equipement.id + "/delete"}>Delete</Link>
                        </EquipementCard></Grid>
                }}
            </Collection>
            <Button style={{ display: "flex", justifyContent: "center" }} label="Edit" className="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25" onClick={() => (window.location.href = "/equipements/create/")}>
                Add Equipement</Button>
        </Layout>
    )
}




