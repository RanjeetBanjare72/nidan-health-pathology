"use client";

import { useState } from "react";

const tests = [
  {
    icon: "🩸",
    name: "CBC Test",
    full: "Complete Blood Count",
    description:
      "Hemoglobin, WBC, RBC aur platelets jaise blood parameters ki basic jaanch.",
    range: "Reference ranges age, sex aur laboratory ke hisab se vary karti hain.",
  },
  {
    icon: "🔬",
    name: "ESR",
    full: "Erythrocyte Sedimentation Rate",
    description:
      "Inflammation assessment mein madad karne wala laboratory test.",
    range: "ESR range age, sex aur laboratory method par depend karti hai.",
  },
  {
    icon: "🧪",
    name: "LFT",
    full: "Liver Function Test",
    description:
      "Bilirubin, AST, ALT, ALP aur proteins ke through liver assessment.",
    range: "Reference ranges laboratory ke according vary karti hain.",
  },
  {
    icon: "💧",
    name: "KFT",
    full: "Kidney Function Test",
    description:
      "Creatinine, urea aur related parameters se kidney function assessment.",
    range: "Interpretation age, sex, laboratory aur clinical context par depend karti hai.",
  },
  {
    icon: "🍬",
    name: "Blood Sugar",
    full: "Glucose Test",
    description:
      "Blood glucose measurement diabetes screening aur monitoring mein use hota hai.",
    range: "Interpretation fasting, post-meal ya random sample par depend karti hai.",
  },
  {
    icon: "📊",
    name: "HbA1c",
    full: "Glycated Hemoglobin",
    description:
      "Pichhle lagbhag 2–3 mahine ke average glucose exposure ka indicator.",
    range: "Clinical interpretation patient context ke saath ki jati hai.",
  },
  {
    icon: "🦋",
    name: "Thyroid Profile",
    full: "TSH, T3 & T4",
    description:
      "Thyroid gland ki functioning assess karne ke commonly used tests.",
    range: "TSH/T3/T4 intervals method aur laboratory ke hisab se vary karte hain.",
  },
  {
    icon: "❤️",
    name: "Lipid Profile",
    full: "Cholesterol Test",
    description:
      "Total cholesterol, LDL, HDL aur triglycerides cardiovascular risk assessment mein useful hain.",
    range: "Treatment targets overall cardiovascular risk par depend karte hain.",
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

function ResultBox({ children }) {
  return (
    <div
      style={{
        marginTop: 16,
        padding: 18,
        borderRadius: 14,
        background: "#ecfeff",
        border: "1px solid #a5f3fc",
      }}
    >
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ display: "grid", gap: 7 }}>
      <label style={{ fontWeight: 700 }}>{label}</label>
      {children}
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");

  // BMI
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  // eGFR
  const [egfrAge, setEgfrAge] = useState("");
  const [egfrSex, setEgfrSex] = useState("male");
  const [creatinine, setCreatinine] = useState("");
  const [egfr, setEgfr] = useState(null);
  const [egfrError, setEgfrError] = useState("");

  // BP
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [bpResult, setBpResult] = useState(null);
  const [bpError, setBpError] = useState("");

  // Blood sugar
  const [sugarType, setSugarType] = useState("fasting");
  const [sugar, setSugar] = useState("");
  const [sugarResult, setSugarResult] = useState(null);

  // HbA1c
  const [hba1c, setHba1c] = useState("");
  const [hba1cResult, setHba1cResult] = useState(null);

  // Hemoglobin
  const [hbSex, setHbSex] = useState("male");
  const [hb, setHb] = useState("");
  const [hbResult, setHbResult] = useState(null);

  // Urea
  const [urea, setUrea] = useState("");
  const [ureaResult, setUreaResult] = useState(null);

  // Lipids
  const [totalCholesterol, setTotalCholesterol] = useState("");
  const [ldl, setLdl] = useState("");
  const [hdl, setHdl] = useState("");
  const [tg, setTg] = useState("");
  const [lipidResult, setLipidResult] = useState(null);

  // TSH
  const [tsh, setTsh] = useState("");
  const [tshResult, setTshResult] = useState(null);

  // CBC
  const [cbcHb, setCbcHb] = useState("");
  const [wbc, setWbc] = useState("");
  const [platelets, setPlatelets] = useState("");
  const [rbc, setRbc] = useState("");
  const [cbcResult, setCbcResult] = useState(null);

  const inputStyle = {
    width: "100%",
    padding: "13px",
    border: "1px solid #d7dde5",
    borderRadius: "10px",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    background: "#1597a0",
    color: "white",
    fontWeight: 800,
    cursor: "pointer",
    fontSize: "15px",
  };

  const toolStyle = {
    padding: "24px",
    border: "1px solid #e3e7ec",
    borderRadius: "18px",
    background: "#fff",
    boxShadow: "0 5px 20px rgba(0,0,0,.04)",
    display: "grid",
    gap: "15px",
  };

  const fieldsStyle = {
    display: "grid",
    gap: "14px",
  };

  const calculateBMI = () => {
    const h = Number(height);
    const w = Number(weight);

    if (h <= 0 || w <= 0) {
      setBmi(null);
      return;
    }

    const meters = h / 100;
    setBmi((w / (meters * meters)).toFixed(1));
  };

  const getBMICategory = (value) => {
    const n = Number(value);

    if (n < 18.5) return "Underweight";
    if (n < 25) return "Normal Weight";
    if (n < 30) return "Overweight";
    return "Obesity";
  };

  const calculateEGFR = () => {
    const age = Number(egfrAge);
    const scr = Number(creatinine);

    if (!age || !scr || age < 18 || scr <= 0) {
      setEgfr(null);
      setEgfrError(
        age && age < 18
          ? "Yeh calculator 18+ years adults ke liye hai."
          : "Valid age aur serum creatinine enter karein."
      );
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

    if (female) result *= 1.012;

    setEgfr(Math.round(result));
    setEgfrError("");
  };

  const getEGFRCategory = (n) => {
    n = Number(n);

    if (n >= 90) return "G1 — Normal or high";
    if (n >= 60) return "G2 — Mildly decreased";
    if (n >= 45) return "G3a — Mildly to moderately decreased";
    if (n >= 30) return "G3b — Moderately to severely decreased";
    if (n >= 15) return "G4 — Severely decreased";
    return "G5 — Kidney failure range";
  };

  const calculateBP = () => {
    const sys = Number(systolic);
    const dia = Number(diastolic);

    if (!sys || !dia || sys <= 0 || dia <= 0) {
      setBpError("Valid Systolic aur Diastolic BP enter karein.");
      setBpResult(null);
      return;
    }

    if (sys < 50 || sys > 300 || dia < 30 || dia > 200) {
      setBpError("BP value expected range ke bahar hai. Reading dobara check karein.");
      setBpResult(null);
      return;
    }

    let category = "";
    let message = "";

    // AHA/ACC-style educational categories
    if (sys > 180 || dia > 120) {
      category = "Severely High Blood Pressure";
      message =
        "Reading bahut high hai. Dobara BP check karein. Agar chest pain, breathing difficulty, weakness, vision ya speech problem ho to urgent medical assessment zaroori hai.";
    } else if (sys >= 140 || dia >= 90) {
      category = "High Blood Pressure — Stage 2";
      message = "BP high range mein hai. Clinical assessment useful hai.";
    } else if (sys >= 130 || dia >= 80) {
      category = "High Blood Pressure — Stage 1";
      message =
        "AHA/ACC category ke according reading Stage 1 range mein aati hai.";
    } else if (sys >= 120 && dia < 80) {
      category = "Elevated Blood Pressure";
      message = "Systolic BP elevated range mein hai.";
    } else {
      category = "Normal Blood Pressure";
      message = "Reading normal category mein hai.";
    }

    setBpError("");
    setBpResult({
      systolic: sys,
      diastolic: dia,
      category,
      message,
    });
  };

  const checkSugar = () => {
    const n = Number(sugar);

    if (!n || n <= 0) {
      setSugarResult(null);
      return;
    }

    let category = "";

    if (sugarType === "fasting") {
      if (n < 70) category = "Low glucose range";
      else if (n <= 99) category = "Usual fasting range";
      else if (n <= 125) category = "Prediabetes screening range";
      else category = "Diabetes screening range";
    } else if (sugarType === "pp") {
      if (n < 70) category = "Low glucose range";
      else if (n < 140) category = "Below 140 mg/dL";
      else if (n <= 199) category = "Impaired glucose tolerance screening range";
      else category = "High / diabetes screening range";
    } else {
      if (n < 70) category = "Low glucose range";
      else if (n >= 200) category = "High random glucose range";
      else category = "Interpret with meal timing and symptoms";
    }

    setSugarResult({ value: n, category });
  };

  const calculateHbA1c = () => {
    const n = Number(hba1c);

    if (!n || n <= 0 || n > 25) {
      setHba1cResult(null);
      return;
    }

    let category = "";

    if (n < 5.7) category = "Usual non-diabetes screening range";
    else if (n < 6.5) category = "Prediabetes screening range";
    else category = "Diabetes screening range";

    // ADAG equation
    const eag = Math.round(28.7 * n - 46.7);

    setHba1cResult({
      value: n,
      category,
      eag,
    });
  };

  const checkHb = () => {
    const n = Number(hb);

    if (!n || n <= 0) {
      setHbResult(null);
      return;
    }

    const lower = hbSex === "male" ? 13 : 12;
    const upper = hbSex === "male" ? 17 : 15;

    let category = "";

    if (n < lower) category = "Below example adult reference range";
    else if (n > upper) category = "Above example adult reference range";
    else category = "Within example adult reference range";

    setHbResult({ value: n, category });
  };

  const checkUrea = () => {
    const n = Number(urea);

    if (!n || n <= 0) {
      setUreaResult(null);
      return;
    }

    let category = "";

    if (n < 15) category = "Below common example range";
    else if (n <= 40) category = "Within common example range";
    else category = "Above common example range";

    setUreaResult({ value: n, category });
  };

  const checkLipid = () => {
    const tc = Number(totalCholesterol);
    const l = Number(ldl);
    const h = Number(hdl);
    const t = Number(tg);

    if (!tc && !l && !h && !t) {
      setLipidResult(null);
      return;
    }

    const lines = [];

    if (tc) {
      lines.push(
        `Total Cholesterol: ${
          tc < 200 ? "Desirable range" : tc < 240 ? "Borderline-high range" : "High range"
        }`
      );
    }

    if (l) {
      lines.push(
        `LDL: ${
          l < 100
            ? "Optimal range"
            : l < 130
            ? "Near/above optimal range"
            : l < 160
            ? "Borderline-high range"
            : l < 190
            ? "High range"
            : "Very high range"
        }`
      );
    }

    if (h) {
      lines.push(
        `HDL: ${
          h >= 60
            ? "Higher HDL range"
            : h < 40
            ? "Low HDL range"
            : "Intermediate HDL range"
        }`
      );
    }

    if (t) {
      lines.push(
        `Triglycerides: ${
          t < 150
            ? "Normal range"
            : t < 200
            ? "Borderline-high range"
            : t < 500
            ? "High range"
            : "Very high range"
        }`
      );
    }

    setLipidResult(lines);
  };

  const checkTSH = () => {
    const n = Number(tsh);

    if (!n || n <= 0) {
      setTshResult(null);
      return;
    }

    let category = "";

    // Example range only
    if (n < 0.4) category = "Below example adult reference interval";
    else if (n <= 4.0) category = "Within example adult reference interval";
    else category = "Above example adult reference interval";

    setTshResult({ value: n, category });
  };

  const analyzeCBC = () => {
    const hbValue = Number(cbcHb);
    const wbcValue = Number(wbc);
    const plateletValue = Number(platelets);
    const rbcValue = Number(rbc);

    if (!hbValue && !wbcValue && !plateletValue && !rbcValue) {
      setCbcResult(null);
      return;
    }

    const result = [];

    if (hbValue) {
      result.push(
        `Hemoglobin: ${
          hbValue < 12
            ? "Low example range"
            : hbValue > 17
            ? "High example range"
            : "Within broad example range"
        }`
      );
    }

    if (wbcValue) {
      result.push(
        `WBC: ${
          wbcValue < 4000
            ? "Low example range"
            : wbcValue > 11000
            ? "High example range"
            : "Within common example range"
        }`
      );
    }

    if (plateletValue) {
      result.push(
        `Platelets: ${
          plateletValue < 150000
            ? "Low example range"
            : plateletValue > 450000
            ? "High example range"
            : "Within common example range"
        }`
      );
    }

    if (rbcValue) {
      result.push(
        `RBC: ${rbcValue} million/µL — sex-specific laboratory reference range se compare karein.`
      );
    }

    setCbcResult(result);
  };

  const filteredTests = tests.filter((test) => {
    const q = search.toLowerCase().trim();

    return (
      test.name.toLowerCase().includes(q) ||
      test.full.toLowerCase().includes(q) ||
      test.description.toLowerCase().includes(q)
    );
  });

  const handleSearch = () => {
    document.getElementById("tests")?.scrollIntoView({
      behavior: "smooth",
    });
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
          Blood tests, pathology reports aur health information ko simple
          Hindi/Hinglish mein samjhein.
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

          <p>Common laboratory tests ki educational information.</p>
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
          Laboratory reference ranges testing method, laboratory, age, sex,
          pregnancy aur clinical situation ke according alag ho sakti hain.
          Apni report par printed reference interval ko priority dein.
        </p>

        <div className="notice">
          ⚠️ Sirf ek abnormal value ke basis par khud diagnosis na karein.
          Report ko symptoms, history aur healthcare professional ki assessment
          ke saath interpret kiya jana chahiye.
        </div>
      </section>

      <section className="section" id="calculators">
        <span className="eyebrow">HEALTH TOOLS</span>
        <h2>Health Calculators & Report Checkers</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          {/* BMI */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>⚖️</span>
            <h3>BMI Calculator</h3>
            <p>Height aur weight se adult BMI calculate karein.</p>

            <div style={fieldsStyle}>
              <Field label="Height (cm)">
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Example: 170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Field>

              <Field label="Weight (kg)">
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Example: 65"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Field>
            </div>

            <button style={buttonStyle} type="button" onClick={calculateBMI}>
              Calculate BMI
            </button>

            {bmi !== null && (
              <ResultBox>
                <strong>Your BMI: {bmi}</strong>
                <p>Category: {getBMICategory(bmi)}</p>
              </ResultBox>
            )}
          </div>

          {/* eGFR */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>🫘</span>
            <h3>eGFR Calculator</h3>

            <p>
              2021 CKD-EPI creatinine equation se estimated kidney filtration
              rate calculate karein.
            </p>

            <div style={fieldsStyle}>
              <Field label="Age (years)">
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Example: 45"
                  value={egfrAge}
                  onChange={(e) => setEgfrAge(e.target.value)}
                />
              </Field>

              <Field label="Sex">
                <select
                  style={inputStyle}
                  value={egfrSex}
                  onChange={(e) => setEgfrSex(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </Field>

              <Field label="Serum Creatinine (mg/dL)">
                <input
                  style={inputStyle}
                  type="number"
                  step="0.01"
                  placeholder="Example: 1.0"
                  value={creatinine}
                  onChange={(e) => setCreatinine(e.target.value)}
                />
              </Field>
            </div>

            <button style={buttonStyle} type="button" onClick={calculateEGFR}>
              Calculate eGFR
            </button>

            {egfrError && <ResultBox>⚠️ {egfrError}</ResultBox>}

            {egfr !== null && (
              <ResultBox>
                <strong style={{ fontSize: 28 }}>{egfr}</strong>
                <p>mL/min/1.73 m²</p>
                <b>{getEGFRCategory(egfr)}</b>
                <p>
                  eGFR ek estimate hai. G1/G2 value akeli CKD establish nahi
                  karti.
                </p>
              </ResultBox>
            )}
          </div>

          {/* BP */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>❤️</span>
            <h3>Blood Pressure Checker</h3>

            <p>Systolic aur Diastolic BP enter karein.</p>

            <div style={fieldsStyle}>
              <Field label="Systolic BP (mmHg)">
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Example: 120"
                  value={systolic}
                  onChange={(e) => setSystolic(e.target.value)}
                />
              </Field>

              <Field label="Diastolic BP (mmHg)">
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Example: 80"
                  value={diastolic}
                  onChange={(e) => setDiastolic(e.target.value)}
                />
              </Field>
            </div>

            <button style={buttonStyle} type="button" onClick={calculateBP}>
              Check Blood Pressure
            </button>

            {bpError && <ResultBox>⚠️ {bpError}</ResultBox>}

            {bpResult && (
              <ResultBox>
                <strong style={{ fontSize: 30 }}>
                  {bpResult.systolic}/{bpResult.diastolic}
                </strong>
                <p>mmHg</p>
                <h4>{bpResult.category}</h4>
                <p>{bpResult.message}</p>
                <small>
                  Category shown uses AHA/ACC-style thresholds for educational
                  purposes. Ek single reading se hypertension diagnose nahi hota.
                </small>
              </ResultBox>
            )}
          </div>

          {/* Sugar */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>🍬</span>
            <h3>Blood Sugar Checker</h3>

            <div style={fieldsStyle}>
              <Field label="Test Type">
                <select
                  style={inputStyle}
                  value={sugarType}
                  onChange={(e) => setSugarType(e.target.value)}
                >
                  <option value="fasting">Fasting Blood Sugar</option>
                  <option value="pp">Post-meal / 2-hour</option>
                  <option value="random">Random Blood Sugar</option>
                </select>
              </Field>

              <Field label="Glucose (mg/dL)">
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Example: 95"
                  value={sugar}
                  onChange={(e) => setSugar(e.target.value)}
                />
              </Field>
            </div>

            <button style={buttonStyle} type="button" onClick={checkSugar}>
              Check Blood Sugar
            </button>

            {sugarResult && (
              <ResultBox>
                <strong>{sugarResult.value} mg/dL</strong>
                <p>{sugarResult.category}</p>
                <small>
                  Diabetes diagnosis generally requires appropriate confirmatory
                  testing unless clinical circumstances indicate otherwise.
                </small>
              </ResultBox>
            )}
          </div>

          {/* HbA1c */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>📊</span>
            <h3>HbA1c & eAG Calculator</h3>

            <Field label="HbA1c (%)">
              <input
                style={inputStyle}
                type="number"
                step="0.1"
                placeholder="Example: 5.6"
                value={hba1c}
                onChange={(e) => setHba1c(e.target.value)}
              />
            </Field>

            <button style={buttonStyle} type="button" onClick={calculateHbA1c}>
              Check HbA1c
            </button>

            {hba1cResult && (
              <ResultBox>
                <strong>HbA1c: {hba1cResult.value}%</strong>
                <p>{hba1cResult.category}</p>
                <p>
                  Estimated Average Glucose:{" "}
                  <strong>{hba1cResult.eag} mg/dL</strong>
                </p>
              </ResultBox>
            )}
          </div>

          {/* Hb */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>🩸</span>
            <h3>Hemoglobin Checker</h3>

            <div style={fieldsStyle}>
              <Field label="Sex">
                <select
                  style={inputStyle}
                  value={hbSex}
                  onChange={(e) => setHbSex(e.target.value)}
                >
                  <option value="male">Adult Male</option>
                  <option value="female">Adult Female</option>
                </select>
              </Field>

              <Field label="Hemoglobin (g/dL)">
                <input
                  style={inputStyle}
                  type="number"
                  step="0.1"
                  placeholder="Example: 13.5"
                  value={hb}
                  onChange={(e) => setHb(e.target.value)}
                />
              </Field>
            </div>

            <button style={buttonStyle} type="button" onClick={checkHb}>
              Check Hemoglobin
            </button>

            {hbResult && (
              <ResultBox>
                <strong>{hbResult.value} g/dL</strong>
                <p>{hbResult.category}</p>
                <small>
                  Example ranges only. Age, pregnancy, altitude and laboratory
                  reference interval matter.
                </small>
              </ResultBox>
            )}
          </div>

          {/* Creatinine */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>🧪</span>
            <h3>Creatinine Checker</h3>

            <p>
              Serum creatinine ko akela interpret karne ke bajay age, sex aur
              eGFR ke saath assess karna zyada useful hota hai.
            </p>

            <Field label="Serum Creatinine (mg/dL)">
              <input
                style={inputStyle}
                type="number"
                step="0.01"
                placeholder="Example: 1.0"
                value={creatinine}
                onChange={(e) => setCreatinine(e.target.value)}
              />
            </Field>

            <ResultBox>
              <strong>
                {creatinine ? `${creatinine} mg/dL` : "Creatinine enter karein"}
              </strong>
              <p>
                Upar diye eGFR calculator mein age aur sex enter karke kidney
                filtration estimate dekhein.
              </p>
            </ResultBox>
          </div>

          {/* Urea */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>💧</span>
            <h3>Blood Urea Checker</h3>

            <Field label="Blood Urea (mg/dL)">
              <input
                style={inputStyle}
                type="number"
                step="0.1"
                placeholder="Example: 28"
                value={urea}
                onChange={(e) => setUrea(e.target.value)}
              />
            </Field>

            <button style={buttonStyle} type="button" onClick={checkUrea}>
              Check Urea
            </button>

            {ureaResult && (
              <ResultBox>
                <strong>{ureaResult.value} mg/dL</strong>
                <p>{ureaResult.category}</p>
                <small>
                  Example range 15–40 mg/dL is shown only for general education;
                  use your laboratory reference interval.
                </small>
              </ResultBox>
            )}
          </div>

          {/* Lipid */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>❤️</span>
            <h3>Lipid Profile Checker</h3>

            <div style={fieldsStyle}>
              <Field label="Total Cholesterol (mg/dL)">
                <input
                  style={inputStyle}
                  type="number"
                  value={totalCholesterol}
                  onChange={(e) => setTotalCholesterol(e.target.value)}
                />
              </Field>

              <Field label="LDL (mg/dL)">
                <input
                  style={inputStyle}
                  type="number"
                  value={ldl}
                  onChange={(e) => setLdl(e.target.value)}
                />
              </Field>

              <Field label="HDL (mg/dL)">
                <input
                  style={inputStyle}
                  type="number"
                  value={hdl}
                  onChange={(e) => setHdl(e.target.value)}
                />
              </Field>

              <Field label="Triglycerides (mg/dL)">
                <input
                  style={inputStyle}
                  type="number"
                  value={tg}
                  onChange={(e) => setTg(e.target.value)}
                />
              </Field>
            </div>

            <button style={buttonStyle} type="button" onClick={checkLipid}>
              Check Lipid Profile
            </button>

            {lipidResult && (
              <ResultBox>
                {lipidResult.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <small>
                  LDL treatment goal patient ke cardiovascular risk ke hisab se
                  different ho sakta hai.
                </small>
              </ResultBox>
            )}
          </div>

          {/* TSH */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>🦋</span>
            <h3>TSH Checker</h3>

            <Field label="TSH (mIU/L)">
              <input
                style={inputStyle}
                type="number"
                step="0.01"
                placeholder="Example: 2.5"
                value={tsh}
                onChange={(e) => setTsh(e.target.value)}
              />
            </Field>

            <button style={buttonStyle} type="button" onClick={checkTSH}>
              Check TSH
            </button>

            {tshResult && (
              <ResultBox>
                <strong>{tshResult.value} mIU/L</strong>
                <p>{tshResult.category}</p>
                <small>
                  0.4–4.0 mIU/L yahan sirf example interval hai. Laboratory,
                  pregnancy, age aur clinical context ke according range change
                  ho sakti hai.
                </small>
              </ResultBox>
            )}
          </div>

          {/* CBC */}
          <div style={toolStyle}>
            <span style={{ fontSize: 32 }}>🔬</span>
            <h3>Basic CBC Report Analyzer</h3>

            <p>
              CBC ke kuch common parameters enter karke basic educational
              interpretation dekhein.
            </p>

            <div style={fieldsStyle}>
              <Field label="Hemoglobin (g/dL)">
                <input
                  style={inputStyle}
                  type="number"
                  step="0.1"
                  value={cbcHb}
                  onChange={(e) => setCbcHb(e.target.value)}
                />
              </Field>

              <Field label="WBC (/µL)">
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Example: 7500"
                  value={wbc}
                  onChange={(e) => setWbc(e.target.value)}
                />
              </Field>

              <Field label="Platelets (/µL)">
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="Example: 250000"
                  value={platelets}
                  onChange={(e) => setPlatelets(e.target.value)}
                />
              </Field>

              <Field label="RBC (million/µL)">
                <input
                  style={inputStyle}
                  type="number"
                  step="0.01"
                  placeholder="Example: 4.8"
                  value={rbc}
                  onChange={(e) => setRbc(e.target.value)}
                />
              </Field>
            </div>

            <button style={buttonStyle} type="button" onClick={analyzeCBC}>
              Analyze CBC
            </button>

            {cbcResult && (
              <ResultBox>
                {cbcResult.map((line) => (
                  <p key={line}>{line}</p>
                ))}

                <small>
                  CBC interpretation mein MCV, MCH, MCHC, RDW, differential
                  count, age, sex aur clinical history bhi important ho sakte
                  hain.
                </small>
              </ResultBox>
            )}
          </div>
        </div>
      </section>

      <section className="articles" id="articles">
        <span className="eyebrow">LEARN HEALTH</span>
        <h2>Health Articles</h2>

        <div className="articleBox">
          <h3>CBC report kaise samjhein?</h3>
          <p>
            Hemoglobin, WBC, RBC aur platelet count ke basic meaning ko simple
            language mein samjhein.
          </p>
        </div>

        <div className="articleBox">
          <h3>LFT test kyun kiya jata hai?</h3>
          <p>
            Liver function tests mein commonly measured parameters aur unki
            general role ko samjhein.
          </p>
        </div>

        <div className="articleBox">
          <h3>Kidney Function Test kya batata hai?</h3>
          <p>
            Creatinine, urea aur eGFR kidney assessment mein kis tarah use hote
            hain, uski basic jankari.
          </p>
        </div>

        <div className="articleBox">
          <h3>Thyroid profile kya hai?</h3>
          <p>
            TSH, T3 aur T4 tests thyroid function assessment mein kaise use
            hote hain, uski basic jankari.
          </p>
        </div>
      </section>

      <section className="disclaimer">
        <h2>Medical Disclaimer</h2>

        <p>
          NIDAN Health & Pathology Guide par di gayi information aur calculator
          results educational purpose ke liye hain. Yeh doctor ki consultation,
          diagnosis ya treatment ka replacement nahi hain. Reference ranges
          laboratory, age, sex, pregnancy aur clinical situation ke hisab se
          vary kar sakti hain. Kisi bhi medical decision ke liye qualified
          healthcare professional se salah lein.
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
