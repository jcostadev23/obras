import SiteMenu from "@/components/menu";
export default function Layout({ children }) {
    return (
        <div class="middle-block px-6 py-6 mt-5 align-middle transition-all border-2 rounded-lg 
         bg-gradient-to-tl from-gray-300 to-gray-400 ">
            <div className="my-5 rounded p-4 flex justify-end"><SiteMenu /></div>
            <div className="my-5 rounded p-4">{children}</div>
            <div className="text-center , my-5">{new Date().getFullYear()} - MADE BY COSTA</div>
        </div>
    );
}
