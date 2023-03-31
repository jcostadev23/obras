import { useRouter } from "next/router"
export default function Id() {
    const router = useRouter()
    const jobid = router.query.id
    return (jobid)
}