"use client";

import CVTemplate from "@/components/CVTemplate";
import { cvMain, variations } from "@/data/cv";

export default function Home() {
  const handlePDF = () => {
    const el = document.querySelector(".paper") as HTMLElement;
    if (!el) return;

    const w = window.open("", "_blank", "width=900,height=700");
    if (!w) { alert("Permita pop-ups para baixar o PDF."); return; }

    w.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<title>CV — ${cvMain.personal.name}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
@page{size:A4;margin:10mm}
body{font-family:Calibri,Arial,sans-serif;background:white;display:flex;justify-content:center;-webkit-print-color-adjust:exact;print-color-adjust:exact}
${document.querySelectorAll("style")[0]?.textContent || ""}
.word-canvas{padding:0!important;background:white!important}
.paper{box-shadow:none!important;margin:0!important;max-width:none!important;width:210mm!important;padding:15mm 20mm!important}
.no-print,.word-titlebar,.word-ribbon,.word-statusbar{display:none!important}
</style>
</head>
<body>${el.outerHTML}</body>
<script>window.onload=function(){setTimeout(function(){window.print()},800)}</script>
</html>`);
    w.document.close();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Word Title Bar */}
      <div className="no-print word-titlebar">
        <div className="doc-icon">W</div>
        <span className="doc-name">CV — {cvMain.personal.name}.docx — Word</span>
      </div>

      {/* Word Ribbon */}
      <div className="no-print word-ribbon">
        <div className="ribbon-tabs">
          <div className="ribbon-tab active">Página Inicial</div>
          <div className="ribbon-tab">Inserir</div>
          <div className="ribbon-tab">Layout</div>
          <div className="ribbon-tab">Revisão</div>
          <div className="ribbon-tab">Exibir</div>
        </div>
        <div className="ribbon-actions">
          <div className="ribbon-variations">
            {Object.values(variations).map((v) => (
              <a key={v.slug} href={`/${v.slug}`} className={`ribbon-variation ${v.slug === "main" ? "active" : ""}`}>
                {v.label}
              </a>
            ))}
          </div>

          <div className="ribbon-sep" />

          <button onClick={handlePDF} className="ribbon-btn primary">
            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <span className="btn-label">Salvar como PDF</span>
          </button>

          <button onClick={handlePrint} className="ribbon-btn">
            <svg viewBox="0 0 24 24"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span className="btn-label">Imprimir</span>
          </button>
        </div>
      </div>

      {/* CV Content */}
      <CVTemplate data={cvMain} />

      {/* Word Status Bar */}
      <div className="no-print word-statusbar">
        <span>Página 1 de 1</span>
        <span>{Math.round(5500 / 5)} palavras</span>
      </div>
    </>
  );
}
