import { Menu, MenuItem } from "@aws-amplify/ui-react";
import Link from "next/link";
import { useState } from "react";

export default function SiteMenu() {

    return <Menu
        menuAlign="start"
    >
        <MenuItem onClick={() => (true)}>
            <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={() => (true)}>
            <Link href="/obras">Obras</Link>
        </MenuItem>
        <MenuItem onClick={() => (true)}>
            <Link href="/about">About</Link>
        </MenuItem>
        <MenuItem onClick={() => (true)}>
            <Link href="/treino">Treino</Link>
        </MenuItem>
        <MenuItem onClick={() => (false)}>
            Exit Menu
        </MenuItem>

    </Menu>



}






