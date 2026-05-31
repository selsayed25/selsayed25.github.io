import Link from "next/link";
import { title } from "process";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="relative shrink-0">
            <div className="size-24 overflow-hidden rounded-full border-2 border-accent-400/30 sm:size-32">
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-accent-400/20 to-accent-600/20 text-3xl font-bold text-accent-400 sm:text-4xl">
                SE
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sami Elsayed
            </h1>
            <p className="mt-2 text-lg text-surface-500 dark:text-surface-400">
              Student, engineer, &amp; policy debater
            </p>
            <div className="mt-3 flex items-center gap-4 text-sm text-surface-400 dark:text-surface-500">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400" />
                Building in the open
              </span>
              <a href="https://www.instagram.com/elsayedcodes" className="transition-colors hover:text-accent-400" target="_blank" rel="noopener noreferrer">
                @elsayedcodes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-surface-500 dark:text-surface-400">
          About
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-surface-600 dark:text-surface-300">
          <p>
            I build things. Sometimes they work. I&apos;m particularly interested
            in the intersection of computer science, mathematics, and
            computer engineering to learn and do useful things.
          </p>
          <p>
            Currently exploring distributed systems, compilers, and the
            never-ending quest for the perfect terminal setup. I believe in
            simple, well-crafted software that respects the user&apos;s time and
            attention.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me doing policy debate, reading books about physics and astronomy, or diving into computer
            history.
          </p>
        </div>
      </section>

      <section className="py-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-surface-500 dark:text-surface-400">
          Now
        </h2>
        <ul className="space-y-3">
          {[
            "Working on Codect projects - Stay tuned for more posts!",
            "Flowing varsity policy debate rounds.",
            "Learning more about Moravec's Paradox",
            "Refining my dotfiles",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-surface-600 dark:text-surface-300">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-400/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-surface-500 dark:text-surface-400">
          Featured Writing
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "First Semester of Debating—Here's my thoughts",
              desc: "First semester reflections on competitive policy debate.",
              date: "Dec 2025",
              slug: "/blog/first-semester-debate",
            },
            {
              title: "\"We are winning on the case flow\", reflections on my first year of competitive policy debate",
              desc: "Second semester reflections on competitive policy debate.",
              date: "May 2026",
              slug: "/blog/first-year-debate",
            },
          ].map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="group block rounded-xl border border-border/50 p-4 transition-all hover:border-accent-400/30 hover:bg-accent-400/[0.02]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-surface-700 dark:text-surface-200 transition-colors group-hover:text-accent-400">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">{post.desc}</p>
                </div>
                <span className="shrink-0 text-sm text-surface-400 dark:text-surface-500">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
          >
            View all posts &rarr;
          </Link>
        </div>
      </section>

      <section className="py-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-surface-500 dark:text-surface-400">
          Contact
        </h2>
        <p className="text-surface-600 dark:text-surface-300">
          Feel free to reach out on{" "}
          <a href="https://x.com/elsayedcodes" className="text-accent-400 transition-colors hover:text-accent-300" target="_blank" rel="noopener noreferrer">
            𝕏
          </a>
          ,{" "}
          <a href="https://github.com/selsayed25" className="text-accent-400 transition-colors hover:text-accent-300" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          , or via{" "}
          <a href="mailto:elsayedcyber@gmail.com" className="text-accent-400 transition-colors hover:text-accent-300">
            email
          </a>
          .
        </p>
      </section>
    </div>
  );
}
