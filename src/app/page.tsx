"use client";

import CVTemplate from "@/components/CVTemplate";
import { cvMain, variations } from "@/data/cv";

export default function Home() {
  const handlePrint = () => {
    const el = document.getElementById("cv-print-area");
    if (!el) return;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<title>CV - ${cvMain.personal.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:white;font-family:'Inter',sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact;width:210mm}
${document.querySelector("style")?.textContent || ""}
@page{size:A4;margin:0}
</style>
</head>
<body>${el.outerHTML}</body>
</html>`);
    win.document.close();
    win.onload = () => {
      win.print();
    };
  };

  return (
    <>
      {/* Toolbar */}
      <div className="no-print screen-wrapper">
        <div className="toolbar">
          <div className="toolbar-variations">
            {Object.values(variations).map((v) => (
              <a
                key={v.slug}
                href={`/${v.slug}`}
                className={`toolbar-btn ${v.slug === "main" ? "active" : ""}`}
              >
                {v.label}
              </a>
            ))}
          </div>
          <button onClick={handlePrint} className="toolbar-btn toolbar-btn-print">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Baixar PDF
          </button>
        </div>
      </div>

      {/* CV Page */}
      <div className="screen-wrapper" style={{ paddingTop: 0 }}>
        <div id="cv-print-area">
          <CVTemplate data={cvMain} />
        </div>
      </div>
    </>
  );
}
