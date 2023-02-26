import SiteMenu from "@/components/menu";
import { Link, Menu, MenuItem, SwitchField } from "@aws-amplify/ui-react";

export default function About() {
    function setMostrar(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }
    return <div>
        <SiteMenu />
        <SwitchField
            isDisabled={false}
            label="SwitchField"
            labelPosition="start" />
    </div>


}