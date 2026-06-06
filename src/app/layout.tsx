import { Metadata } from "next";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
