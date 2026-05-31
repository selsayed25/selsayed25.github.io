"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/projects";

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      layout
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="rounded-xl border border-border/50 p-5 transition-all hover:border-accent-400/30 hover:bg-accent-400/[0.02]">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-surface-700 dark:text-surface-200 transition-colors group-hover:text-accent-400">
                {project.title}
              </h3>
              {project.featured && (
                <span className="rounded-full bg-accent-400/10 px-2 py-0.5 text-[10px] font-medium text-accent-400">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-1.5 text-sm text-surface-500 dark:text-surface-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-surface-200 dark:bg-surface-800 px-2 py-0.5 text-xs text-surface-500 dark:text-surface-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="shrink-0 text-sm text-surface-400 dark:text-surface-500">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", bounce: 0.2 }}
        className="relative max-w-lg rounded-2xl border border-border/50 bg-background p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-surface-400 dark:text-surface-500 transition-colors hover:bg-surface-200 dark:hover:bg-surface-800 hover:text-surface-700 dark:hover:text-surface-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>

        <div className="pr-8">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-foreground">{project.title}</h2>
            {project.featured && (
              <span className="rounded-full bg-accent-400/10 px-2 py-0.5 text-[10px] font-medium text-accent-400">
                Featured
              </span>
            )}
          </div>
          <p className="mt-3 text-sm text-surface-600 dark:text-surface-300 leading-relaxed">
            {project.longDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-surface-200 dark:bg-surface-800 px-2.5 py-0.5 text-xs text-surface-500 dark:text-surface-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent-400/10 px-4 py-2 text-sm font-medium text-accent-400 transition-all hover:bg-accent-400/20"
              >
                {link.label} &rarr;
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
  const filtered = filter
    ? projects.filter((p) => p.tags.includes(filter))
    : projects;

  return (
    <div className="animate-fade-in">
      <section className="py-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Projects</h1>
        <p className="mt-2 text-surface-500 dark:text-surface-400">
          Things I&apos;ve built. Click a project to learn more.
        </p>
      </section>

      <section className="py-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter(null)}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all ${
              !filter
                ? "bg-accent-400/20 text-accent-300 ring-1 ring-accent-400/40"
                : "bg-surface-200 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-surface-300 dark:hover:bg-surface-700 hover:text-surface-700 dark:hover:text-surface-200"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag === filter ? null : tag)}
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all ${
                filter === tag
                  ? "bg-accent-400/20 text-accent-300 ring-1 ring-accent-400/40"
                  : "bg-surface-200 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-surface-300 dark:hover:bg-surface-700 hover:text-surface-700 dark:hover:text-surface-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
