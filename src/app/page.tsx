"use client";

import CVTemplate from "@/components/CVTemplate";
import { cvMain, cvATS, cvAegea, cvGeneral, cvItinera, variations } from "@/data/cv";
import { useState } from "react";
import { CVData } from "@/data/cv";

const cvMap: Record<string, CVData> = { main: cvMain, ats: cvATS, aegea: cvAegea, general: cvGeneral, itinera: cvItinera };

export default function Home() {
  const [active, setActive] = useState("main");
  const [loading, setLoading] = useState(false);
  const data = cvMap[active] || cvMain;

  const handleDownloadPDF = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/pdf?v=${active}`);
      if (!res.ok) throw new Error("Erro ao gerar PDF");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `CV_${data.personal.name.replace(/\s+/g, "_")}_${active}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      alert("Erro ao gerar o PDF. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Title Bar */}
      <div className="no-print titlebar">
        <div className="icon">W</div>
        <span className="name">CV — {data.personal.name}.docx — Word</span>
      </div>

      {/* Toolbar */}
      <div className="no-print toolbar">
        {Object.values(variations).map((v) => (
          <button
            key={v.slug}
            onClick={() => setActive(v.slug)}
            className={`toolbar-btn ${v.slug === active ? "primary" : ""}`}
          >
            {v.label}
          </button>
        ))}

        <div className="toolbar-sep" />

        <button onClick={handleDownloadPDF} className="toolbar-btn primary" disabled={loading}>
          <svg viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {loading ? "Gerando PDF..." : "Baixar PDF"}
        </button>
      </div>

      {/* CV */}
      <CVTemplate data={data} />
    </>
  );
}
