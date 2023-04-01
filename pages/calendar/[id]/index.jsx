import { useRouter } from "next/router"
export default function Id() {
    const router = useRouter()
    const calendarid = router.query.id
    return (calendarid)
}