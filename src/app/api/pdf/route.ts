import { cvMain } from "@/data/cv";
import PDFDocument from "pdfkit";

export async function GET(): Promise<Response> {
  const data = cvMain;

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 40, bottom: 40, left: 50, right: 50 },
    info: {
      Title: `CV — ${data.personal.name}`,
      Author: data.personal.name,
      Subject: "Currículo Profissional",
    },
  });

  const blue = "#2b5797";
  const accent = "#4472c4";
  const textColor = "#1a1a1a";
  const muted = "#666666";
  const lineColor = "#b4c6e7";

  // ===== HEADER =====
  doc.fontSize(22).font("Helvetica-Bold").fillColor(blue).text(data.personal.name);
  doc.fontSize(12).font("Helvetica").fillColor(muted).text(data.personal.title);
  doc.moveDown(0.3);

  const contactParts = [
    data.personal.address,
    data.personal.phone,
    data.personal.email,
    data.personal.linkedin,
    `CNH ${data.personal.cnh}`,
    `CREA ${data.personal.crea}`,
    data.personal.availability,
  ];
  doc.fontSize(9).fillColor(muted).text(contactParts.join("  •  "));
  doc.moveDown(0.2);

  doc.save();
  doc.moveTo(50, doc.y).lineTo(545, doc.y).lineWidth(1.5).strokeColor(blue).stroke();
  doc.restore();
  doc.moveDown(0.8);

  // ===== OBJECTIVE =====
  doc.fontSize(11).font("Helvetica-Bold").fillColor(blue).text("OBJETIVO PROFISSIONAL", { characterSpacing: 0.5 });
  doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).lineWidth(0.5).strokeColor(lineColor).stroke();
  doc.moveDown(0.4);
  doc.fontSize(10).font("Helvetica").fillColor(textColor).text(data.objective, { align: "justify", lineGap: 2 });
  doc.moveDown(0.6);

  // ===== SUMMARY =====
  doc.fontSize(11).font("Helvetica-Bold").fillColor(blue).text("RESUMO PROFISSIONAL", { characterSpacing: 0.5 });
  doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).lineWidth(0.5).strokeColor(lineColor).stroke();
  doc.moveDown(0.4);
  data.summary.forEach((p) => {
    doc.fontSize(10).font("Helvetica").fillColor(textColor).text(p, { align: "justify", lineGap: 2 });
    doc.moveDown(0.3);
  });

  if (data.systems && data.systems.length > 0) {
    doc.moveDown(0.2);
    doc.fontSize(9).fillColor(accent).text(`Sistemas: ${data.systems.join("  |  ")}`);
  }
  doc.moveDown(0.6);

  // ===== EDUCATION =====
  doc.fontSize(11).font("Helvetica-Bold").fillColor(blue).text("FORMAÇÃO", { characterSpacing: 0.5 });
  doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).lineWidth(0.5).strokeColor(lineColor).stroke();
  doc.moveDown(0.4);
  data.education.forEach((edu) => {
    doc.fontSize(10).font("Helvetica").fillColor(textColor).text(`▪  ${edu.degree}`);
    doc.moveDown(0.15);
  });
  doc.moveDown(0.5);

  // ===== EXPERIENCE =====
  doc.fontSize(11).font("Helvetica-Bold").fillColor(blue).text("EXPERIÊNCIA PROFISSIONAL", { characterSpacing: 0.5 });
  doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).lineWidth(0.5).strokeColor(lineColor).stroke();
  doc.moveDown(0.5);

  data.experience.forEach((exp) => {
    const y = doc.y;
    doc.fontSize(11).font("Helvetica-Bold").fillColor(textColor).text(exp.company, 50, y);
    doc.fontSize(9).font("Helvetica").fillColor(muted).text(exp.period, 450, y);
    doc.fontSize(10).font("Helvetica-Oblique").fillColor(accent).text(exp.role);
    doc.moveDown(0.2);

    exp.bullets.forEach((b) => {
      doc.fontSize(10).font("Helvetica").fillColor(textColor).text(`•  ${b}`, 60, undefined, { lineGap: 1.5 });
    });
    doc.moveDown(0.5);
  });

  doc.end();

  const buffer = await new Promise<Buffer>((resolve) => {
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
  });

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="CV_${data.personal.name.replace(/\s+/g, "_")}.pdf"`,
    },
  });
}
