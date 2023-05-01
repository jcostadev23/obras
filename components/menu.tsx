import { Menu, MenuItem } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

export default function SiteMenu() {
    const router = useRouter()

    return <Menu
        menuAlign="center"
    >
        <MenuItem onClick={() => router.push("/calendar")}>Calendar</MenuItem>
        <MenuItem onClick={() => router.push("/people")}>People</MenuItem>
        <MenuItem onClick={() => router.push("/jobs")}>Jobs</MenuItem>
        <MenuItem onClick={() => router.push("/equipements")}>Equipements</MenuItem>


        <MenuItem>
            Exit Menu
        </MenuItem>
    </Menu>
}






