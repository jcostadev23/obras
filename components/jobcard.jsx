import { Card, Heading } from "@aws-amplify/ui-react";
export default function JobCard({ job, children }) {
    return (
        <Card variation="elevated" key={job.id}>
            <Heading class="text-xl text-center my-5 font-bold">{job.name}</Heading>
            <h1 className="text-x text-center justify-center font-bold mb-4"> Address: {job.address}</h1>
            {children}
        </Card>
    );
};