import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Zap,
  Heart,
} from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  const achievements = [
    { icon: Award, label: "Years Experience", value: "2+" },
    { icon: Users, label: "Happy Clients", value: "15+" },
    { icon: Calendar, label: "Projects Completed", value: "50+" },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technologies",
      icon: Code,
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      icon: Zap,
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert and engage",
      icon: Heart,
    },
  ];

  const techStack = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
  ];

  return (
    <motion.div
      className="min-h-screen relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Hero Content */}
            <motion.div
              className="mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-primary-500/30 mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="text-sm text-purple-300 font-medium">
                  Available for new projects
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Ashish Yadav
                </span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl font-display font-semibold text-gray-300 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Creative Developer & Designer
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Creative and detail-oriented Frontend Developer with 1+ year of
                hands-on experience building responsive and user-friendly
                websites using HTML, CSS, JavaScript, React.js, and Next.js.
                Passionate about UI/UX, performance optimization, and turning
                ideas into reality. Currently exploring freelancing and building
                impactful projects.
              </motion.p>

              <motion.div
                className="flex items-center justify-center lg:justify-start text-gray-400 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <MapPin className="w-5 h-5 mr-2" />
                <span>khamaria Bhadohi Uttar Pradesh ( 221306 )</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/projects"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                to="/contact"
                className="group px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 font-semibold transition-all duration-300 hover:border-primary-500 hover:text-primary-400 hover:scale-105"
              >
                <span className="flex items-center">
                  Let's Talk
                  <Mail className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
                </span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
                { icon: Download, href: "#", label: "Resume" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl" />

                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-br from-purple-500 to-pink-500 ">
                  <img
                    src="public/profile-pick.jpg"
                    alt="Ashish Yadav - Creative Developer"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-primary-500/30 transition-all duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <achievement.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                {achievement.value}
              </div>
              <div className="text-gray-400">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What I Do
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I specialize in creating digital experiences that are both
              beautiful and functional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-primary-500/30 transition-all duration-300 group"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <service.icon className="w-12 h-12 text-purple-400 mb-6 group-hover:text-pink-400 transition-colors" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3 className="text-2xl font-display font-bold text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-primary-300 rounded-full border border-primary-500/30 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
