import SiteMenu from "@/components/menu";
import Image from "next/image";
import logo from "../src/live-watch/public/logo.png"
export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex justify-between items-center p-4 border-b-2">
                <div className="flex-shrink-0">
                    <Image
                        onClick={() => (window.location.href = "/")}
                        src={logo}
                        height="auto"
                        width="auto"
                        placeholder="blur"
                        alt="/"
                    />
                </div>
                <div className="flex-shrink-0">
                    <div className="flex items-center">
                        <div className="ml-auto">
                            <SiteMenu />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow">{children}</div>
            <div className="flex-grow flex items-center justify-center border-t-2 p-4">
                <div className="text-center">
                    {new Date().getFullYear()} - MADE BY COSTA
                </div>
            </div>
        </div>
    );
}
