import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Cpu,
  Monitor,
  Layers,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "SASS/SCSS", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 75 },
        { name: "Vercel", level: 90 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "iOS (Swift)", level: 70 },
        { name: "Android (Kotlin)", level: 75 },
        { name: "PWA", level: 90 },
        { name: "Expo", level: 80 },
      ],
    },
  ];

  const tools = [
    { name: "VS Code", icon: Monitor },
    { name: "Figma", icon: Palette },
    { name: "Git", icon: Code2 },
    { name: "Postman", icon: Layers },
    { name: "Webpack", icon: Cpu },
    { name: "Vite", icon: Cpu },
  ];

  return (
    <motion.div
      className="min-h-screen pt-20 relative z-10"
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
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use
            to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-gray-700/50"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">
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
                      delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
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

        {/* Tools & Technologies */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tools & Technologies
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            The tools and technologies I use daily to create exceptional digital
            experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <tool.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-pink-400 transition-colors" />
                <p className="text-gray-300 text-sm font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl p-8 md:p-12 border border-gray-700/50 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Continuous Learning
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Technology evolves rapidly, and I'm committed to staying at the
            forefront. Currently exploring{" "}
            <span className="text-purple-400 font-semibold">
              Web3 technologies
            </span>
            ,
            <span className="text-pink-400 font-semibold">
              {" "}
              AI/ML integration
            </span>
            , and
            <span className="text-purple-400 font-semibold">
              {" "}
              advanced React patterns
            </span>
            . My goal is to continuously expand my skill set and deliver
            cutting-edge solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["WebAssembly", "Rust", "Solidity", "Three.js", "TensorFlow"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
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
