import type { Metadata } from "next";
import { Fragment } from "react";
import { resume } from "@/content/resume";

export const metadata: Metadata = { title: "Resume" };

// Renders **bold** spans from the resume text.
function Rich({ text }: { text: string }) {
  return <>{text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>))}</>;
}

export default function Resume() {
  const r = resume;
  return (
    <section className="wrap hero resume" data-orb="The two-page version of Ben's career.">
      <div className="eyebrow">Resume</div>
      <h1 className="display" style={{ fontSize: "clamp(40px,5vw,60px)" }}>Benjamin Sackey</h1>
      <div className="read resume-body">
        <p><strong>{r.title}</strong></p>
        <p>
          {r.location} · {r.availability} · {r.email}
          {r.links.map((l) => <Fragment key={l.href}> · <a href={l.href}>{l.label}</a></Fragment>)}
        </p>

        <h2>Summary</h2>
        <p>{r.summary}</p>

        <h2>Experience</h2>
        {r.experience.map((role) => (
          <Fragment key={role.heading}>
            <h3>{role.heading}</h3>
            {role.meta && <p><em>{role.meta}</em></p>}
            <ul>{role.bullets.map((b, i) => <li key={i}><Rich text={b} /></li>)}</ul>
          </Fragment>
        ))}

        <h2>Skills</h2>
        {r.skills.map((s) => <p key={s.label}><strong>{s.label}:</strong> {s.text}</p>)}

        <h2>Talks</h2>
        <ul>
          {r.talks.map((t) => (
            <li key={t.href}>
              <a href={t.href} target="_blank" rel="noreferrer"><em>{t.show}</em> {t.kind}</a> — {t.topic} ({t.date})
            </li>
          ))}
        </ul>

        <h2>Education</h2>
        <p><strong>{r.education.school}</strong> — {r.education.detail}</p>
      </div>
    </section>
  );
}
