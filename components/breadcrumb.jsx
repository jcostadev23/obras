import { Link } from "@aws-amplify/ui-react"

export default function Breadcrumb({ items }) {

    return (<div className="breadcrumb">
        <Link href={"/"}>Home</Link> /
        {items.map((item, index) => {
            return (
                <span key={index}>
                    <Link href={item.url}>
                        <a>{item.label}</a>
                    </Link>
                    {index !== items.length - 1 && ' / '}
                </span>
            )
        }
        )}
    </div>)
}
