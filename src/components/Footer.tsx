export default function Footer() {
    return (
        <footer style={{ padding: "2rem 0", textAlign: "center", borderTop: "1px solid var(--border)", marginTop: "4rem" }}>
            <p>© {new Date().getFullYear()} Portfolio สำหรับคนขี้เกียจทำ. All rights reserved.</p>
        </footer>
    );
}
