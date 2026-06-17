import CVTemplate from "@/components/CVTemplate";
import { cvItinera } from "@/data/cv";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `CV ITINERA — ${cvItinera.personal.name}`,
};

export default function ItineraPage() {
  return (
    <main className="py-8 print:p-0 print:bg-white">
      <div className="max-w-[210mm] mx-auto mb-4 px-4 print:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-700 transition-colors"
        >
          ← Voltar ao início
        </a>
      </div>
      <CVTemplate data={cvItinera} />
    </main>
  );
}
