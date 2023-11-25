'use client'
import { About, Education, FeaturedPosts, FeaturedProjects, Hero, Work } from '@/components'
import { FaChevronCircleDown  } from "react-icons/fa";
import Link from 'next/link';
import { ThemeProvider } from 'next-themes';

export default function Home() {

  return (
    <ThemeProvider enableColorScheme={true} attribute="class">
      <main className="overflow-hidden">
        <section id="#" className="tall:h-screen grid content-center px-10  dark:bg-custom-dark-3 relative border-b-4 border-white dark:border-custom-dark-1">
          <Hero />
        </section>
        <section id="about" className="h-[1500px]">
          <About />
        </section>
        <section id="education" className="h-[1500px]">
          <Education />
        </section>
        <section id="work" className="h-[1500px]">
          <Work />
        </section>
        <section id="projects" className="h-[1500px]">
          <FeaturedProjects />
        </section>
        <section id="blog" className="h-[1500px]">
          <FeaturedPosts />
        </section>
      </main>
    </ThemeProvider>
  )
}
