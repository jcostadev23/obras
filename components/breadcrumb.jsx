import { Link } from "@aws-amplify/ui-react"

export default function Breadcrumb({ items }) {
    if (!items) { return "Home" }
    return (<div className="my-5 rounded p-2 breadcrumb">
        <Link href={"/"}>Home</Link> {" / "}
        {items.map((item, index) => {
            if (!item.url) { return item.label }
            return (
                <span key={index}>
                    <Link href={item.url}>
                        {item.label}
                    </Link>
                    {index !== items.length - 1 && ' / '}
                </span>)
        }
        )}
    </div>)
}


