import { CVData } from "@/data/cv";

function ContactIcon({ type }: { type: "location" | "phone" | "email" | "linkedin" | "license" | "calendar" }) {
  const icons: Record<string, string> = {
    location: "📍",
    phone: "📱",
    email: "✉️",
    linkedin: "🔗",
    license: "🏷️",
    calendar: "📅",
  };
  return <span className="text-blue-700 text-sm">{icons[type]}</span>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-bold text-blue-900 border-b-2 border-blue-700 pb-1 mb-3 mt-6 first:mt-0 uppercase tracking-wide">
      {children}
    </h2>
  );
}

export default function CVTemplate({ data }: { data: CVData }) {
  return (
    <div className="cv-page max-w-[210mm] mx-auto bg-white shadow-xl min-h-[297mm]">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{data.personal.name}</h1>
            <p className="text-blue-200 text-lg mt-1 font-light">{data.personal.title}</p>
          </div>
          <div className="text-right text-sm space-y-1 text-blue-100">
            <div className="flex items-center justify-end gap-2">
              <ContactIcon type="location" />
              <span>{data.personal.address}</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <ContactIcon type="phone" />
              <span>{data.personal.phone}</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <ContactIcon type="email" />
              <span className="break-all">{data.personal.email}</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <ContactIcon type="linkedin" />
              <span>{data.personal.linkedin}</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <ContactIcon type="license" />
              <span>CNH {data.personal.cnh} · CREA {data.personal.crea}</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <ContactIcon type="calendar" />
              <span>{data.personal.availability}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-8 py-6 space-y-0">
        {/* Objective */}
        <section>
          <SectionTitle>Objetivo Profissional</SectionTitle>
          <p className="text-sm leading-relaxed text-gray-700">{data.objective}</p>
        </section>

        {/* Summary */}
        <section>
          <SectionTitle>Resumo Profissional</SectionTitle>
          <div className="space-y-2">
            {data.summary.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-gray-700">{paragraph}</p>
            ))}
          </div>
          {data.systems && data.systems.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {data.systems.map((s) => (
                <span key={s} className="bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200">
                  {s}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Education */}
        <section>
          <SectionTitle>Formação</SectionTitle>
          <ul className="space-y-1.5">
            {data.education.map((edu, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-700 mt-0.5 font-bold">▸</span>
                <span>{edu.degree}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <SectionTitle>Experiência Profissional</SectionTitle>
          <div className="space-y-5">
            {data.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm text-gray-900">{exp.company}</h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{exp.period}</span>
                </div>
                <p className="text-sm text-blue-700 font-medium -mt-0.5">{exp.role}</p>
                <ul className="mt-1.5 space-y-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-start gap-2 leading-snug">
                      <span className="text-gray-400 mt-1 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="px-8 py-3 text-center text-xs text-gray-400 border-t border-gray-100 print:hidden">
        {data.personal.name} — {data.personal.title}
      </footer>
    </div>
  );
}
