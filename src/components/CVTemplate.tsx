import { CVData } from "@/data/cv";

const icons = {
  location: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  phone: <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  email: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  linkedin: <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  id: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  calendar: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
};

export default function CVTemplate({ data }: { data: CVData }) {
  return (
    <div className="canvas">
      <div className="paper">
        <div className="cv-header">
          <h1 className="cv-name">{data.personal.name}</h1>
          <p className="cv-role">{data.personal.title}</p>
          <div className="cv-contacts">
            <span>{icons.location} {data.personal.address}</span>
            <span>{icons.phone} {data.personal.phone}</span>
            <span>{icons.email} {data.personal.email}</span>
            <span>{icons.linkedin} {data.personal.linkedin}</span>
            <span>{icons.id} CNH {data.personal.cnh} · CREA {data.personal.crea}</span>
            <span>{icons.calendar} {data.personal.availability}</span>
          </div>
        </div>

        <div className="cv-section">
          <h2 className="cv-section-title">Objetivo Profissional</h2>
          <div className="cv-text"><p>{data.objective}</p></div>
        </div>

        <div className="cv-section">
          <h2 className="cv-section-title">Resumo Profissional</h2>
          <div className="cv-text">
            {data.summary.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {data.systems && data.systems.length > 0 && (
            <div className="cv-systems">
              {data.systems.map(s => <span key={s}>{s}</span>)}
            </div>
          )}
        </div>

        <div className="cv-section">
          <h2 className="cv-section-title">Formação</h2>
          <ul className="cv-edu-list">
            {data.education.map((edu, i) => <li key={i}>{edu.degree}</li>)}
          </ul>
        </div>

        {data.digitalTools && data.digitalTools.length > 0 && (
          <div className="cv-section">
            <h2 className="cv-section-title">Soluções Digitais Implementadas</h2>
            <div className="cv-text">
              {data.digitalTools.map((tool, i) => (
                <div key={i} style={{ marginBottom: "8px" }}>
                  <p><strong>{tool.name}</strong> — {tool.description}</p>
                  {tool.url && (
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85em", color: "#4472c4", textDecoration: "none" }}>
                      🔗 Acessar plataforma →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="cv-section">
          <h2 className="cv-section-title">Experiência Profissional</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="cv-exp">
              <div className="cv-exp-head">
                <span className="cv-exp-company">{exp.company}</span>
                <span className="cv-exp-period">{exp.period}</span>
              </div>
              <div className="cv-exp-role">{exp.role}</div>
              <ul className="cv-exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {data.references && data.references.length > 0 && (
          <div className="cv-section">
            <h2 className="cv-section-title">Referências Profissionais</h2>
            <div className="cv-references">
              {data.references.map((ref, i) => (
                <div key={i} className="cv-reference-item">
                  <div className="cv-ref-name">{ref.name}</div>
                  <div className="cv-ref-role">{ref.role}</div>
                  <div className="cv-ref-company">{ref.company}</div>
                  <div className="cv-ref-contact">
                    <span>📱 {ref.phone}</span>
                    {ref.linkedin && <span>🔗 <a href={`https://${ref.linkedin}`} target="_blank" rel="noopener noreferrer">{ref.linkedin}</a></span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
