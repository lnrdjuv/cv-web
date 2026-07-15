import { cvMain } from "@/data/cv";
import type { CVData } from "@/data/cv";
import React from "react";
import { Document, Page, Text, View, StyleSheet, Font, Svg, Circle, Path, Rect, Line, Polyline, Link } from "@react-pdf/renderer";

Font.register({
  family: "Helvetica",
  fonts: [
    { src: "Helvetica" },
    { src: "Helvetica-Bold", fontWeight: "bold" },
    { src: "Helvetica-Oblique", fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: "40 50",
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  header: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: "2px solid #2b5797",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#2b5797",
    marginBottom: 2,
  },
  role: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  contacts: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 3,
  },
  contactIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  contactText: {
    fontSize: 8.5,
    color: "#666",
  },
  contactLink: {
    fontSize: 8.5,
    color: "#4472c4",
    textDecoration: "none",
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#2b5797",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottom: "0.5px solid #b4c6e7",
  },
  paragraph: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: "#333",
    textAlign: "justify",
    marginBottom: 5,
  },
  systemsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
  },
  systemTag: {
    fontSize: 8.5,
    color: "#4472c4",
    backgroundColor: "#eef3fc",
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  digitalToolItem: {
    marginBottom: 4,
    paddingLeft: 8,
  },
  digitalToolName: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: "#2b5797",
  },
  digitalToolDesc: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.4,
  },
  digitalToolLink: {
    fontSize: 8,
    color: "#4472c4",
    fontStyle: "italic",
    marginTop: 1,
  },
  eduItem: {
    fontSize: 9.5,
    color: "#333",
    marginBottom: 2,
    paddingLeft: 10,
  },
  exp: {
    marginBottom: 10,
  },
  expHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  expCompany: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
  },
  expPeriod: {
    fontSize: 8.5,
    color: "#999",
  },
  expRole: {
    fontSize: 10,
    fontFamily: "Helvetica-Oblique",
    color: "#4472c4",
    marginTop: 1,
    marginBottom: 3,
  },
  bullet: {
    fontSize: 9.5,
    lineHeight: 1.45,
    color: "#333",
    paddingLeft: 8,
    marginBottom: 1.5,
  },
  refItem: {
    marginBottom: 8,
    paddingLeft: 10,
    borderLeft: "3px solid #b4c6e7",
    paddingBottom: 4,
  },
  refName: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: "#2b5797",
  },
  refRole: {
    fontSize: 9.5,
    color: "#333",
    marginTop: 1,
  },
  refCompany: {
    fontSize: 9,
    color: "#777",
    fontStyle: "italic",
    marginTop: 0.5,
  },
  refContact: {
    fontSize: 9,
    color: "#4472c4",
    marginTop: 3,
  },
});

function ContactIcon({ type }: { type: "location" | "phone" | "email" | "linkedin" | "id" | "calendar" }) {
  const s = 10;
  const stroke = "#4472c4";
  const sw = 1.2;

  switch (type) {
    case "location":
      return (
        <Svg width={s} height={s} viewBox="0 0 24 24" style={styles.contactIcon}>
          <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" fill="none" stroke={stroke} strokeWidth={sw} />
          <Circle cx="12" cy="10" r="3" fill="none" stroke={stroke} strokeWidth={sw} />
        </Svg>
      );
    case "phone":
      return (
        <Svg width={s} height={s} viewBox="0 0 24 24" style={styles.contactIcon}>
          <Path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" fill="none" stroke={stroke} strokeWidth={sw} />
        </Svg>
      );
    case "email":
      return (
        <Svg width={s} height={s} viewBox="0 0 24 24" style={styles.contactIcon}>
          <Rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke={stroke} strokeWidth={sw} />
          <Polyline points="22,6 12,13 2,6" fill="none" stroke={stroke} strokeWidth={sw} />
        </Svg>
      );
    case "linkedin":
      return (
        <Svg width={s} height={s} viewBox="0 0 24 24" style={styles.contactIcon}>
          <Rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke={stroke} strokeWidth={sw} />
          <Line x1="8" y1="11" x2="8" y2="16" stroke={stroke} strokeWidth={sw} />
          <Rect x="6" y="6" width="4" height="3" rx="0.5" fill={stroke} />
          <Path d="M12 16v-5c0-1 1-2 2.5-2s2.5 1 2.5 2v5" fill="none" stroke={stroke} strokeWidth={sw} />
        </Svg>
      );
    case "id":
      return (
        <Svg width={s} height={s} viewBox="0 0 24 24" style={styles.contactIcon}>
          <Rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke={stroke} strokeWidth={sw} />
          <Line x1="8" y1="21" x2="16" y2="21" stroke={stroke} strokeWidth={sw} />
          <Line x1="12" y1="19" x2="12" y2="21" stroke={stroke} strokeWidth={sw} />
        </Svg>
      );
    case "calendar":
      return (
        <Svg width={s} height={s} viewBox="0 0 24 24" style={styles.contactIcon}>
          <Rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke={stroke} strokeWidth={sw} />
          <Line x1="16" y1="2" x2="16" y2="6" stroke={stroke} strokeWidth={sw} />
          <Line x1="8" y1="2" x2="8" y2="6" stroke={stroke} strokeWidth={sw} />
          <Line x1="3" y1="10" x2="21" y2="10" stroke={stroke} strokeWidth={sw} />
        </Svg>
      );
  }
}

function CVDocument({ data }: { data: CVData }) {
  return (
    <Document
      title={`CV — ${data.personal.name}`}
      author={data.personal.name}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personal.name}</Text>
          <Text style={styles.role}>{data.personal.title}</Text>
          <View style={styles.contacts}>
            <View style={styles.contactItem}>
              <ContactIcon type="location" />
              <Text style={styles.contactText}>{data.personal.address}</Text>
            </View>
            <View style={styles.contactItem}>
              <ContactIcon type="phone" />
              <Link href={`https://wa.me/556385162431`} style={styles.contactLink}>{data.personal.phone}</Link>
            </View>
            <View style={styles.contactItem}>
              <ContactIcon type="email" />
              <Text style={styles.contactText}>{data.personal.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <ContactIcon type="linkedin" />
              <Link href={`https://${data.personal.linkedin}`} style={styles.contactLink}>{data.personal.linkedin}</Link>
            </View>
            <View style={styles.contactItem}>
              <ContactIcon type="id" />
              <Text style={styles.contactText}>CNH {data.personal.cnh} · CREA {data.personal.crea}</Text>
            </View>
            <View style={styles.contactItem}>
              <ContactIcon type="calendar" />
              <Text style={styles.contactText}>{data.personal.availability}</Text>
            </View>
          </View>
        </View>

        {/* Objective */}
        {data.objective && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Objetivo Profissional</Text>
            <Text style={styles.paragraph}>{data.objective}</Text>
          </View>
        )}

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumo Profissional</Text>
          {data.summary.map((p, i) => (
            <Text key={i} style={styles.paragraph}>{p}</Text>
          ))}
          {data.systems && (
            <View style={styles.systemsRow}>
              {data.systems.map((s) => (
                <Text key={s} style={styles.systemTag}>{s}</Text>
              ))}
            </View>
          )}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação</Text>
          {data.education.map((edu, i) => (
            <Text key={i} style={styles.eduItem}>▪  {edu.degree}</Text>
          ))}
        </View>

        {/* Digital Tools */}
        {data.digitalTools && data.digitalTools.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Soluções Digitais Implementadas</Text>
            {data.digitalTools.map((tool, i) => (
              <View key={i} style={styles.digitalToolItem}>
                <Text style={styles.digitalToolDesc}>
                  <Text style={styles.digitalToolName}>{tool.name}</Text>
                  {" — " + tool.description}
                </Text>
                {tool.url && (
                  <Link href={tool.url} style={styles.digitalToolLink}>
                    {"Acessar plataforma >"}
                  </Link>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          {data.experience.map((exp, i) => (
            <View key={i} style={styles.exp}>
              <View style={styles.expHead}>
                <Text style={styles.expCompany}>{exp.company}</Text>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.expRole}>{exp.role}</Text>
              {exp.bullets.map((b, j) => (
                <Text key={j} style={styles.bullet}>•  {b}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* References */}
        {data.references && data.references.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Referências Profissionais</Text>
            {data.references.map((ref, i) => (
              <View key={i} style={styles.refItem}>
                <Text style={styles.refName}>{ref.name}</Text>
                <Text style={styles.refRole}>{ref.role}</Text>
                <Text style={styles.refCompany}>{ref.company}</Text>
                <Link href={`https://wa.me/55${ref.phone.replace(/\D/g, "")}`} style={styles.refContact}>
                  {"Telefone: " + ref.phone}
                </Link>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}

export { CVDocument };
