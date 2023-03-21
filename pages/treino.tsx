import SiteMenu from "@/components/menu"
import { SwitchField } from "@aws-amplify/ui-react"
import { useState } from "react"

export default function VamosTestar() {
    return (
        <><SiteMenu />
            <h1 className="text-3xl font-bold underline bg-slate-500 text-red-200">
                Hello world!
            </h1>
            <div>{"its still not build yet sorry"}</div></>

    )
}

