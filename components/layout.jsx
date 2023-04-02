import SiteMenu from "@/components/menu";
export default function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <div> <SiteMenu /></div>
            <br></br>
            <div>{children}</div>
            <div className="text-center">{new Date().getFullYear()} - MADE BY COSTA</div>
        </div>
    );
}
