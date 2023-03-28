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
            <Link href="/allpeople">All People</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/about">About</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/treino">Treino</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/alljobs">All Jobs</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/allequipements">All Equipements</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/allcalendar">All Calendar</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/newcalendar">New Calendar</Link>
        </MenuItem>

        <MenuItem>
            Exit Menu
        </MenuItem>

    </Menu>



}






