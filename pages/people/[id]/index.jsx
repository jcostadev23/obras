import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Person" }
];

export default function Id() {
    const router = useRouter()
    const personid = router.query.id
    return (personid)
}