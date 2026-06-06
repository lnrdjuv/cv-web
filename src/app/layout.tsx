import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV — Leonardo Silva Juvencio",
  description: "Currículo profissional de Leonardo Silva Juvencio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
