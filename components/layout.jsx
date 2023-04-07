import SiteMenu from "@/components/menu";
export default function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <div className="my-5 rounded p-4 flex justify-end"><SiteMenu /></div>
            <div className="my-5 rounded p-4">{children}</div>
            <div className="text-center , my-5">{new Date().getFullYear()} - MADE BY COSTA</div>
        </div>
    );
}
