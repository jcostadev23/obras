
export default function CustomButton({ text, link, color }) {
    return (
        <button className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}
            level={4} style={{
                textAlign: "center",
                color: "black",
                backgroundColor: color,
                border: "4px ",
                padding: "10px",
            }}
            onClick={() => window.location.href = link}>
            {text}
        </button>
    );
}