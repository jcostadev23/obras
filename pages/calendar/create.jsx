import Layout from "@/components/layout"
import { People, Job, Equipements, Calendar } from "@/src/models";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { SelectField, Button, TextAreaField, StepperField } from "@aws-amplify/ui-react";
import { useEffect, useState, React } from "react";
import { DataStore } from "aws-amplify";
import Breadcrumb from "@/components/breadcrumb"

const breadcrumbItems = [{ label: "Calendar", url: "/calendar" }, { label: "Create" }
];

export default function Mainfunct() {
    const today = new Date();
    const [personid, setPersonid] = useState("")
    const [selected, setSelected] = useState(today);
    const [people, setPeople] = useState([])
    const [jobid, setJobid] = useState("")
    const [job, setJob] = useState([])
    const [equipementid, setEquipementid] = useState("")
    const [equipements, setEquipements] = useState([])
    const [workerhours, setWorkerhours] = useState()
    const [equipementhours, setEquipementhours] = useState()
    const [description, setDescription] = useState("")
    const handleDescriptionChange = (e) => {
        setDescription(e.currentTarget.value);
    };

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
                setJob(serchjob)
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
                setEquipements(serchmachine)
            } catch (error) {
                console.log("Error retrieving Equipements", error);
            }
        }
        CallMachine()
    }, [])
    async function SaveCalender() {
        try {
            const savedate = format(selected, "yyyy-MM-dd")
            const datasafe = await DataStore.save(
                await DataStore.save(
                    new Calendar({
                        "day": savedate,
                        "equipements": { id: equipementid },
                        "job": { id: jobid },
                        "people": { id: personid },
                        "workerTimeMinutes": (workerhours * 60),
                        "equipmentTimeMinutes": (equipementhours * 60),
                        "description": description,
                    })
                ))
        } catch (error) {
        }
    }

    return (
        <Layout>
            <Breadcrumb items={breadcrumbItems} />
            <form onSubmit={SaveCalender}>
                <DayPicker
                    mode="single"
                    required
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer} />

                <SelectField
                    label="People"
                    required
                    descriptiveText="Select a People"
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

                <StepperField
                    label="Worker time in hours"
                    value={workerhours}
                    onStepChange={(Hours) => setWorkerhours(Hours)}
                    defaultValue={0} min={0} max={16} step={0.5} />

                <TextAreaField

                    label="Description"
                    labelHidden={false}
                    rows="3"
                    size="small"
                    wrap="nowrap"
                    value={description}
                    onChange={handleDescriptionChange}
                />

                <SelectField
                    label="Job"
                    required
                    descriptiveText="Select a Job"
                    value={jobid}
                    onChange={(e) => setJobid(e.target.value)}>
                    <option></option>
                    {job.map((user) => {
                        return <option value={user.id}
                            key={user.id}>
                            {user.name}
                        </option>
                    })}
                </SelectField>

                <SelectField
                    label="Equipement"
                    descriptiveText="Select a Equipement"
                    value={equipementid}
                    onChange={(e) => setEquipementid(e.target.value)}>
                    <option></option>
                    {equipements.map((user) => {
                        return <option value={user.id}
                            key={user.id}>
                            {user.name}
                        </option>
                    })}
                </SelectField>
                <StepperField label={"Equipement time in hours"}
                    value={equipementhours}
                    onStepChange={(Hours) => setEquipementhours(Hours)}
                    defaultValue={0} min={0} max={16} step={0.5} />
                <Button type="submit" >Save
                </Button></form>
        </Layout>
    )
}
