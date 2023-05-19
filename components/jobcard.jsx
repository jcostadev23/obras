import { Card, Heading } from "@aws-amplify/ui-react";
export default function JobCard({ job, children }) {
    return (
        <Card variation="elevated" key={job.id} className="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
            <Heading className="text-3xl text-center my-5 font-bold">{job.name}</Heading>
            <p className="text-center mb-2">
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Address:
                </span>{" "}
                {job.address}
            </p>
            {children}
        </Card>
    );
};