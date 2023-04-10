import { Card, Heading } from "@aws-amplify/ui-react";
export default function EquipementCard({ equip, children }) {
    return (
        <Card variation="elevated" key={equip.id}>
            <Heading className="text-xl text-center my-5 font-bold">{equip.name}</Heading>
            <h1 className="text-x text-center justify-center font-bold mb-4">Attachments: {equip.attachments}</h1>
            {children}
        </Card>
    );
};