import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, Hammer } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  live: string;
  inProgress: boolean;
}

// Individual Project Card with Loading Skeleton State
const ProjectCard = ({ project }: { project: Project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="group bg-bg-card/45 glass-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 flex flex-col h-full fade-in-up"
      whileHover={{ y: -6 }}
    >
      <div className="relative h-48 w-full bg-slate-900/60 overflow-hidden">
        {/* Pulse Skeleton Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-800/50 animate-pulse flex items-center justify-center">
            <span className="text-xs text-slate-500 font-mono">Loading thumbnail...</span>
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? "opacity-100 scale-100 group-hover:scale-105" : "opacity-0 scale-95"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />

        {/* Development / Action Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.inProgress && (
            <span className="px-3 py-1 text-xs font-bold bg-amber-500/25 text-amber-300 border border-amber-500/30 rounded-full flex items-center shadow-lg backdrop-blur-md">
              <Hammer className="w-3.5 h-3.5 mr-1 animate-bounce" />
              In Development
            </span>
          )}
          {!project.inProgress && (
            <span className="px-3 py-1 text-xs font-bold bg-success-500/25 text-success-400 border border-success-500/30 rounded-full shadow-lg backdrop-blur-md">
              Active
            </span>
          )}
        </div>

        {/* Overlay Links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-bg-card/90 rounded-full text-white hover:bg-primary-500 transition-colors shadow-lg border border-white/10"
              title="View Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-bg-card/90 rounded-full text-white hover:bg-accent-500 transition-colors shadow-lg border border-white/10"
              title="View Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-extrabold text-white mb-2 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6 flex-grow">
          {project.description}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-800/40 border border-slate-700/50 text-slate-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured MERN e-commerce application. Integrated with secure Stripe payments, search routing, persistent shopping cart, and order summary dashboards.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      category: "fullstack",
      github: "https://github.com/0001ashishYadav",
      live: "https://e-commerce-18qf9naw1-ashish-yadavs-projects-10d7c325.vercel.app",
      inProgress: false,
    },
    {
      id: 2,
      title: "Event Planner & Task Manager",
      description:
        "An interactive planning dashboard that visualizes events, tasks, and scheduling options. Built with high-fidelity React interfaces and responsive design.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      category: "web",
      github: "https://github.com/0001ashishYadav",
      live: "https://event-planner-fd9qqmmrg-ashish-yadavs-projects-10d7c325.vercel.app",
      inProgress: false,
    },
    {
      id: 3,
      title: "High-Performance Fiber API Gateway",
      description:
        "A concurrency-optimized backend microservice written in Golang using the Fiber framework. Equipped with query optimization pipelines and secure JWT guards.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      technologies: ["Golang", "Fiber", "PostgreSQL", "Docker", "REST API"],
      category: "backend",
      github: "https://github.com/0001ashishYadav",
      live: "", // In progress (no demo button will be rendered)
      inProgress: true,
    },
    {
      id: 4,
      title: "Multi-Tenant SaaS Portal",
      description:
        "A modern, secure B2B platform with robust database routing, automated Prisma queries, responsive data widgets, and secure multi-role privileges.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
      category: "fullstack",
      github: "https://github.com/0001ashishYadav",
      live: "", // In progress
      inProgress: true,
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Apps" },
    { key: "backend", label: "APIs / Backend" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

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
              My Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            Explore a collection of production applications and performance-driven backend systems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center cursor-pointer ${
                filter === category.key
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md shadow-primary-500/20"
                  : "bg-slate-800/40 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-800"
              }`}
            >
              <Filter className="w-3.5 h-3.5 mr-2" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call To Action Block */}
        <motion.div
          className="text-center mt-24 bg-bg-card/30 glass-card rounded-3xl p-8 md:p-12 border border-white/5 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-4">
            Interested in collaboration?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto font-medium text-sm md:text-base">
            I'm currently accepting new projects and remote contracts. Let's build a high-performance system together.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-md shadow-primary-500/20 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
            <ExternalLink className="ml-2 w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
