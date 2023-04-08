export default function EquipementCard({ props, children }) {
    return (
        <card>
            <div className="items-center justify-center">
                <h1 className="text-xl text-center justify-center font-bold mb-4">{props.name}</h1>
                <h2 className="text-black  text-center font-semibold text-base mb-2"> Attachments: {props.attachments}</h2>
                {children}
            </div>
        </card>
    );
};