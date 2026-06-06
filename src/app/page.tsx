"use client";

import CVTemplate from "@/components/CVTemplate";
import { cvMain, variations } from "@/data/cv";

export default function Home() {
  return (
    <main className="py-8 print:p-0 print:bg-white">
      {/* Print button — hidden when printing */}
      <div className="max-w-[210mm] mx-auto mb-4 px-4 print:hidden">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {Object.values(variations).map((v) => (
              <a
                key={v.slug}
                href={`/${v.slug}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  v.slug === "main"
                    ? "bg-blue-900 text-white"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-blue-500 hover:text-blue-700"
                }`}
              >
                {v.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Imprimir / Salvar PDF
          </button>
        </div>
      </div>

      <CVTemplate data={cvMain} />
    </main>
  );
}
