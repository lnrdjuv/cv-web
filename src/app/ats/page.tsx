import CVTemplate from "@/components/CVTemplate";
import { cvATS } from "@/data/cv";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `CV ATS — ${cvATS.personal.name}`,
};

export default function ATSPage() {
  return (
    <main className="canvas" style={{ paddingTop: 0 }}>
      <CVTemplate data={cvATS} />
    </main>
  );
}
