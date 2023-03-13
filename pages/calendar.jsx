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
    const [searchpeople, setSearchPeople] = useState("")
    const onChange = (e) => {
        setSearchPeople(e.target.value)
    }
    const [jobid, setJobid] = useState("")
    const [jobname, setJobname] = useState([])
    const [jobserch, setJobserch] = React.useState("")
    const onJobChange = (e) => {
        setJobserch(e.target.value)
    }
    const [machineid, setMachineid] = useState("")
    const [machine, setMachine] = useState([])
    const [machineserch, setMachineserch] = useState("")
    const onEquipementsChange = (e) => {
        setMachineserch(e.target.value)
    }

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    useEffect(() => {
        async function GetPerson() {
            try {
                const peopledainternet = await DataStore.query(People, c => c.name.contains(searchpeople,));
                setPeople(peopledainternet)
                console.log("People retrieved successfully!", JSON.stringify(peopledainternet, null, 2));
            } catch (error) {
                searchpeople,
                    console.log("Error retrieving People", error);
            }
        }
        GetPerson()
    }, [searchpeople])

    useEffect(() => {
        async function Findjob() {
            try {
                const serchjob = await DataStore.query(Job, c => c.name.contains(jobserch,));
                setJobname(serchjob)

                console.log("Jobs retrieved successfully!", JSON.stringify(serchjob, null, 2));
            } catch (error) {
                jobserch,
                    console.log("Error retrieving Jobs", error);
            }
        }


        Findjob()

    }, [jobserch,])

    useEffect(() => {
        async function CallMachine() {
            try {
                const serchmachine = await DataStore.query(Equipements, c => c.Name.contains(machineserch,));
                setMachine(serchmachine)

                console.log("Equipements retrieved successfully!", JSON.stringify(serchmachine, null, 2));
            } catch (error) {
                machineserch,
                    console.log("Error retrieving Equipements", error);
            }
        }


        CallMachine()

    }, [machineserch,])

    return <><DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer} />

        <SelectField

            label="People"
            descriptiveText="Select a Person?"
            onChange={(e) => setPersonid(e.target.value)}
        >
            {people.map((user) => {
                return <option value={user.id}
                    key={user.id}>
                    {user.name}
                    {user.id}
                </option>

            })}

        </SelectField>

        <div>{personid}</div>


        <SelectField
            label="Job"
            descriptiveText="Select a Job?"
            onChange={(e) => setJobid(e.target.value)}>
            {jobname.map((user) => {
                return <option value={user.id}
                    key={user.id}>
                    {user.name}
                    {user.id}
                </option>
            })}
        </SelectField>
        <div>{jobid}</div>
        <SelectField
            label="Equipement"
            descriptiveText="Select a Equipement?"
            onChange={(e) => setMachineid(e.target.value)}>
            {machine.map((user) => {
                return <option value={user.id}
                    key={user.id}>
                    {user.Name}
                    {user.id}
                </option>
            })}
        </SelectField>
        <div>{machineid}</div>

    </>
}
