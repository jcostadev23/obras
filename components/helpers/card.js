export default function Card({ title, subtitle, children }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{subtitle}</p>
            </div>
            <div className="px-6 py-4">{children}</div>
        </div>
    );
}