export function About() {
  return (
    <section className="section" id="about">
      <div className="about" data-reveal>
        <div className="about__text">
          <p className="eyebrow">About</p>
          <h2>A solo studio with full-company discipline.</h2>
          <p>
            Astral Hive pairs the focus of a single dedicated developer with the
            reliability you'd expect from a larger team. Every project gets personal
            attention — from first sketch to production and the updates that follow.
          </p>
          <p>
            The approach is simple: ship high-quality, dependable software, communicate
            directly, and stay accountable for the result.
          </p>
        </div>
        <ul className="about__principles">
          <li>
            <strong>Direct communication</strong>
            <span>No layers. You talk to the person writing the code.</span>
          </li>
          <li>
            <strong>Agile by default</strong>
            <span>Small iterations, frequent demos, fast course-correction.</span>
          </li>
          <li>
            <strong>Owned end to end</strong>
            <span>Design, build, deploy, and maintain — one point of responsibility.</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
