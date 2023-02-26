import { Menu, MenuItem } from "@aws-amplify/ui-react";
import Link from "next/link";
import { useState } from "react";

export default function SiteMenu() {
    const [mostrar, setMostrar] = useState(false)
    return <div>
        <Menu
            menuAlign="start"
        >
            <MenuItem onClick={() => setMostrar(true)}>
                <div> <Link href="/">Home</Link></div>
            </MenuItem>
            <MenuItem onClick={() => setMostrar(true)}>
                <div> <Link href="/obras">Obras</Link></div>
            </MenuItem>
            <MenuItem onClick={() => setMostrar(true)}>
                <div> <Link href="/about">About</Link></div>
            </MenuItem>
            <MenuItem onClick={() => setMostrar(true)}>
                <div> <Link href="/treino">Treino</Link></div>
            </MenuItem>
            <MenuItem onClick={() => setMostrar(false)}>
                Exit Menu
            </MenuItem>

        </Menu>

    </div>

}






