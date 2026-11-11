import { profile, education, about, skills } from "./data.js";

export function Home() {
  return (
    <section className="hero">
      <div>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <p className="lead">{profile.intro}</p>
        <p className="lead">{profile.context}</p>
      </div>
      {profile.photo && <img src={profile.photo} alt={`Portrait of ${profile.name}`} />}
    </section>
  );
}

export function Education() {
  return (
    <section className="page">
      <h1>Educational Background</h1>
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.school + e.years}>
            <h3>{e.school}</h3>
            <p className="meta">{e.program} · {e.years}</p>
            <p>{e.details}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function About() {
  return (
    <section className="page">
      <h1>About Me</h1>
      <div className="about">
        <div>{about.paragraphs.map((p) => (
          <div key={p.statement}>
            <p>{p.statement}</p>
            {p.image && <img src={p.image} alt="About me" />}
          </div>
        ))}</div>
        <dl>
          {about.facts.map((f) => (
            <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="page">
      <h1>Skills</h1>
      <div className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <h3>{s.group}</h3>
            <ul>{s.items.map((i) => 
              <li key={i}>{i}</li>)}
            </ul>
            <div className="skills-description">
              <p>{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
