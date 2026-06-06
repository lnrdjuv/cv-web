import { CVData } from "@/data/cv";

const icons = {
  location: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  phone: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  email: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  linkedin: <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  license: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  calendar: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
};

export default function CVTemplate({ data }: { data: CVData }) {
  return (
    <div className="paper-wrap">
      <div className="paper">
        {/* ===== SIDEBAR ===== */}
        <aside className="sidebar">
          <div className="sb-section">
            <div className="sb-title">Contato</div>
            <div className="sb-contact">{icons.location}<span>{data.personal.address}</span></div>
            <div className="sb-contact">{icons.phone}<span>{data.personal.phone}</span></div>
            <div className="sb-contact">{icons.email}<span>{data.personal.email}</span></div>
            <div className="sb-contact">{icons.linkedin}<span>{data.personal.linkedin}</span></div>
            <div className="sb-contact">{icons.license}<span>CNH {data.personal.cnh} · CREA {data.personal.crea}</span></div>
            <div className="sb-contact">{icons.calendar}<span>{data.personal.availability}</span></div>
          </div>

          <div className="sb-section">
            <div className="sb-title">Formação</div>
            {data.education.map((edu, i) => (
              <div key={i} className="sb-edu">{edu.degree}</div>
            ))}
          </div>

          {data.systems && data.systems.length > 0 && (
            <div className="sb-section">
              <div className="sb-title">Sistemas</div>
              <div>
                {data.systems.map((s) => (
                  <span key={s} className="sb-skill">{s}</span>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* ===== MAIN ===== */}
        <main className="main">
          <h1 className="main-name">{data.personal.name}</h1>
          <p className="main-role">{data.personal.title}</p>
          <div className="main-divider" />

          <div className="section">
            <h2 className="section-title">Objetivo Profissional</h2>
            <p className="summary-p">{data.objective}</p>
          </div>

          <div className="section">
            <h2 className="section-title">Resumo Profissional</h2>
            {data.summary.map((p, i) => (
              <p key={i} className="summary-p">{p}</p>
            ))}
          </div>

          <div className="section">
            <h2 className="section-title">Experiência Profissional</h2>
            {data.experience.map((exp, i) => (
              <div key={i} className="exp">
                <div className="exp-head">
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <div className="exp-role">{exp.role}</div>
                {exp.bullets.map((b, j) => (
                  <div key={j} className="exp-bullet">{b}</div>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
