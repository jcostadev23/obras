
export default function Button({ text, link }) {
    return (
        <button level={4} style={{
            textAlign: "center",
            color: "black",
            backgroundColor: "lightgreen",
            border: "2px solid green",
            padding: "10px",
        }}
            onClick={() => window.location.href = link}>
            {text}
        </button>
    );
}