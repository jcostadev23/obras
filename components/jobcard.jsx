import { Card, Heading } from "@aws-amplify/ui-react";
export default function JobCard({ job, children }) {
    return (
        <Card variation="elevated" key={job.id} class="middle-block px-6 py-6 mt-5 align-middle transition-all  rounded-lg  bg-gradient-to-tl from-gray-300 to-gray-400">
            <Heading class="text-xl text-center my-5 font-bold">{job.name}</Heading>
            <h1 className="text-x text-center justify-center font-bold mb-4"> Address: {job.address}</h1>
            {children}
        </Card>
    );
};