import React from "react";
import { motion } from "motion/react";
import { Code2 } from "lucide-react";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
};

const projects: Project[] = [
  {
    name: "C++ Compiler",
    description:
      "Built a compiler pipeline in C++ that parses source code and generates intermediate representations using recursive descent parsing and AST construction.",
    tech: ["C++", "Parsing", "Compiler Design"],
    github: "https://github.com/Mxxhxr/Parser_Project"
  },
  {
    name: "NJIT Schedule Generator",
    description:
      "Full-stack web application that generates optimized class schedules using real NJIT course data. Supports multi-day sections and semester-based schedule parsing.",
    tech: ["React", "Node.js", "MySQL", "Express"],
    github: "https://github.com/orgs/NJIT-Schedule-Suggestor/repositories"
  }
];

const cardBase =
  "rounded-2xl border border-neutral-700/70 bg-neutral-950/40 " +
  "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.6)]";

const Projects: React.FC = () => {
  return (
    <section className="w-full bg-black text-neutral-100 px-4 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`${cardBase} p-8 md:p-10`}>
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                My Projects
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-2 text-neutral-300">
              <Code2 className="h-5 w-5" />
              <span className="text-sm">Projects</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-600 transition"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {project.name}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition"
                  >
                    <Code2 size={18} />
                  </a>
                </div>

                <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-2 py-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;