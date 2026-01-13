import Image from "next/image";

const portfolios = [
    { img: "/images/มทส.webp", title: "SUT มทส Portfolio", dept: "วิศวกรรมอุตสาหการและการจัดการข้อมูล", link: "/pdfs/มทส.pdf" },
    { img: "/images/comsci.webp", title: "KMITL สจล. Portfolio", dept: "Computer Science", link: "/pdfs/comsci kmitl.pdf" },
    { img: "/images/KKU.webp", title: "KKU มข. Portfolio", dept: "Artificial Intelligence", link: "/pdfs/KKU.pdf" },
    { img: "/images/KU2.webp", title: "KU มก. Portfolio", dept: "Computer Engineering", link: "/pdfs/KU2.pdf", highlight: true },
    { img: "/images/CMU.webp", title: "CMU มช. Portfolio", dept: "Data Science", link: "/pdfs/CMU.pdf" },
    { img: "/images/CU.webp", title: "CU จุฬา Portfolio", dept: "Computer Science", link: "/pdfs/CU.pdf" },
    { img: "/images/TU.webp", title: "TU มธ Portfolio", dept: "Software Engineering", link: "/pdfs/TU.pdf" },
];

export default function PortfolioSection() {
    return (
        <section id="portfolio-section" className="section container">
            <h2 style={{ textAlign: "center" }}>Portfolio</h2>
            <div className="portfolio-grid">
                {portfolios.map((item, index) => (
                    <div key={index} className={`card ${item.highlight ? "highlight-card" : ""}`}>
                        <div className="image-wrapper">
                            {/* Using standard img for simplicity with local files if Next Image tricky without size, but lets try next/image with unoptimized or responsive */}
                            <img src={item.img} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.dept}</p>
                        <a href={item.link} target="_blank" className="btn btn-primary">
                            ดูรายละเอียด
                        </a>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }
        .image-wrapper {
            width: 100%;
            border-radius: var(--radius-md);
            overflow: hidden;
            margin-bottom: var(--spacing-md);
        }
        .image-wrapper img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.3s;
        }
        .card:hover .image-wrapper img {
            transform: scale(1.05);
        }
        .card {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        } 
        .highlight-card {
            border: 2px solid var(--error);
        }
        .highlight-card h3, .highlight-card p {
            color: var(--error);
        }
      `}</style>
        </section>
    );
}
