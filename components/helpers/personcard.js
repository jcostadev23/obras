import { Link, Collection, Card, Heading, Grid, } from "@aws-amplify/ui-react";
export default function PersonCard({ props, children }) {
    return (
        <Collection color="black" items={props} isPaginated itemsPerPage={10} isSearchable >
            {(person) => {
                return <Grid class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 "
                >
                    <Card class="middle-block px-6 py-3 mt-5 transition-all border-2 rounded-lg  bg-gradient-to-tl from-gray-400 to-gray-500 "
                        variation="elevated" key={person.id}>
                        <Heading level={3} color="black" fontWeight="bold" style={{ textAlign: "center" }} >{person.name}</Heading>
                        <h2 className="text-center align-middle">Phone: {person.phonenumber}</h2>
                        <div className="text-center align-middle">Role: {person.role}</div>

                        <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center align-middle transition-all border-0 rounded-lg  lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id + "/edit"}>Edit</Link>
                        <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center  uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-400 to-green-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id}>Person Info</Link>
                        <Link style={{ display: "flex", justifyContent: "center" }} class="inline-block my-5 px-6 py-3 mt-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer lg:w-full hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-400 to-red-700 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                            href={"/people/" + person.id + "/delete"}>Delete</Link>

                    </Card>
                </Grid>
            }}
        </Collection>
    )
}