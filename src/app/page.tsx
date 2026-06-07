"use client";

import CVTemplate from "@/components/CVTemplate";
import { cvMain, variations } from "@/data/cv";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleDownloadPDF = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/pdf");
      if (!res.ok) throw new Error("Erro ao gerar PDF");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `CV_${cvMain.personal.name.replace(/\s+/g, "_")}.pdf`;
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
        <span className="name">CV — {cvMain.personal.name}.docx — Word</span>
      </div>

      {/* Toolbar */}
      <div className="no-print toolbar">
        {Object.values(variations).map((v) => (
          <a
            key={v.slug}
            href={v.slug === "main" ? "/" : `/${v.slug}`}
            className={`toolbar-btn ${v.slug === "main" ? "primary" : ""}`}
          >
            {v.label}
          </a>
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
      <CVTemplate data={cvMain} />
    </>
  );
}
