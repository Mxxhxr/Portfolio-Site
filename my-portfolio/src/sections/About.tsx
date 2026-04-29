import GlassPanel from "../components/GlassPanel";
import LogoLoop from "../components/LogoLoop";

const techLogos = [
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/powerbi-logo.png" alt="Power BI" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Power BI</span>
      </div>
    ),
    title: "Power BI",
    href: "https://powerbi.microsoft.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/figma-logo.svg" alt="Figma" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Figma</span>
      </div>
    ),
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/firebase-logo.png" alt="Firebase" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Firebase</span>
      </div>
    ),
    title: "Firebase",
    href: "https://firebase.google.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/jira-logo.svg" alt="Jira" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Jira</span>
      </div>
    ),
    title: "Jira",
    href: "https://www.atlassian.com/software/jira",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/git-logo.png" alt="Git" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Git</span>
      </div>
    ),
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/aws-logo.png" alt="AWS" className="h-[22px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">AWS</span>
      </div>
    ),
    title: "AWS",
    href: "https://aws.amazon.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/java-logo.png" alt="Java" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Java</span>
      </div>
    ),
    title: "Java",
    href: "https://www.java.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/python-logo.png" alt="Python" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Python</span>
      </div>
    ),
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/c-logo.svg" alt="C" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">C</span>
      </div>
    ),
    title: "C",
    href: "https://www.c.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/cpp-logo.png" alt="C++" className="h-[28px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">C++</span>
      </div>
    ),
    title: "C++",
    href: "https://www.cplusplus.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/javascript-logo.png" alt="JavaScript" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">JavaScript</span>
      </div>
    ),
    title: "JavaScript",
    href: "https://www.javascript.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/typescript-logo.png" alt="TypeScript" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">TypeScript</span>
      </div>
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/bash-logo.png" alt="Bash" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Bash</span>
      </div>
    ),
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/mysql-logo.webp" alt="MySQL" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">MySQL</span>
      </div>
    ),
    title: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/oraclesql-logo.svg" alt="Oracle SQL" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Oracle SQL</span>
      </div>
    ),
    title: "Oracle SQL",
    href: "https://www.oracle.com/database/",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/postgresql-logo.png" alt="PostgreSQL" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">PostgreSQL</span>
      </div>
    ),
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/mongodb-logo.png" alt="MongoDB" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">MongoDB</span>
      </div>
    ),
    title: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/react-logo.png" alt="React" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">React</span>
      </div>
    ),
    title: "React",
    href: "https://reactjs.org/",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/tailwind-logo.png" alt="Tailwind CSS" className="h-[22px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Tailwind CSS</span>
      </div>
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/springboot-logo.png" alt="Spring Boot" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Spring Boot</span>
      </div>
    ),
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/flask-logo.png" alt="Flask" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Flask</span>
      </div>
    ),
    title: "Flask",
    href: "https://flask.palletsprojects.com/",
  },
  {
    node: (
      <div className="flex items-center gap-2 h-[26px]">
        <img src="resources/docker-logo.png" alt="Docker" className="h-[26px] w-auto select-none [-webkit-user-drag:none]" loading="lazy" decoding="async" />
        <span className="text-white/90 text-base md:text-xl font-medium">Docker</span>
      </div>
    ),
    title: "Docker",
    href: "https://www.docker.com/",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-12 md:py-24 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <GlassPanel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Hi there 👋</h2>

          <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            I'm Maahir, a recent CS graduate from NJIT (Dec 2025) with 10 months of industry experience at Medtronic and
            Cambridge Associates. I build scalable software from backend automation pipelines to full-stack web
            apps, turning complex problems into reliable solutions. I focus on clean design, performance, and
            delivering results that make an impact.
          </p>

          {/* Logo loop — smaller row height on mobile */}
          <div className="relative h-[70px] md:h-[90px] overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={110}
              direction="left"
              logoHeight={40}
              gap={32}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#0e0e0eff"
              ariaLabel="Technology logos"
            />
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}