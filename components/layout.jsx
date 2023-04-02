import SiteMenu from "@/components/menu";
export default function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <p></p>
            <div> <SiteMenu /></div>
            <p></p>
            <div>{children}</div>
            <p></p>
            <div className="text-center">{new Date().getFullYear()} - MADE BY COSTA</div>
        </div>
    );
}
