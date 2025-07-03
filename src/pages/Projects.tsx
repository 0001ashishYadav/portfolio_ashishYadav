import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and advanced analytics.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      github: "https://github.com/0001ashishYadav",
      live: "https://e-commerce-18qf9naw1-ashish-yadavs-projects-10d7c325.vercel.app",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      category: "web",
      github: "https://github.com/0001ashishYadav",
      live: "https://event-planner-fd9qqmmrg-ashish-yadavs-projects-10d7c325.vercel.app",
    },
    {
      id: 3,
      title: "AI Chat Interface",
      description:
        "An intelligent chat interface powered by OpenAI API with context awareness, conversation history, and customizable personalities.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      category: "ai",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image:
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Express", "JWT", "SQLite"],
      category: "mobile",
      github: "https://github.com/0001ashishYadav",
      live: "#",
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description:
        "An interactive dashboard for visualizing complex datasets with real-time updates, custom charts, and export functionality.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["D3.js", "React", "Python", "FastAPI"],
      category: "web",
      github: "https://github.com/0001ashishYadav",
      live: "#",
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics platform for social media management with sentiment analysis and engagement tracking.",
      image:
        "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Python", "TensorFlow", "Docker"],
      category: "ai",
      github: "https://github.com/0001ashishYadav",
      live: "#",
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Apps" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "ai", label: "AI/ML" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

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
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, from web applications to mobile apps
            and AI-powered solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              <span className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-primary-500 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-pink-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Like What You See?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always working on new projects and exploring innovative
            technologies. Let's collaborate and create something amazing
            together.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <ExternalLink className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
