"use client";

import CVTemplate from "@/components/CVTemplate";
import { cvMain, variations } from "@/data/cv";

export default function Home() {
  const handlePDF = () => {
    const el = document.getElementById("cv-render");
    if (!el) return;

    // Collect all rendered CSS
    const allCSS = Array.from(document.styleSheets)
      .map((sheet) => {
        try { return Array.from(sheet.cssRules).map((r) => r.cssText).join("\n"); }
        catch { return ""; }
      })
      .join("\n");

    const w = window.open("", "_blank", "width=900,height=700");
    if (!w) { alert("Permita pop-ups para este site para baixar o PDF."); return; }

    w.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>CV — ${cvMain.personal.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{font-family:'Space Grotesk',sans-serif;display:flex;justify-content:center;background:white;-webkit-print-color-adjust:exact;print-color-adjust:exact}
@page{size:A4;margin:0}
${allCSS}
.no-print,.toolbar{display:none!important}
.page-wrap{padding:0!important}
.paper{display:flex!important;flex-direction:row!important;box-shadow:none!important;margin:0!important;max-width:none!important;width:210mm!important;min-height:297mm!important;border-radius:0!important}
.cv-header{width:72mm!important;min-width:72mm!important;padding:18mm 8mm 10mm!important}
.cv-name{font-size:16pt!important}
.cv-role{font-size:9pt!important}
.contact-grid{grid-template-columns:1fr!important;gap:2.5mm!important;margin-top:5mm!important;padding-top:4mm!important}
.contact-item{font-size:7pt!important;gap:1.5mm!important}
.contact-item svg{width:3mm!important;height:3mm!important}
.cv-body{padding:18mm 10mm 10mm!important}
.cv-section{margin-bottom:5mm!important}
.cv-section-title{font-size:8pt!important;margin-bottom:3mm!important}
.cv-summary{font-size:7pt!important}
.cv-summary p{margin-bottom:1.5mm!important}
.cv-exp{margin-bottom:4mm!important}
.cv-exp-company{font-size:8.5pt!important}
.cv-exp-period{font-size:6.5pt!important}
.cv-exp-role{font-size:7.5pt!important;margin-bottom:1.5mm!important}
.cv-exp-bullets li{font-size:7pt!important;margin-bottom:0.8mm!important;padding-left:4mm!important}
.cv-edu-item{font-size:7pt!important}
.cv-tag{padding:1.5mm 3mm!important;font-size:6.5pt!important}
</style>
</head>
<body>${el.innerHTML}</body>
<script>window.onload=function(){setTimeout(function(){window.print()},800)}</script>
</html>`);
    w.document.close();
  };

  return (
    <>
      {/* Toolbar */}
      <div className="no-print toolbar">
        <div className="tb-variants">
          {Object.values(variations).map((v) => (
            <a
              key={v.slug}
              href={`/${v.slug}`}
              className={`tb-variant ${v.slug === "main" ? "active" : ""}`}
            >
              {v.label}
            </a>
          ))}
        </div>
        <button onClick={handlePDF} className="tb-pdf">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          Baixar PDF
        </button>
      </div>

      {/* CV */}
      <div id="cv-render">
        <CVTemplate data={cvMain} />
      </div>
    </>
  );
}
