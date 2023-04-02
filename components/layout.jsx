import SiteMenu from "@/components/menu";
export default function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <div></div>
            <div><SiteMenu /></div>
            <div></div>
            <div>{children}</div>
            <div></div>
            <div className="text-center">{new Date().getFullYear()} - MADE BY COSTA</div>
        </div>
    );
}
