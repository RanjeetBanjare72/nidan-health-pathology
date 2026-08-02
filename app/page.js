const tests = [
  ["🩸", "CBC Test", "Complete Blood Count ki basic jankari"],
  ["🔴", "Hemoglobin", "Hb level aur general reference information"],
  ["🧪", "ESR Test", "ESR test aur result ko samjhein"],
  ["🍬", "Blood Sugar", "Fasting, PP aur random glucose"],
  ["📊", "HbA1c", "Pichhle 2–3 mahine ki average glucose information"],
  ["🫀", "Lipid Profile", "Cholesterol aur triglycerides"],
  ["🧬", "LFT", "Liver Function Test guide"],
  ["💧", "KFT", "Kidney Function Test guide"],
  ["🦋", "Thyroid Profile", "TSH, T3 aur T4 information"],
  ["🧫", "CRP", "C-Reactive Protein test information"],
  ["⚗️", "Uric Acid", "Uric acid test guide"],
  ["🩹", "PT / INR", "Blood clotting test information"],
];

const calculators = [
  ["⚖️", "BMI Calculator", "Height aur weight se BMI calculate karein"],
  ["🫘", "eGFR Calculator", "Kidney filtration estimate"],
  ["❤️", "LDL Calculator", "Calculated LDL cholesterol"],
  ["🧪", "Corrected Calcium", "Albumin ke according corrected calcium"],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="nav">
          <div className="brand">
            <div className="logo">N+</div>
            <div>
              <strong>NIDAN</strong>
              <span>Health & Pathology Guide</span>
            </div>
          </div>

          <nav>
            <a href="#tests">Blood Tests</a>
            <a href="#values">Normal Values</a>
            <a href="#calculators">Calculators</a>
            <a href="#articles">Articles</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="badge">🩺 Health & Pathology Education</div>

        <h1>
          Blood Tests ko samjhein
          <span> Simple Hindi mein</span>
        </h1>

        <p>
          Blood tests, pathology reports, reference values aur health
          information ko aasaan Hindi/Hinglish mein samjhein.
        </p>

        <div className="search">
          🔍
          <input
            type="search"
            placeholder="Search CBC, ESR, LFT, KFT, Thyroid..."
          />
          <button>Search</button>
        </div>

        <div className="quick">
          Popular: CBC &nbsp; • &nbsp; ESR &nbsp; • &nbsp; HbA1c &nbsp; •
          &nbsp; Thyroid &nbsp; • &nbsp; LFT
        </div>
      </section>

      <section className="section" id="tests">
        <div className="sectionTitle">
          <div>
            <span className="eyebrow">PATHOLOGY GUIDE</span>
            <h2>Popular Blood Tests</h2>
          </div>
          <p>Common laboratory tests ki educational information.</p>
        </div>

        <div className="grid">
          {tests.map(([icon, title, text]) => (
            <article className="card" key={title}>
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
                <span className="learn">Jankari dekhein →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="values" id="values">
        <div className="valuesInner">
          <div>
            <span className="eyebrow light">LAB REFERENCE GUIDE</span>
            <h2>Normal / Reference Values</h2>
            <p>
              CBC, LFT, KFT, Lipid Profile, Thyroid, Glucose, Electrolytes
              aur coagulation tests ke reference intervals ko samjhein.
            </p>
            <button className="whiteButton">
              Reference Values dekhein
            </button>
          </div>

          <div className="report">
            <div className="reportHead">
              <strong>Sample Reference</strong>
              <span>Educational</span>
            </div>

            <div className="row">
              <span>Hemoglobin</span>
              <strong>Lab specific</strong>
            </div>

            <div className="row">
              <span>WBC</span>
              <strong>Lab specific</strong>
            </div>

            <div className="row">
              <span>Platelets</span>
              <strong>Lab specific</strong>
            </div>

            <div className="note">
              Reference intervals laboratory, method, age, sex aur clinical
              situation ke according vary kar sakte hain.
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="calculators">
        <div className="sectionTitle">
          <div>
            <span className="eyebrow">USEFUL TOOLS</span>
            <h2>Health & Lab Calculators</h2>
          </div>
          <p>Educational calculation tools.</p>
        </div>

        <div className="calcGrid">
          {calculators.map(([icon, title, text]) => (
            <article className="calc" key={title}>
              <div className="calcIcon">{icon}</div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="articles" id="articles">
        <span className="eyebrow">HEALTH EDUCATION</span>
        <h2>Report samajhne ke liye useful health information</h2>

        <p>
          Diabetes, thyroid, kidney health, liver health, anemia aur
          laboratory testing par simple educational articles.
        </p>

        <div className="articleTags">
          <span>Blood Tests</span>
          <span>Diabetes</span>
          <span>Thyroid</span>
          <span>Kidney Health</span>
          <span>Liver Health</span>
          <span>Anemia</span>
        </div>
      </section>

      <section className="disclaimer">
        <strong>⚕️ Medical Disclaimer</strong>

        <p>
          NIDAN HEALTH & PATHOLOGY GUIDE par di gayi information sirf
          educational purpose ke liye hai. Yeh medical diagnosis,
          prescription ya emergency medical care ka substitute nahi hai.
          Laboratory report ki interpretation aur treatment ke liye
          qualified healthcare professional se salah lein.
        </p>
      </section>

      <footer>
        <div className="footerGrid">
          <div>
            <h3>NIDAN HEALTH & PATHOLOGY GUIDE</h3>
            <p>Health & Pathology Education in Simple Hindi</p>
          </div>

          <div className="footerLinks">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Medical Disclaimer</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 NIDAN HEALTH & PATHOLOGY GUIDE. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
