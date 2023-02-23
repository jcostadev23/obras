import Link from "next/link";

export default function SiteMenu() {
    return <div>

        <Link href="/">Home</Link>
        <div> <Link href="/obras">Obras</Link></div>
        <div> <Link href="/about">About</Link></div>
    </div>
}