"use client";

import CVTemplate from "@/components/CVTemplate";
import { cvMain, variations } from "@/data/cv";

export default function Home() {
  const handlePDF = () => {
    const el = document.getElementById("cv-render");
    if (!el) return;
    const styles = Array.from(document.styleSheets)
      .map((sheet) => {
        try { return Array.from(sheet.cssRules).map((r) => r.cssText).join("\n"); }
        catch { return ""; }
      })
      .join("\n");

    const w = window.open("", "_blank", "width=800,height=600");
    if (!w) { alert("Permita pop-ups para baixar o PDF."); return; }

    w.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>CV — ${cvMain.personal.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{font-family:'Inter',sans-serif;background:white;display:flex;justify-content:center;-webkit-print-color-adjust:exact;print-color-adjust:exact}
@page{size:A4;margin:0}
${styles}
.no-print{display:none!important}
.paper{flex-direction:row!important;box-shadow:none!important;margin:0!important;width:210mm!important;min-height:297mm!important}
.sidebar{width:70mm!important;min-width:70mm!important;padding:20mm 7mm 10mm!important}
.sb-contacts-grid{display:block!important}
.sb-edu-grid{display:block!important}
.sb-edu{font-size:7pt!important;padding:0!important;background:none!important;margin-bottom:3mm!important;padding-left:3mm!important;border-left:0.4pt solid rgba(255,255,255,0.25)!important;border-radius:0!important}
.paper-wrap{padding:0!important}
</style>
</head>
<body>${el.innerHTML}</body>
<script>window.onload=function(){setTimeout(function(){window.print()},600)}</script>
</html>`);
    w.document.close();
  };

  return (
    <>
      <div className="no-print">
        <div className="toolbar">
          <div className="tb-variations">
            {Object.values(variations).map((v) => (
              <a key={v.slug} href={`/${v.slug}`} className={`tb-btn ${v.slug === "main" ? "active" : ""}`}>
                {v.label}
              </a>
            ))}
          </div>
          <button onClick={handlePDF} className="tb-print">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Baixar PDF
          </button>
        </div>
      </div>

      <div id="cv-render">
        <CVTemplate data={cvMain} />
      </div>
    </>
  );
}
