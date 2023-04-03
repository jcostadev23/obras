import { useRouter } from "next/router"
import Breadcrumb from "@/components/breadcrumb"
const breadcrumbItems = [{ label: "Jobs", url: "/jobs" }, { label: "Jobsid" }
];
export default function Id() {
    const router = useRouter()
    const jobid = router.query.id
    return (jobid)
}