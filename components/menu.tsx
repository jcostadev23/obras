import { Menu, MenuItem } from "@aws-amplify/ui-react";
import Link from "next/link";
import { useState } from "react";

export default function SiteMenu() {

    return <Menu
        menuAlign="start"
    >
        <MenuItem>
            <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/people">People</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/about">About</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/treino">Treino</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/jobs">Jobs</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/equipements">Equipements</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/calendar">Calendar</Link>
        </MenuItem>
        <MenuItem>
            Exit Menu
        </MenuItem>

    </Menu>



}






