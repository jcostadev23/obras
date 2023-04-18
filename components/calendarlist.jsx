import formatTime from "../helpers/FormatTime";
import { Collection, Grid, Link, Card, Heading } from "@aws-amplify/ui-react";

export default function CalendarList({ days, children }) {
    return (
        <Collection items={days} isPaginated itemsPerPage={10} isSearchable>
            {(day) => {
                return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 shadow-lg">
                    <Card variation="elevated" key={day.id} class="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
                        <Heading class="text-3xl text-center my-5 font-bold">{day.day}</Heading>
                        <p className="text-center mb-2">
                            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                Person:
                            </span>{" "}
                            {day.people.name}
                        </p>
                        {day.workerTimeMinutes >= 0 &&
                            <p className="text-center mb-2">
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                    Hours:
                                </span>{" "}
                                {formatTime(day.workerTimeMinutes)}
                            </p>}
                        {day.job &&
                            <p className="text-center mb-2">
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                    Job:
                                </span>{" "}
                                {day.job.name}
                            </p>}
                        {day.equipement &&
                            <p className="text-center mb-2">
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                    Equipement:
                                </span>{" "}
                                {day.equipement.name}
                            </p>}
                        {day.equipmentTimeMinutes >= 0 &&
                            <p className="text-center mb-2">
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                    Equipement Hours:
                                </span>{" "}
                                {formatTime(day.equipmentTimeMinutes)}
                            </p>}
                        {day.description &&
                            <p className="text-center mb-2">
                                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                                    Description:
                                </span>{" "}
                                {day.description}
                            </p>}

                        {children}
                        <Link style={{ display: "flex", justifyContent: "center" }} label="Delete" class="inline-block my-5 px-6 py-3 mt-2 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/calendar/" + day.id + "/delete"}>Delete</Link>
                    </Card></Grid>
            }}
        </Collection>
    );
};