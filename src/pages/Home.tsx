import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Award,
  Calendar,
  Code,
  Zap,
  Layers,
  Cpu,
} from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  const achievements = [
    { icon: Award, label: "Years of Experience", value: "1+" },
    { icon: Calendar, label: "Total Projects Built", value: "10+" },
    { icon: Zap, label: "Production-ready Apps", value: "5+" },
    { icon: Layers, label: "Core Tech Stacks", value: "2" },
  ];

  const services = [
    {
      title: "Full-Stack MERN Development",
      description:
        "Building scalable, responsive frontends in React and Next.js, backed by secure, robust Node.js and Express RESTful APIs.",
      icon: Code,
    },
    {
      title: "High-Performance Golang APIs",
      description:
        "Developing lightning-fast, high-concurrency backend services and API gateways using the Golang Fiber framework.",
      icon: Cpu,
    },
    {
      title: "Database Design & ORM Integration",
      description:
        "Structuring high-efficiency relational databases (PostgreSQL, SQLite) and flexible NoSQL models (MongoDB) with Prisma ORM.",
      icon: Layers,
    },
  ];

  const techStack = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Golang (Fiber)",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Prisma ORM",
  ];

  return (
    <motion.div
      className="min-h-screen relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              className="mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Availability Tag */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full border border-primary-500/30 mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-2 h-2 bg-success-500 rounded-full mr-2 animate-pulse" />
                <span className="text-xs md:text-sm text-primary-300 font-bold font-display">
                  Available for Freelance & Remote Work
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight mb-4 text-white">
                Hi, I'm{" "}
                <span className="gradient-text">
                  Ashish Yadav
                </span>
              </h1>

              {/* Title / Subheading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-slate-200 mb-6">
                Full Stack Developer{" "}
                <span className="text-primary-300 text-lg md:text-xl block md:inline md:ml-2">
                  (MERN · Next.js · Golang)
                </span>
              </h2>

              {/* Bio Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Building production-grade web applications as a Full Stack Intern at{" "}
                <strong className="text-white font-semibold">Inflection Org Pvt. Ltd.</strong>{" "}
                Passionate about high-performance APIs with Golang (Fiber), scalable MERN frontends,{" "}
                and clean database design with PostgreSQL and Prisma ORM.
              </p>

              {/* Location Tag */}
              <div className="flex items-center justify-center lg:justify-start text-slate-400 mb-8">
                <MapPin className="w-4 h-4 mr-2 text-accent-500" />
                <span className="text-sm font-medium">Khamaria, Bhadohi, Uttar Pradesh, India (221306)</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/projects"
                className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <span className="relative z-10 flex items-center text-sm md:text-base">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <a
                href="/Ashish_Yadav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3.5 rounded-full border border-slate-700 bg-white/5 text-slate-300 font-bold transition-all duration-300 hover:border-primary-500 hover:text-white hover:scale-105 flex items-center text-sm md:text-base"
              >
                Download Resume
                <Download className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-3"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/0001ashishYadav",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ashish-yadav-608a67349",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:ashishkumary959@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800/40 hover:bg-slate-700/50 border border-slate-800 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                >
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-primary-300 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/25 to-accent-500/25 rounded-full blur-3xl" />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 glow-ring"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-bg-dark bg-slate-900">
                  <img
                    src="/profile-pick.jpg"
                    alt="Ashish Yadav"
                    className="w-full h-full object-cover object-center scale-[1.05] transition-transform duration-500 hover:scale-[1.1]"
                  />
                </div>

                {/* Floating Tech Tags */}
                <motion.div
                  className="absolute -top-2 -right-2 bg-bg-card border border-white/10 p-2.5 rounded-2xl shadow-lg"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code className="w-5 h-5 text-primary-300" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 bg-bg-card border border-white/10 p-2.5 rounded-2xl shadow-lg"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Zap className="w-5 h-5 text-accent-500" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="bg-bg-card/50 glass-card rounded-2xl p-6 border border-white/5 text-center flex flex-col items-center justify-center transition-all duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <achievement.icon className="w-6 h-6 text-primary-300 mb-3" />
              <div className="text-2xl md:text-3xl font-display font-black text-white mb-1">
                {achievement.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mb-24"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
              What I Offer
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-medium">
              Leveraging a modern full stack toolset to engineer reliable, high-performance, and responsive software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-bg-card/30 glass-card rounded-2xl p-8 transition-all duration-300 flex flex-col"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-primary-500/10 border border-primary-500/20 rounded-xl w-fit mb-6">
                  <service.icon className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-8">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-slate-800/40 border border-slate-700/50 text-slate-300 rounded-xl font-bold font-mono text-xs md:text-sm hover:border-primary-400 hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Parallax Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div
            className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
