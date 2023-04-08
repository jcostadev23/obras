
export default function PersonCard({ props, children }) {
    return (
        <card>
            <div className="items-center justify-center">
                <h1 className="text-xl text-center justify-center font-bold mb-4">{props.name}</h1>
                <h2 className="text-black  text-center font-semibold text-base mb-2"> Phone Number: {props.phonenumber}</h2>
                <h3 className="text-black text-center font-semibold text-base mb-6"> Role: {props.role}</h3>
                {children}
            </div>
        </card>
    );
};