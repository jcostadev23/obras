import { Card, Heading } from "@aws-amplify/ui-react";
export default function PersonCard({ person, children }) {
    return (

        <Card variation="elevated" key={person.id}>
            <Heading className="text-xl text-center my-5 font-bold">{person.name}</Heading>
            <h1 className="text-black text-center justify-center font-bold mb-4">Phone Number: {person.phonenumber}</h1>
            <h2 className="text-black  text-center font-semibold text-base mb-2">Role: {person.role} </h2>
            {children}
        </Card>
    );
};