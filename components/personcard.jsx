import { Card, Heading } from "@aws-amplify/ui-react";
export default function PersonCard({ person, children }) {
    return (
        <Card variation="elevated" key={person.id} className="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
            <Heading className="text-3xl text-center my-5 font-bold">{person.name}</Heading>
            <p className="text-center mb-2">
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Phone Number:
                </span>{" "}
                {person.phonenumber}
            </p>
            <p className="text-center mb-2">
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Role:
                </span>{" "}
                {person.role}
            </p>

            {children}
        </Card>
    );
};