import { Card, Heading } from "@aws-amplify/ui-react";
export default function PersonCard({ person, children }) {
    return (

        <Card variation="elevated" key={person.id} class="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
            <Heading class="text-xl text-center my-5 font-bold">{person.name}</Heading>
            <h1 className="text-black text-center justify-center font-bold mb-4">Phone Number: {person.phonenumber}</h1>
            <h2 className="text-black  text-center font-semibold text-base mb-2">Role: {person.role} </h2>
            {children}
        </Card>
    );
};