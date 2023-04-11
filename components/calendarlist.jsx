import FormatTime from "../helpers/formattime";
import { Collection, Grid, Link, Card, Heading, TextAreaField } from "@aws-amplify/ui-react";

export default function CalendarList({ props, children }) {
    return (
        <Collection items={props} isPaginated itemsPerPage={10} isSearchable>
            {(details) => {
                return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 ">
                    <Card variation="elevated" key={details.id} class="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
                        <Heading class="text-xl text-center my-5 font-bold">{details.day}</Heading>
                        <h1 class="text-x text-center justify-center font-bold mb-2"> People: {details.people.name}</h1>
                        <h2 class="text-black  text-center font-semibold text-base mb-2">{details.workerTimeMinutes && <div>Hours: {FormatTime(details.workerTimeMinutes)}</div>}</h2>
                        <h3 class="text-black  text-center font-semibold text-base mb-2">{details.job && <div>Job: {details.job.name}</div>}</h3>
                        <h4 class="text-black  text-center font-semibold text-base mb-2"> {details.equipement && <div>Equipement: {details.equipement.name}</div>} </h4>
                        {/* need to do something to resole when is not hours selected */}
                        <h5 className="text-black  text-center font-semibold text-base mb-2"> {details.equipmentTimeMinutes && <div>Equipement Hours: {FormatTime(details.equipmentTimeMinutes)}</div>} </h5>
                        <TextAreaField

                            label="Description"
                            labelHidden={false}
                            rows="3"
                            size="small"
                            wrap="nowrap"
                            value={details.Prototype}
                        />
                        <h6 className="text-black  text-center font-semibold text-base mb-2"> {details.description && <div>Description: {details.description}</div>} </h6>
                        {children}
                        <Link style={{ display: "flex", justifyContent: "center" }} label="Delete" class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/calendar/" + details.id + "/delete"}>Delete</Link>
                    </Card></Grid>
            }}
        </Collection>
    );
};