import { Link } from "@aws-amplify/ui-react";

export default function Breadcrumb({ items }) {

    return (<div>
        <Link href="/">Home</Link>
        {items.map((item) => {
            return (
                <div key={item}>
                    <Link href={item.url}> {item.label}</Link>
                </div>
            )
        }
        )}
    </div>)
}