import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", padding: "50px 20px" }}>
            <h2 style={{ fontSize: "2em", color: "#f39c12", marginBottom: "10px" }}>
                404
            </h2>
            <h1 style={{ fontSize: "1.5em", marginBottom: "20px" }}>
                ไม่พบหน้าที่คุณค้นหา (Page Not Found)
            </h1>
            <p style={{ marginBottom: "30px", color: "#6b6b6b" }}>
                ขออภัย หน้าที่คุณต้องการเข้าถึงไม่มีอยู่จริงหรือถูกย้ายไปแล้ว
            </p>
            <Link
                href="/"
                style={{
                    textDecoration: "none",
                    color: "white",
                    background: "#007BFF",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                }}
            >
                กลับสู่หน้าหลัก
            </Link>
        </div>
    );
}
