import { Link } from "@aws-amplify/ui-react";
export default function Breadcrumb({ path }) {

    return (<div>
        {path.map((item) => {
            return (
                <div key={item}>
                    <Link href={item.url}> {item.label}</Link>

                </div>
            )
        }
        )}
    </div>)
}