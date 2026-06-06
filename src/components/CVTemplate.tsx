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
    <div className="page-wrap">
      <div className="paper">
        {/* Header / Sidebar */}
        <header className="cv-header">
          <h1 className="cv-name">{data.personal.name}</h1>
          <p className="cv-role">{data.personal.title}</p>

          <div className="contact-grid">
            <div className="contact-item">{icons.location}<span>{data.personal.address}</span></div>
            <div className="contact-item">{icons.phone}<span>{data.personal.phone}</span></div>
            <div className="contact-item">{icons.email}<span>{data.personal.email}</span></div>
            <div className="contact-item">{icons.linkedin}<span>{data.personal.linkedin}</span></div>
            <div className="contact-item">{icons.license}<span>CNH {data.personal.cnh} · CREA {data.personal.crea}</span></div>
            <div className="contact-item">{icons.calendar}<span>{data.personal.availability}</span></div>
          </div>

          {/* Education — in sidebar on desktop, inside body on mobile */}
          <div className="cv-section" style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            <h2 className="cv-section-title">Formação</h2>
            <div className="cv-edu-list">
              {data.education.map((edu, i) => (
                <div key={i} className="cv-edu-item" style={{ color: 'rgba(255,255,255,0.85)', borderLeftColor: 'rgba(255,255,255,0.3)' }}>
                  {edu.degree}
                </div>
              ))}
            </div>
          </div>

          {/* Systems */}
          {data.systems && data.systems.length > 0 && (
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
              <h2 className="cv-section-title">Sistemas</h2>
              <div className="cv-tags">
                {data.systems.map((s) => (
                  <span key={s} className="cv-tag" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="cv-body">
          <section className="cv-section">
            <h2 className="cv-section-title">Objetivo Profissional</h2>
            <div className="cv-summary">
              <p>{data.objective}</p>
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Resumo Profissional</h2>
            <div className="cv-summary">
              {data.summary.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2 className="cv-section-title">Experiência Profissional</h2>
            {data.experience.map((exp, i) => (
              <div key={i} className="cv-exp">
                <div className="cv-exp-top">
                  <span className="cv-exp-company">{exp.company}</span>
                  <span className="cv-exp-period">{exp.period}</span>
                </div>
                <div className="cv-exp-role">{exp.role}</div>
                <ul className="cv-exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
