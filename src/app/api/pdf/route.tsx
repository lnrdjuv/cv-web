import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { CVDocument } from "@/components/CVDocument";
import { cvMain } from "@/data/cv";
import { cvATS } from "@/data/cv";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const variant = url.searchParams.get("v") || "main";
  const data = variant === "ats" ? cvATS : cvMain;

  try {
    const stream = await renderToStream(<CVDocument data={data} />);
    const chunks: Uint8Array[] = [];

    for await (const chunk of stream as AsyncIterable<Buffer>) {
      chunks.push(new Uint8Array(chunk));
    }

    const totalLength = chunks.reduce((sum, c) => sum + c.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      result.set(chunk, offset);
      offset += chunk.length;
    }

    return new Response(result, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="CV_${data.personal.name.replace(/\s+/g, "_")}_${variant}.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Erro ao gerar PDF" },
      { status: 500 }
    );
  }
}
