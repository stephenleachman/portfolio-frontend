import { About, Education, FeaturedPosts, FeaturedProjects, Hero, Work } from '@/components'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <FeaturedProjects />
      </section>
      <section>
        <FeaturedPosts />
      </section>
    </main>
  )
}
