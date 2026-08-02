const tests = [
  {
    icon: "🩸",
    name: "CBC Test",
    full: "Complete Blood Count",
    description:
      "Hemoglobin, WBC, Platelets, RBC aur blood cells ki basic jaanch.",
    range: "Hb: Male 13–17 g/dL | Female 12–15 g/dL",
  },
  {
    icon: "🔬",
    name: "ESR",
    full: "Erythrocyte Sedimentation Rate",
    description:
      "Body mein inflammation ka assessment karne mein madad karne wala test.",
    range: "Reference range age, sex aur laboratory ke hisab se vary karti hai.",
  },
  {
    icon: "🧪",
    name: "LFT",
    full: "Liver Function Test",
    description:
      "Bilirubin, AST, ALT, ALP aur proteins ke through liver ko assess kiya jata hai.",
    range: "Reference ranges laboratory ke according vary karti hain.",
  },
  {
    icon: "💧",
    name: "KFT",
    full: "Kidney Function Test",
    description:
      "Creatinine, urea aur related parameters kidney function assess karne mein help karte hain.",
    range: "Creatinine reference range lab, age aur sex ke hisab se vary karti hai.",
  },
  {
    icon: "🍬",
    name: "Blood Sugar",
    full: "Glucose Test",
    description:
      "Blood glucose measurement diabetes screening aur monitoring mein use hota hai.",
    range: "Interpretation fasting/random status aur clinical context par depend karti hai.",
  },
  {
    icon: "📊",
    name: "HbA1c",
    full: "Glycated Hemoglobin",
    description:
      "Pichhle lagbhag 2–3 mahine ke average blood glucose ka indicator.",
    range: "Result ko diabetes guidelines aur clinical context ke saath interpret kiya jata hai.",
  },
  {
    icon: "🦋",
    name: "Thyroid Profile",
    full: "TSH, T3 & T4",
    description:
      "Thyroid gland ki functioning assess karne ke liye commonly kiye jane wale tests.",
    range: "TSH/T3/T4 reference intervals laboratory aur method ke hisab se vary karte hain.",
  },
  {
    icon: "❤️",
    name: "Lipid Profile",
    full: "Cholesterol Test",
    description:
      "Total cholesterol, LDL, HDL aur triglycerides cardiovascular risk assessment mein help karte hain.",
    range: "Targets patient ke overall cardiovascular risk par depend kar sakte hain.",
  },
  {
    icon: "🧫",
    name: "Urine R/M",
    full: "Urine Routine & Microscopy",
    description:
      "Urine ke physical, chemical aur microscopic parameters ki jaanch.",
    range: "Interpretation measured parameter aur laboratory method par depend karti hai.",
  },
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
          Blood tests, pathology reports aur health information ko
          simple Hindi/Hinglish mein samjhein.
        </p>

        <div className="search">
          <input
            type="search"
            placeholder="Search CBC, ESR, LFT, KFT, Thyroid..."
          />
          <button>Search</button>
        </div>

        <div className="quick">
          Popular: CBC • ESR • HbA1c • Thyroid • LFT • KFT
        </div>
      </section>

      <section className="section" id="tests">
        <div className="sectionTitle">
          <div>
            <span className="eyebrow">PATHOLOGY GUIDE</span>
            <h2>Popular Blood Tests</h2>
          </div>
          <p>
            Common laboratory tests ki educational information.
          </p>
        </div>

        <div className="grid">
          {tests.map((test) => (
            <article className="card" key={test.name}>
              <div className="icon">{test.icon}</div>
              <h3>{test.name}</h3>
              <strong className="full">{test.full}</strong>
              <p>{test.description}</p>
              <div className="range">{test.range}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="info" id="values">
        <span className="eyebrow">REFERENCE VALUES</span>
        <h2>Lab reports ko samajhna</h2>

        <p>
          Laboratory reference ranges testing method, laboratory,
          age, sex, pregnancy aur clinical situation ke according
          alag ho sakti hain. Apni report par printed reference
          interval ko priority dein.
        </p>

        <div className="notice">
          ⚠️ Sirf ek abnormal value ke basis par khud diagnosis na karein.
          Report ko symptoms, medical history aur doctor ki assessment
          ke saath interpret kiya jana chahiye.
        </div>
      </section>

      <section className="section" id="calculators">
        <span className="eyebrow">HEALTH TOOLS</span>
        <h2>Health Calculators</h2>

        <div className="miniGrid">
          <div className="tool">
            <span>⚖️</span>
            <h3>BMI Calculator</h3>
            <p>Height aur weight ke basis par BMI calculate karein.</p>
          </div>

          <div className="tool">
            <span>🫘</span>
            <h3>eGFR Guide</h3>
            <p>Kidney function aur eGFR ke baare mein samjhein.</p>
          </div>

          <div className="tool">
            <span>❤️</span>
            <h3>Health Reference</h3>
            <p>Common laboratory parameters ki educational guide.</p>
          </div>
        </div>
      </section>

      <section className="articles" id="articles">
        <span className="eyebrow">LEARN HEALTH</span>
        <h2>Health Articles</h2>

        <div className="articleBox">
          <h3>CBC report kaise samjhein?</h3>
          <p>
            Hemoglobin, WBC, RBC aur platelet count ke basic meaning
            ko simple language mein samjhein.
          </p>
        </div>

        <div className="articleBox">
          <h3>LFT test kyun kiya jata hai?</h3>
          <p>
            Liver function tests mein commonly measured parameters
            aur unki general role ko samjhein.
          </p>
        </div>

        <div className="articleBox">
          <h3>Thyroid profile kya hai?</h3>
          <p>
            TSH, T3 aur T4 tests thyroid function assessment mein
            kaise use hote hain, uski basic jankari.
          </p>
        </div>
      </section>

      <section className="disclaimer">
        <h2>Medical Disclaimer</h2>
        <p>
          NIDAN Health & Pathology Guide par di gayi information
          educational purpose ke liye hai. Yeh doctor ki consultation,
          diagnosis ya treatment ka replacement nahi hai. Kisi bhi
          medical decision ke liye qualified healthcare professional
          se salah lein.
        </p>
      </section>

      <footer>
        <div>
          <strong>NIDAN</strong>
          <p>Health & Pathology Guide</p>
        </div>

        <p>© 2026 NIDAN. Educational health information.</p>
      </footer>
    </main>
  );
}
