import SiteMenu from "@/components/menu";
import logo from "../public/logo.png";
import Image from "next/image";
export default function Layout({ children }) {
    return (
        <div className="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg 
         bg-gradient-to-tl from-gray-300 to-gray-400 ">
            <Image onClick={() => window.location.href = "/"} src={logo} heigth="200" width="200" placeholder="blur" alt='/' />
            <div className="my-5 rounded p-4 flex justify-end"><SiteMenu /></div>
            <div className="my-5 rounded p-4">{children}</div>
            <div className="text-center , my-5">{new Date().getFullYear()} - MADE BY COSTA</div>
        </div>
    );
}
