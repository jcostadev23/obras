import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Equipements", url: "/equipements" }, { label: "Equipementsid" }
];
export default function Id() {
    const router = useRouter()
    const equipid = router.query.id
    return (equipid)
}
