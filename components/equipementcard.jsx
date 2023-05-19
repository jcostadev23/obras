import { Card, Heading } from "@aws-amplify/ui-react";
export default function EquipementCard({ equipement, children }) {
    return (
        <Card variation="elevated" key={equipement.id} className="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
            <Heading className="text-3xl text-center my-5 font-bold">{equipement.name}</Heading>
            <p className="text-center mb-2">
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Attachments:
                </span>{" "}
                {equipement.attachments}
            </p>
            {children}
        </Card>
    );
};