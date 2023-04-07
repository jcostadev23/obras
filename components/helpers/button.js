
export default function CustomButton({ text, link, color }) {
    return (
        <button level={4} style={{
            textAlign: "center",
            color: "black",
            backgroundColor: color,
            border: "2px ",
            padding: "10px",
        }}
            onClick={() => window.location.href = link}>
            {text}
        </button>
    );
}