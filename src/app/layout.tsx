import { Metadata } from "next";
import { cvMain } from "@/data/cv";

export const metadata: Metadata = {
  title: `${cvMain.personal.name} — Currículo`,
  description: `Currículo profissional de ${cvMain.personal.name}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
