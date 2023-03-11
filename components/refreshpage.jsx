import { useRouter } from "next/router";

export default function Refresh() {
    const router = useRouter();
    return router.reload();
}