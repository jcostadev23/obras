import { useRouter } from "next/router"
export default function Id() {
    const router = useRouter()
    const personid = router.query.id
    return (personid)
}