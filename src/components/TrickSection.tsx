export default function TrickSection() {
    return (
        <section id="trick-section" className="section container">
            <h2>ทริคเอาตัวรอด</h2>
            <div className="trick-content card" style={{ textAlign: "left" }}>
                <h3>สิ่งที่ควรทำ/สิ่งที่แนะนำ</h3>
                <ul>
                    <li>ทุกการสัมภาษณ์ควรที่จะดูว่าสาขาและหลักสูตรที่เราลงนั้นเขาสอนอะไรบ้าง หาดูตามพวกcourse cerberus</li>
                    <li>ควรเตรียมตัวก่อนไปสัมภาษณ์ ไม่ว่าจะเป็นการเตรียมคำตอบ หรือ การเตรียมเอกสารต่างๆ</li>
                    <li>ทุกครั้งที่สัมภาษณ์เวลาพูดควรส่งสายตา Eye contract ให้กับผู้ฟังที่เรากำลังสื่อสารอยู่ด้วย</li>
                    <li>หากตอนสัมภาษณ์มีอาจารณ์ที่สัมภาษย์ตั้งแต่ 2 คนขึ้นไปเวลากำลังพูดควรพยายามหันหน้าไปสื่อสารกับอาจารย์ท่านอื่นด้วย</li>
                    <li>ถ้าอาจารย์ถามคำถามเจาะลึกโครงงาน กิจกรรม หรือ วิชาการ เราควรตอบในสิ่งที่เรารู้และมั่นใจว่าถูกต้อง หากสิ่งไหนเราไม่ได้มั่นใจมากนักไม่จำเป็นที่จะต้องพูดเนื่องจากหากผิดขึ้นมาอาจารย์อาจจะสงสัยในตัวเราได้</li>
                    <li>หากเราตอบคำถามไม่ถูกต้อง หรือ ไม่รู้จริงๆ ควรบอกอาจารย์ว่าไม่ทราบ หรือ ไม่รู้ และไม่ควรเดาคำตอบ</li>
                    <li>หากอาจารย์ยังไม่ได้เริ่มถามอะไรอย่าพึ่งรู้สึกกังวลแล้วเป็นคนเปิดบทสนทนาชวนคุยหรือถามอะไร เพราะอาจจะทำให้อาจารย์หาจุดที่สามารถจี้เราได้</li>
                </ul>

                <h3 style={{ marginTop: "var(--spacing-xl)" }}>คำตอบเอาตัวรอด</h3>
                <div className="qa-item">
                    <p className="question">Q: ไหนลองแนะนำตัวหน่อย</p>
                    <p className="answer">A: ไม่ควรแนะนำตัวที่ยาวมากเกินไป ควรแนะนำตัวประมาณนี้ <span className="highlight">"สวัสดีครับ (นาย/นางสาว) (ชื่อ-นามสกุล) หรืออาจารย์จะเรียกผมว่า (ชื่อเล่น) ผมมาจาก (ชื่อรร.) ครับ"</span></p>
                </div>
                <div className="qa-item">
                    <p className="question">Q: คุณได้ยื่นที่อื่นไว้มั้ย</p>
                    <p className="answer">A: ควรตอบตามความจริงไป แต่ว่าเราก็ต้องพูดประมาณว่าไม่ได้เล็งที่ไหนไว้เป็นหลักขึ้นอยู่กับว่าที่ไหนให้ข้อเสนอ หรือ โอกาสที่ดีกว่า แต่ก็เล็งที่จะเข้ามหาลัยนี้อยู่เหมือนกัน</p>
                </div>
                <div className="qa-item">
                    <p className="question">Q: ถ้าคุณเข้ามาเรียนแล้วเกรดเทอมแรกคุณได้ D+ คุณจะทำยังไงต่อ</p>
                    <p className="answer">A: พยายามตอบว่าตอบไปในแนวว่าจะปรับปรุงตัวแล้ว เล่าทีละขั้นตอนว่าจะทำยังไงเพื่อที่แสดงออกถึงว่าเราจะมีการพัฒนาตัวเองให้ดีขึ้น</p>
                </div>
                <div className="qa-item">
                    <p className="question">Q: ทำไมคุณอยากมาเรียนที่นี่ คณะนี้ สาขานี้</p>
                    <p className="answer">A: ???????? </p>
                </div>
                <div className="qa-item">
                    <p className="question">Q: ถ้าไม่ได้ที่นี้จะทำยังไง</p>
                    <p className="answer">A: ???????? </p>
                </div>
            </div>

            <style jsx>{`
        ul {
            padding-left: 20px;
            color: var(--text-muted);
        }
        li {
            margin-bottom: 0.5rem;
        }
        .qa-item {
            margin-bottom: 1rem;
            padding: 1rem;
            background: var(--bg-body);
            border-radius: var(--radius-md);
        }
        .question {
            font-weight: bold;
            color: var(--primary);
            margin-bottom: 0.25rem;
        }
        .answer {
            color: var(--text-main);
        }
      `}</style>
        </section>
    );
}
