"use client";

import { useState } from "react";
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
  const [search, setSearch] = useState("");
const [height, setHeight] = useState("");
const [weight, setWeight] = useState("");
const [bmi, setBmi] = useState(null);
const [egfrAge, setEgfrAge] = useState("");
const [egfrSex, setEgfrSex] = useState("male");
const [creatinine, setCreatinine] = useState("");
const [egfr, setEgfr] = useState(null);
const [egfrError, setEgfrError] = useState("");

  const [systolic, setSystolic] = useState("");
const [diastolic, setDiastolic] = useState("");
const [bpResult, setBpResult] = useState(null);
const [bpError, setBpError] = useState("");
const calculateEGFR = () => {
  const age = parseFloat(egfrAge);
  const scr = parseFloat(creatinine);

  if (!age || !scr || age < 18 || scr <= 0) {
    setEgfr(null);
    setEgfrError(
      age && age < 18
        ? "Yeh calculator sirf 18+ years adults ke liye hai."
        : "Please valid age aur serum creatinine enter karein."
    );
    const calculateBP = () => {
  const sys = Number(systolic);
  const dia = Number(diastolic);

  if (!systolic || !diastolic || sys <= 0 || dia <= 0) {
    setBpError("Please valid Systolic aur Diastolic BP enter karein.");
    setBpResult(null);
    return;
  }

  if (sys < 50 || sys > 300 || dia < 30 || dia > 200) {
    setBpError("BP value expected range ke bahar hai. Value dobara check karein.");
    setBpResult(null);
    return;
  }

  let category = "";
  let message = "";

  if (sys > 180 || dia > 120) {
    category = "Severely High Blood Pressure";
    message =
      "Reading bahut high hai. Dobara BP check karein. Agar chest pain, saans lene mein dikkat, weakness, vision ya speech problem jaise symptoms hain to emergency medical care lein.";
  } else if (sys >= 140 || dia >= 90) {
    category = "High Blood Pressure — Stage 2";
    message =
      "BP high range mein hai. Healthcare professional se assessment karana uchit hai.";
  } else if (sys >= 130 || dia >= 80) {
    category = "High Blood Pressure — Stage 1";
    message =
      "BP high range mein hai. Repeat readings aur clinical assessment important hain.";
  } else if (sys >= 120 && dia < 80) {
    category = "Elevated Blood Pressure";
    message =
      "Systolic BP elevated range mein hai. Regular monitoring aur healthy lifestyle useful hai.";
  } else if (sys < 120 && dia < 80) {
    category = "Normal Blood Pressure";
    message =
      "Reading normal range mein hai.";
  }

  setBpError("");
  setBpResult({
    systolic: sys,
    diastolic: dia,
    category,
    message,
  });
};
    return;
  }

  const female = egfrSex === "female";
  const kappa = female ? 0.7 : 0.9;
  const alpha = female ? -0.241 : -0.302;

  const ratio = scr / kappa;

  let result =
    142 *
    Math.pow(Math.min(ratio, 1), alpha) *
    Math.pow(Math.max(ratio, 1), -1.2) *
    Math.pow(0.9938, age);

  if (female) {
    result *= 1.012;
  }

  setEgfr(Math.round(result));
  setEgfrError("");
};

const getEGFRCategory = (value) => {
  const n = Number(value);

  if (n >= 90) return "G1 — Normal or high";
  if (n >= 60) return "G2 — Mildly decreased";
  if (n >= 45) return "G3a — Mildly to moderately decreased";
  if (n >= 30) return "G3b — Moderately to severely decreased";
  if (n >= 15) return "G4 — Severely decreased";

  return "G5 — Kidney failure range";
};
const calculateBMI = () => {
  const h = parseFloat(height);
  const w = parseFloat(weight);

  if (!h || !w || h <= 0 || w <= 0) {
    setBmi(null);
    return;
  }

  const heightInMeter = h / 100;
  const result = w / (heightInMeter * heightInMeter);

  setBmi(result.toFixed(1));
};

const getBMICategory = (value) => {
  const number = parseFloat(value);

  if (number < 18.5) return "Underweight";
  if (number < 25) return "Normal Weight";
  if (number < 30) return "Overweight";
  return "Obesity";
};
  const filteredTests = tests.filter((test) => {
    const query = search.toLowerCase().trim();

    return (
      test.name.toLowerCase().includes(query) ||
      test.full.toLowerCase().includes(query) ||
      test.description.toLowerCase().includes(query)
    );
  });

  const handleSearch = () => {
    if (!search.trim()) return;

    document
      .getElementById("tests")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") handleSearch();
    }}
  />
  <button type="button" onClick={handleSearch}>
    Search
  </button>
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
          {filteredTests.map((test) => (
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
        <div className="tool bmiCalculator">
  <span>⚖️</span>
  <h3>BMI Calculator</h3>
  <p>Apni height aur weight enter karke BMI calculate karein.</p>

  <div className="bmiInputs">
    <div>
      <label>Height (cm)</label>
      <input
        type="number"
        placeholder="Example: 170"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
    </div>

    <div>
      <label>Weight (kg)</label>
      <input
        type="number"
        placeholder="Example: 65"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
    </div>
  </div>

  <button type="button" onClick={calculateBMI}>
    Calculate BMI
  </button>

  {bmi && (
    <div className="bmiResult">
      <strong>Your BMI: {bmi}</strong>
      <p>Category: {getBMICategory(bmi)}</p>
    </div>
  )}
</div>

        <div className="tool egfrCalculator">
  <span>🫘</span>

  <h3>eGFR Calculator</h3>

  <p>
    2021 CKD-EPI Creatinine Equation se estimated kidney
    filtration rate calculate karein.
  </p>

  <div className="egfrInputs">

    <div>
      <label>Age (years)</label>
      <input
        type="number"
        placeholder="Example: 45"
        value={egfrAge}
        onChange={(e) => setEgfrAge(e.target.value)}
      />
    </div>

    <div>
      <label>Sex</label>

      <select
        value={egfrSex}
        onChange={(e) => setEgfrSex(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div>
      <label>Serum Creatinine (mg/dL)</label>

      <input
        type="number"
        step="0.01"
        placeholder="Example: 1.0"
        value={creatinine}
        onChange={(e) => setCreatinine(e.target.value)}
      />
    </div>

  </div>

  <button type="button" onClick={calculateEGFR}>
    Calculate eGFR
  </button>

  {egfrError && (
    <div className="egfrError">
      {egfrError}
    </div>
  )}

  {egfr !== null && (
    <div className="egfrResult">

      <span>Estimated eGFR</span>

      <strong>
        {egfr}
      </strong>

      <small>
        mL/min/1.73 m²
      </small>

      <p>
        {getEGFRCategory(egfr)}
      </p>

      <div className="egfrNote">
  eGFR ek estimate hai. G1/G2 value akeli CKD diagnosis
  establish nahi karti. Clinical findings, urine albumin
  aur repeat testing bhi important ho sakte hain.
</div>

</div>
)}
</div>
</div>
)}
<div className="bpCalculator">
          
          <div className="bpCalculator">
  <span>❤️</span>

  <h3>Blood Pressure Checker</h3>

  <p>
    Apna Systolic aur Diastolic blood pressure enter karke
    BP category check karein.
  </p>

  <div className="bpInputs">
    <div>
      <label>Systolic BP (mmHg)</label>
      <input
        type="number"
        inputMode="numeric"
        placeholder="Example: 120"
        value={systolic}
        onChange={(e) => setSystolic(e.target.value)}
      />
    </div>

    <div>
      <label>Diastolic BP (mmHg)</label>
      <input
        type="number"
        inputMode="numeric"
        placeholder="Example: 80"
        value={diastolic}
        onChange={(e) => setDiastolic(e.target.value)}
      />
    </div>
  </div>

  <button type="button" onClick={calculateBP}>
    Check Blood Pressure
  </button>

  {bpError && (
    <div className="bpError">
      ⚠️ {bpError}
    </div>
  )}

  {bpResult && (
    <div className="bpResult">

      <span>Your Blood Pressure</span>

      <strong>
        {bpResult.systolic}/{bpResult.diastolic}
      </strong>

      <small>mmHg</small>

      <h4>{bpResult.category}</h4>

      <div className="bpNote">
        {bpResult.message}
      </div>

      <div className="bpDisclaimer">
        Ek single BP reading se hypertension diagnose nahi hota.
        Diagnosis ke liye repeat measurements aur healthcare
        professional ka assessment zaroori ho sakta hai.
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
