import formatTime from "../helpers/FormatTime";
import { Collection, Grid, Link, Card, Heading } from "@aws-amplify/ui-react";

export default function CalendarList({ days, children }) {
    return (
        <Collection items={days} isPaginated itemsPerPage={10} isSearchable>
            {(day) => {
                return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 shadow-lg">
                    <Card variation="elevated" key={day.id} class="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
                        <Heading class="text-xl text-center my-5 font-bold">{day.day}</Heading>
                        <h1 className="text-x text-center justify-center font-bold mb-2"> People: {day.people.name}</h1>
                        <h2 className="text-black  text-center font-semibold text-base mb-2">{day.workerTimeMinutes >= 0 && <div>Hours: {formatTime(day.workerTimeMinutes)}</div>}</h2>
                        <h3 className="text-black  text-center font-semibold text-base mb-2">{day.job && <div>Job: {day.job.name}</div>}</h3>
                        <h4 className="text-black  text-center font-semibold text-base mb-2"> {day.equipement && <div>Equipement: {day.equipement.name}</div>} </h4>
                        {/* need to do something to resole when is not hours selected */}
                        <h5 className="text-black  text-center font-semibold text-base mb-2"> {day.equipmentTimeMinutes >= 0 && <div>Equipement Hours: {formatTime(day.equipmentTimeMinutes)}</div>} </h5>
                        <h6 className="text-black  text-center font-semibold text-base mb-2"> {day.description && <div>Description: {day.description}</div>} </h6>
                        {children}
                        <Link style={{ display: "flex", justifyContent: "center" }} label="Delete" class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/calendar/" + day.id + "/delete"}>Delete</Link>
                    </Card></Grid>
            }}
        </Collection>
    );
};