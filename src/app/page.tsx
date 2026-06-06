"use client";

import CVTemplate from "@/components/CVTemplate";
import { cvMain, variations } from "@/data/cv";

export default function Home() {
  const handlePDF = () => {
    const printContents = document.getElementById("cv-render")?.innerHTML;
    if (!printContents) return;

    const w = window.open("", "_blank", "width=800,height=600");
    if (!w) { alert("Bloqueador de pop-up detectado. Permita pop-ups para este site."); return; }

    w.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<title>CV — ${cvMain.personal.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{font-family:'Inter',sans-serif;background:white;-webkit-print-color-adjust:exact;print-color-adjust:exact}
@page{size:A4;margin:0}
${document.querySelector("style[data-nscript]")?.textContent || document.querySelectorAll("style")[0]?.textContent || ""}
</style>
</head>
<body style="display:flex;justify-content:center;background:white">
${printContents}
<script>
window.onload = function() {
  setTimeout(function(){ window.print(); }, 500);
};
<\/script>
</body>
</html>`);
    w.document.close();
  };

  return (
    <>
      {/* Toolbar */}
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

      {/* CV */}
      <div id="cv-render">
        <CVTemplate data={cvMain} />
      </div>
    </>
  );
}
