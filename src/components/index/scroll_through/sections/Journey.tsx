import { Timeline } from "@/components/index/scroll_through/sections/Timeline";

export function Journey() {
  return (
    <section id="journey" className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">My Journey</h2>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          From systems administration to data engineering, my path has been driven
          by a passion for solving complex problems. Starting with after school teaching at Makerstate,
          to Computer Systems Administration at CNR Agency, I developed a strong foundation in
          infrastructure and security. This led me to explore software development,
          eventually specializing in data engineering at Phrontistery.
        </p>
      </div>
      <Timeline />
    </section>
  )
} 