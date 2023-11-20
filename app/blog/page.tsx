import { Blog, BlogHero } from "@/components";

export default function blog() {
  return (
    <main className="overflow-hidden">
      <section>
        <BlogHero />
      </section>
      <section>
        <Blog />
      </section>
    </main>
  )
}
