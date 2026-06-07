import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import { CVDocument } from "@/components/CVDocument";
import { cvMain } from "@/data/cv";

export async function GET(): Promise<Response> {
  try {
    const stream = await renderToStream(<CVDocument data={cvMain} />);
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
        "Content-Disposition": `inline; filename="CV_Leonardo_Silva_Juvencio.pdf"`,
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
