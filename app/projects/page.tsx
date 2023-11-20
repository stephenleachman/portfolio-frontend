import { Projects, ProjectsHero } from "@/components";


export default function projects() {
  return (
    <main className="overflow-hidden">
      <section>
        <ProjectsHero />
      </section>
      <section>
        <Projects />
      </section>
    </main>
  
  )
}
