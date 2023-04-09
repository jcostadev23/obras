
import { useEffect, useState } from "react";
import { Card, Heading, Grid, Link, Collection } from "@aws-amplify/ui-react";
import { Job } from "@/src/models";
import { DataStore } from "aws-amplify";
import Layout from "@/components/layout"
import CustomButton from "@/components/helpers/button"
import * as React from 'react';
import Breadcrumb from "@/components/breadcrumb"
import JobCard from "../../components/jobcard";

const breadcrumbItems = [{ label: "Jobs" },
];

export default function NewJob() {
    const [jobname, setJobname] = useState([])

    useEffect(() => {
        async function Findjob() {
            try {
                const serchjob = await DataStore.query(Job,);
                setJobname(serchjob)
                console.log("Jobs retrieved successfully!");
            } catch (error) {
                console.log("Error retrieving Jobs", error);
            }
        }
        Findjob()
    }, [])

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <Collection items={jobname} isPaginated itemsPerPage={10} isSearchable>
                {(job) => {
                    return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                        <JobCard props={job}>
                            <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center  uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/jobs/" + job.id + "/edit"}>Edit</Link>
                            <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center 
                             uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/jobs/" + job.id}>Job Info</Link>
                            <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in 
                            tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                href={"/jobs/" + job.id + "/delete"}>Delete</Link>
                        </JobCard>
                    </Grid>
                }}
            </Collection>
            <CustomButton link={"/jobs/create/"} color={"green"} text={"Create Jobs"} />
        </Layout>
    )
}
