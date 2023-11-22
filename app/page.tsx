import { About, Education, FeaturedPosts, FeaturedProjects, Hero, Work } from '@/components'


export default function Home() {
  return (
    <main className="overflow-hidden h-[20000px] bg-custom-gray-1 dark:bg-custom-dark-3">
      <section >
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
