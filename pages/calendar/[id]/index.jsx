import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Calendar", url: "/calendar" }, { label: "Calendarid" }
];
export default function Id() {
    const router = useRouter()
    const calendarid = router.query.id
    return (calendarid)
}
