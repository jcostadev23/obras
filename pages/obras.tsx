import SiteMenu from "@/components/menu";
import PeopleCreateForm from "@/src/ui-components/PeopleCreateForm";
import { Link, SwitchField } from "@aws-amplify/ui-react";

export default function Obras() {
    return <div>
        <SiteMenu />
        obra do costa ola
        <div>
            <SwitchField
                isDisabled={false}
                label="SwitchField"
                labelPosition="start"
            />
        </div>
        <PeopleCreateForm
            onSubmit={(fields) => {
                // Example function to trim all string inputs
                console.log(fields)
                return fields
            }}
        />
    </div>
}
