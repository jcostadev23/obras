import SiteMenu from "@/components/menu"
import { Button, Menu, MenuItem } from "@aws-amplify/ui-react"
import { useState } from "react"

export default function Treino() {
    const nome = "jose costa"
    const [city, mudarOvalorDaVariavelCity] = useState("ponta do sol")
    const [mostrar, setMostrar] = useState(false)
    return <div>
        <SiteMenu />
        <Menu
            menuAlign="start">
            <MenuItem onClick={() => setMostrar(true)}>
                fala aki
            </MenuItem>
            <MenuItem onClick={() => setMostrar(false)}>
                Exit Menu
            </MenuItem>
        </Menu>
        <div>
            ola
        </div>
        <div>
            Aurelio
        </div>
        <div>
            {nome}
        </div>
        {city}
        <Button onClick={() => {
            mudarOvalorDaVariavelCity("funchal")
        }}> mudar a city
        </Button>

    </div>
}