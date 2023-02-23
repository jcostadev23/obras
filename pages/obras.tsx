import SiteMenu from "@/components/menu";
import { Link, SwitchField } from "@aws-amplify/ui-react";

export default function Obras() {
    return <div>
        <SiteMenu />
        obra do costa
        <div>
            <SwitchField
                isDisabled={false}
                label="SwitchField"
                labelPosition="start"
            />
        </div>

    </div>
}
