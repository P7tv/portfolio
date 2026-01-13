export default function StatsSection() {
    return (
        <section className="section container">
            <h3>คะแนนสอบ</h3>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>รายวิชา</th>
                            <th>คะแนนสอบ</th>
                            <th>Percentile</th>
                            <th>ค่า Mean (ค่าเฉลี่ย)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TGAT</td>
                            <td>67.500</td>
                            <td>90.329</td>
                            <td>49.675</td>
                        </tr>
                        <tr className="sub-row">
                            <td>&nbsp;&nbsp;&nbsp;TGAT1</td>
                            <td>58.333</td>
                            <td>79.231</td>
                            <td>40.417</td>
                        </tr>
                        <tr className="sub-row">
                            <td>&nbsp;&nbsp;&nbsp;TGAT2</td>
                            <td>76.250</td>
                            <td>95.640</td>
                            <td>46.473</td>
                        </tr>
                        <tr className="sub-row">
                            <td>&nbsp;&nbsp;&nbsp;TGAT3</td>
                            <td>67.916</td>
                            <td>62.882</td>
                            <td>62.134</td>
                        </tr>
                        <tr>
                            <td>TPAT3</td>
                            <td>66.000</td>
                            <td>97.856</td>
                            <td>44.055</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 style={{ marginTop: "var(--spacing-xl)" }}>คณะ/สาขาที่ยื่นไป</h3>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>มหาลัยที่ยื่น</th>
                            <th>สาขา/คณะที่ยื่นไป</th>
                            <th>ผลลัพธ์</th>
                            <th>หมายเหตุ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SUT มทส</td>
                            <td>วิศวกรรมอุตสาหการและการจัดการข้อมูล (ภาคพิเศษ) คณะวิศวะ</td>
                            <td><span className="status-success">ติดตัวจริง</span></td>
                            <td>ค่าเทอมกับค่าธรรมเนียมสูงมากเลยเป็นตัวเลือกสุดท้าย</td>
                        </tr>
                        <tr>
                            <td>KMITL สจล</td>
                            <td>วิทยาการคอมพิวเตอร์ CS คณะวิทย์</td>
                            <td><span className="status-error">ไม่ติด</span></td>
                            <td>แต่ได้สาขารองลงมา</td>
                        </tr>
                        <tr className="sub-row">
                            <td>KMITL สจล</td>
                            <td>คณิตศาสตร์ สถิติประยุกต์ คณะวิทย์</td>
                            <td><span className="status-success">ติดตัวจริง</span></td>
                            <td>ติดตัวจริงสาขาอันดับที่ 2</td>
                        </tr>
                        <tr>
                            <td>KKU มข</td>
                            <td>AI ปัญญาประดิษฐิ์ คณะวิทยาลัยคอมพิวเตอร์</td>
                            <td><span className="status-success">ติดตัวจริง</span></td>
                            <td>อันนี้เป็นตัวเลือกสำรอง คืออยากเรียนในกรุงเทพ</td>
                        </tr>
                        <tr>
                            <td>KU มก</td>
                            <td>วิศวะคอม CE คณะวิศวะ</td>
                            <td><span className="status-error">ไม่ติดสัมภาษณ์</span></td>
                            <td>เห็นว่าลงได้เลยลงเล่นๆ ปรากฎว่าไม่ติดรู้สึกเสียดายนิดหน่อยรู้งี้ลง ComSci ดีกว่า</td>
                        </tr>
                        <tr>
                            <td>CMU มช</td>
                            <td>Data Science วิทยาการข้อมูล คณะวิทย์</td>
                            <td><span className="status-success">ติดตัวจริง</span></td>
                            <td>รับน้องขึ้นดอยก็น่าสนใจนะ</td>
                        </tr>
                        <tr>
                            <td>CU จุฬา</td>
                            <td>วิทยาการคอมพิวเตอร์ CS คณะวิทย์</td>
                            <td><span className="status-success">ติดตัวจริง</span></td>
                            <td>น้ำใจน้องพี่สีชมพูววววว</td>
                        </tr>
                        <tr>
                            <td>KMITL สจล</td>
                            <td>AIT IT คณะเทคโนโลยีสารสนเทศ</td>
                            <td><span className="status-info">รอประกาศผล</span></td>
                            <td>สาธุ99</td>
                        </tr>
                        <tr>
                            <td>TU มธ</td>
                            <td>วิศวกรรมซอฟต์แวร์ (โครงการพิเศษ) Portfolio + TPAT3 คณะวิศวกรรมศาสตร์</td>
                            <td><span className="status-warning">ติดสัมภาษณ์</span></td>
                            <td>สละสิทธิ์เพราะชนกับค่าย CAI ก็อยากไปสัมภาษณ์ TU อยู่</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
          background: var(--bg-surface);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        th, td {
          padding: var(--spacing-md);
          text-align: left;
          border-bottom: 1px solid var(--border);
        }
        th {
          background: var(--primary);
          color: white;
          font-weight: 500;
        }
        tr:last-child td {
          border-bottom: none;
        }
        .sub-row td {
            padding-left: 2rem;
            color: var(--text-muted);
            font-size: 0.9em;
        }
        .status-success { color: var(--success); font-weight: bold; }
        .status-error { color: var(--error); font-weight: bold; }
        .status-info { color: var(--info); font-weight: bold; }
        .status-warning { color: #eab308; font-weight: bold; }
        
        .table-wrapper {
            overflow-x: auto;
        }
      `}</style>
        </section>
    );
}
