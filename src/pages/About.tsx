import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Award, Coffee } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "2+", label: "Years Experience", icon: Award },
    { number: "15+", label: "Happy Clients", icon: Users },
    { number: "∞", label: "Cups of Coffee", icon: Coffee },
  ];

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "I believe in writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design First",
      description:
        "Every project starts with thoughtful design that prioritizes user experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Speed and efficiency are non-negotiable in today's digital landscape.",
    },
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
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating digital experiences
            that make a difference.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              My Story
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My journey into web development began with a simple curiosity
                about how websites work. That curiosity quickly grew into a
                passion for creating beautiful, functional digital experiences.
              </p>
              <p>
                Over the past few years, I've had the privilege of working with
                diverse clients, from startups to established companies, helping
                them bring their digital visions to life. Each project teaches
                me something new and fuels my continuous growth as a developer.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blog posts and tutorials.
              </p>
            </div>
          </motion.div>

          {/* Photo & Highlights */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📍 Khamaria, Bhadohi, UP</li>
                <li>🎓 Doing BCA</li>
                <li>🚀 Full-Stack Developer</li>
                <li>🎨 UI/UX Enthusiast</li>
                <li>☕ Coffee Addict</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-gray-700/50 hover:border-primary-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What I Value
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <value.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
