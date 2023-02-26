import SiteMenu from "@/components/menu";
import { Link, Menu, MenuItem, SwitchField } from "@aws-amplify/ui-react";

export default function About() {
    function setMostrar(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

    return <><Menu
        menuAlign="start"
    >
        <MenuItem onClick={() => setMostrar(true)}>
            <SiteMenu />
        </MenuItem>

        <MenuItem onClick={() => setMostrar(false)}>
            Exit Menu
        </MenuItem>

    </Menu>
        <div>

            <div>
                <SwitchField
                    isDisabled={false}
                    label="SwitchField"
                    labelPosition="start" />
            </div>

        </div></>
}