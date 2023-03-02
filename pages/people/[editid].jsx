import { useRouter } from "next/router"
function peopleid() {
    const router = useRouter()
    const peopleid = router.query.editid
    return <div>details id {peopleid}</div>
}

export default peopleid
