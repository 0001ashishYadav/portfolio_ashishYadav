import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Terminal,
  Cpu,
  Monitor,
  Eye,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-purple-500 to-accent-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Cpu,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Golang (Fiber)", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Database & ORMs",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "Prisma ORM", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "SQLite", level: 90 },
      ],
    },
    {
      title: "Tools & Deployment",
      icon: Cloud,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Vercel", level: 90 },
        { name: "Git & GitHub", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Docker (Basic)", level: 70 },
      ],
    },
  ];

  const tools = [
    { name: "VS Code", icon: Monitor },
    { name: "Postman", icon: Terminal },
    { name: "Figma", icon: Eye },
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Layers },
  ];

  return (
    <motion.div
      className="min-h-screen pt-24 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">
            <span className="gradient-text">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            A focused breakdown of my full-stack capabilities, database designs, and dev tools.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-bg-card/45 glass-card rounded-3xl p-8 border border-white/5 fade-in-up"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div
                  className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg mr-4`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white">
                  {category.title}
                </h2>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-bold font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-black mb-4 text-white">
            Daily Developer Utilities
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-medium text-sm md:text-base">
            The software, protocols, and developer toolkits I rely on for daily development.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="group bg-bg-card/45 glass-card rounded-2xl p-6 border border-white/5 hover:border-primary-500/30 transition-all duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <tool.icon className="w-8 h-8 text-primary-300 mx-auto mb-3 group-hover:text-accent-500 transition-colors" />
                <p className="text-slate-300 text-sm font-bold">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Direction Footer */}
        <motion.div
          className="bg-bg-card/30 glass-card rounded-3xl p-8 md:p-12 border border-white/5 text-center max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-display font-black text-white mb-4">
            Expansion Directions for 2026
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            Committed to continuous growth, I am actively leveling up my knowledge in these critical disciplines to build advanced systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["System Design", "Data Structures & Algorithms", "SaaS Multi-tenancy", "Docker Containerization", "API Gateway Patterns"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-xl font-bold font-mono text-xs md:text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.05 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
