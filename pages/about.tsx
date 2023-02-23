import SiteMenu from "@/components/menu";
import { Link, SwitchField } from "@aws-amplify/ui-react";

export default function About() {
    return <div>
        <SiteMenu />
        <div>
            <SwitchField
                isDisabled={false}
                label="SwitchField"
                labelPosition="start"
            />
        </div>

    </div>
}