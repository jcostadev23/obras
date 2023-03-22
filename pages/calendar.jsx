import SiteMenu from "@/components/menu";
import React from 'react';
import { People, Job, Equipements, Calendar } from "@/src/models";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { SelectField, Button, } from "@aws-amplify/ui-react";
import { useEffect, useState, } from "react";
import { DataStore } from "aws-amplify";
import { useRouter } from "next/router";

export default function Mainfunct() {
    const router = useRouter()
    const [personid, setPersonid] = useState("")
    const [selected, setSelected] = useState();
    const [people, setPeople] = useState([])
    const [jobid, setJobid] = useState("")
    const [jobname, setJobname] = useState([])
    const [machineid, setMachineid] = useState("")
    const [machine, setMachine] = useState([])

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PPPP')}.</p>;
    }

    useEffect(() => {
        async function GetPerson() {
            try {
                const peopledainternet = await DataStore.query(People);
                setPeople(peopledainternet)
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
            } catch (error) {
                console.log("Error retrieving Equipements", error);
            }
        }
        CallMachine()
    }, [])

    async function SaveCalender() {
        try {
            const savedate = format(selected, "yyyy-MM-dd")
            console.log("checking the date", savedate)
            const saveResponse = await DataStore.save(
                new Calendar({
                    day: savedate,
                    people: { id: personid },
                    job: { id: jobid },
                    equipement: { id: machineid },
                })
            );
        } catch (error) {
        }
        router.reload()
    }
    return <> <SiteMenu
    />
        <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer} />

        <SelectField
            label="People"
            descriptiveText="Select a People?"
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

        <SelectField
            label="Equipement"
            descriptiveText="Select a Equipement?"
            value={machineid}
            onChange={(e) => setMachineid(e.target.value)}>
            <option></option>
            {machine.map((user) => {
                console.log("test 2 ")
                return <option value={user.id}
                    key={user.id}>
                    {user.name}
                </option>
            })}


        </SelectField>
        <Button onClick={SaveCalender}>Save
        </Button>
    </>
}
