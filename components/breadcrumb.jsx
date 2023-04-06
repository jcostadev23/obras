import { Link } from "@aws-amplify/ui-react"

export default function Breadcrumb({ items }) {
    if (!items) {
        return "Home"
    }
    return (<div className="breadcrumb">
        <Link href={"/"}>Home</Link> {" / "}
        {items.map((item, index) => {
            if (!item.url) {
                return item.label
            }
            return (
                <span key={index}>
                    <Link className="my- bg-red-600" href={item.url}>
                        {item.label}
                    </Link>
                    {index !== items.length - 1 && ' / '}
                </span>
            )
        }
        )}
    </div>)
}


