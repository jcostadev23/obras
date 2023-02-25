import { Button } from "@aws-amplify/ui-react"
import { useState } from "react"

export default function Treino() {
    const nome = "jose costa"
    const [city, mudarOvalorDaVariavelCity] = useState("ponta do sol")
    return <div>
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
