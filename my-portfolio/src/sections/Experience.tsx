import React from "react";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: (
      <a href="https://www.cambridgeassociates.com/" target="_blank" rel="noopener noreferrer">
        Cambridge Associates
      </a>
    ),
    role: "Full Stack Software Engineer Intern & Co-op",
    location: "Remote / Boston, MA",
    period: "Jun 2024 – Dec 2024",
    highlights: [
      "Built Spring Boot APIs and React features for a production portal serving 1,300+ global clients.",
      "Shipped 10 production features and resolved 25+ issues using log analysis and root-cause debugging.",
      "Improved frontend data flow and reliability, increasing engagement by ~20% across key workflows.",
      "Supported AWS EC2/S3 migration efforts with focus on stability and release readiness."
    ]
  },
  {
    company: (
      <a href="https://www.medtronic.com/en-us/index.html" target="_blank" rel="noopener noreferrer">
        Medtronic
      </a>
    ),
    role: "Backend Engineer Intern",
    location: "North Haven, CT",
    period: "May 2023 – Aug 2023",
    highlights: [
      "Automated recurring database updates with Python + SQLAlchemy, cutting runtime from ~20 minutes to seconds.",
      "Optimized batch processing and SQL workflows, generating ~$65K in annual cost savings.",
      "Improved query performance by ~20% via SQL profiling and ORM-level tuning.",
      "Reduced data inconsistencies by ~10% through validation and error-handling in regulated systems."
    ]
  }
];


const cardBase =
  "rounded-2xl border border-neutral-700/70 bg-neutral-950/40 " +
  "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.6)]";

const Experience: React.FC = () => {
  return (
    <section className="w-full bg-black text-neutral-100 px-4 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`${cardBase} p-8 md:p-10`}>
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                My Experience
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-2 text-neutral-300">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm">Experience</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-10 relative">
            {/* vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-800/80" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <motion.article
                  key={`${exp.company}-${idx}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative pl-10"
                >
                  {/* dot */}
                  <div className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-neutral-300 shadow-[0_0_0_4px_rgba(24,24,27,1)]" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                        {exp.company}
                      </h3>
                      <p className="mt-1 text-sm md:text-base text-neutral-300">
                        {exp.role}
                        {exp.location ? (
                          <span className="text-neutral-400"> • {exp.location}</span>
                        ) : null}
                      </p>
                    </div>

                    <div className="text-sm text-neutral-400 md:text-right">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm md:text-base text-neutral-300 leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="ml-4 list-disc marker:text-neutral-500">
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
