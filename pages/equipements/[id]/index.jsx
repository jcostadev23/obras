import { useRouter } from "next/router"
export default function Id() {
    const router = useRouter()
    const equipid = router.query.id
    return (equipid)
}
