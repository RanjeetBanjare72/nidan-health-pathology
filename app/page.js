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
