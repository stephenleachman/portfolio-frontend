import { About, Education, FeaturedPosts, FeaturedProjects, Hero, Work } from '@/components'
import { FaChevronCircleDown  } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {

  return (
    <main className="overflow-hidden">
      <section className="min-h-screen grid content-center px-10 dark:bg-custom-dark-3 relative border-b-4 dark:border-custom-dark-1">
        <div className="bg-gradient-to-r from-custom-Opacity-blue to-custom-Opacity-green absolute h-full w-full z-0 dark:hidden"></div>
        <Link href="#About" >
          <FaChevronCircleDown className="text-custom-dark-1 dark:text-custom-dark-text text-5xl absolute bottom-20 left-[49%] right-[50%]"/>
        </Link>  
       
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
