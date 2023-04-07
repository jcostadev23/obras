import { useRouter } from "next/router"
const breadcrumbItems = [{ label: "People", url: "/people" }, { label: "Person" }
];

export default function Id() {
    const router = useRouter()
    const personid = router.query.id
    return (personid)
}
