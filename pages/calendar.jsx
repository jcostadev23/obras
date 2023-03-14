import React from 'react';
import { People, Job, Equipements } from "@/src/models";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { SelectField } from "@aws-amplify/ui-react";
import { useEffect, useState, } from "react";
import { DataStore } from "aws-amplify";

export default function Example() {
    const [personid, setPersonid] = useState("")
    const [selected, setSelected] = useState();
    const [people, setPeople] = useState([])
    const [jobid, setJobid] = useState("")
    const [jobname, setJobname] = useState([])
    const [machineid, setMachineid] = useState("")
    const [machine, setMachine] = useState([])

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    useEffect(() => {
        async function GetPerson() {
            try {
                const peopledainternet = await DataStore.query(People);
                setPeople(peopledainternet)
                console.log("People retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
            } catch (error) {
                console.log("Error retrieving People", error);
            }
        }
        GetPerson()
    }, [])

    useEffect(() => {
        async function Findjob() {
            try {
                const serchjob = await DataStore.query(Job);
                setJobname(serchjob)

                console.log("Jobs retrieved successfully!", JSON.stringify(serchjob, null, 2));
            } catch (error) {
                console.log("Error retrieving Jobs", error);
            }
        }

        Findjob()

    }, [])

    useEffect(() => {
        async function CallMachine() {
            try {
                const serchmachine = await DataStore.query(Equipements);
                setMachine(serchmachine)

                console.log("Equipements retrieved successfully!", JSON.stringify(serchmachine, null, 2));
            } catch (error) {
                console.log("Error retrieving Equipements", error);
            }
        }

        CallMachine()

    }, [])

    return <><DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer} />

        <SelectField
            label="People"
            descriptiveText="Select a Person?"
            value={personid}
            onChange={(e) => setPersonid(e.target.value)} >
            <option></option>
            {people.map((user) => {
                return <option value={user.id}
                    key={user.id}>
                    {user.name}
                </option>
            })}

        </SelectField>
        <div>{personid}</div>

        <SelectField
            label="Job"
            descriptiveText="Select a Job?"
            value={jobid}
            onChange={(e) => setJobid(e.target.value)}>
            <option></option>
            {jobname.map((user) => {
                return <option value={user.id}
                    key={user.id}>
                    {user.name}
                </option>
            })}
        </SelectField>
        <div>{jobid}</div>

        <SelectField
            label="Equipement"
            descriptiveText="Select a Equipement?"
            value={machineid}
            onChange={(e) => setMachineid(e.target.value)}>
            <option></option>
            {machine.map((user) => {
                return <option value={user.id}
                    key={user.id}>
                    {user.Name}
                </option>
            })}
        </SelectField>
        <div>{machineid}</div>

    </>
}
