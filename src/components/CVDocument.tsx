import { cvMain } from "@/data/cv";
import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

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
    marginBottom: 6,
  },
  contacts: {
    fontSize: 8.5,
    color: "#666",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  contactItem: {
    marginRight: 8,
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
    gap: 8,
    marginTop: 4,
  },
  systemTag: {
    fontSize: 8.5,
    color: "#4472c4",
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
});

function CVDocument({ data }: { data: typeof cvMain }) {
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
            <Text style={styles.contactItem}>{data.personal.address}</Text>
            <Text style={styles.contactItem}>{data.personal.phone}</Text>
            <Text style={styles.contactItem}>{data.personal.email}</Text>
            <Text style={styles.contactItem}>{data.personal.linkedin}</Text>
            <Text style={styles.contactItem}>CNH {data.personal.cnh} · CREA {data.personal.crea}</Text>
            <Text style={styles.contactItem}>{data.personal.availability}</Text>
          </View>
        </View>

        {/* Objective */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivo Profissional</Text>
          <Text style={styles.paragraph}>{data.objective}</Text>
        </View>

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
      </Page>
    </Document>
  );
}

export { CVDocument };
