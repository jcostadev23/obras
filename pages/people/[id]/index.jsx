import { Link, Card, Heading, Grid, SearchField } from "@aws-amplify/ui-react";
import { useState } from "react";
import { People } from "@/src/models";
import { DataStore } from "aws-amplify";
import { useRouter } from 'next/router';

function Oneperson({ id }) {
    const router = useRouter();
    return (
        <div>
            <h1>Oneperson: {id} </h1>
        </div>
    );

}
export default Oneperson;