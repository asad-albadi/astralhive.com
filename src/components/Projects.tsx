import { projects } from '../data'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <SectionHeading
          number="02"
          label="From the studio"
          title={
            <>
              Small details.
              <br />
              Real-world impact.
            </>
          }
        >
          A growing collection of products, open-source tools, and ideas in
          development. Designed, built, and cared for end to end.
        </SectionHeading>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              featured={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
