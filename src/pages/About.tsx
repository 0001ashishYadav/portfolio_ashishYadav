import { motion } from "framer-motion";
import { Code, Zap, Award, Calendar, Layers, ShieldCheck } from "lucide-react";

const About = () => {
  const stats = [
    { number: "1+", label: "Year Experience", icon: Award },
    { number: "10+", label: "Projects Built", icon: Calendar },
    { number: "5+", label: "Production Apps", icon: Layers },
    { number: "2", label: "Core Stacks", icon: Code },
  ];

  const quickFacts = [
    { label: "Location", value: "Khamaria, Bhadohi, UP — 221306" },
    { label: "Current Role", value: "Full Stack Intern @ Inflection Org Pvt. Ltd." },
    { label: "Education", value: "BCA @ Allahabad State University" },
    { label: "Available for", value: "Freelance · Part-time remote work" },
    { label: "Primary Goal", value: "Help global clients build high-performance SaaS" },
  ];

  const values = [
    {
      icon: Layers,
      title: "Scalability First",
      description:
        "I believe in designing robust database schemas and modular architectures that grow with the user base, avoiding costly future rewrites.",
    },
    {
      icon: Zap,
      title: "Performance by Default",
      description:
        "Leveraging Golang for speed-critical microservices and optimizing database indexes and React code to ensure fast load times.",
    },
    {
      icon: ShieldCheck,
      title: "Clean Data Models",
      description:
        "Utilizing PostgreSQL and Prisma ORM for highly structured relational workflows, alongside MongoDB for flexible schemas.",
    },
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
              About Me
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            BCA Student, Full Stack Developer, and Backend Performance Enthusiast.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Story (Left) */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              My Story
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base font-medium">
              <p className="fade-in-up">
                My journey into software development started as a curiosity about how the web works behind the screen. I spent hours teaching myself HTML, CSS, and JavaScript, building simple scripts and styling layouts. Seeking to solidify my technical background, I enrolled in the Bachelor of Computer Applications (BCA) program at Allahabad State University.
              </p>
              <p className="fade-in-up">
                To transition my academic learnings to real-world applications, I joined Inflection Org Pvt. Ltd. as a Full Stack Developer Intern. Operating in a professional production ecosystem pushed my development speed and technical standards. I moved past local setups to construct scalable APIs, manage relational schemas, and integrate payment methods for real business requirements.
              </p>
              <p className="fade-in-up">
                Experiencing how Node.js backends can bottleneck under dense workloads, I adopted Golang and its Fiber framework. This dual specialization enables me to pick the right tool for the job—utilizing Next.js for visual frontends, and Golang for latency-critical, high-concurrency background services.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-display font-bold text-white mb-4">GitHub Profile Highlights</h3>
              <div className="bg-bg-card/45 border border-white/5 p-4 rounded-2xl max-w-lg">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=0001ashishYadav&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1424&title_color=a855f7&icon_color=ec4899&text_color=94a3b8" 
                  alt="Ashish Yadav's GitHub Stats" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Quick Facts Sidebar (Right) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-bg-card/35 glass-card rounded-3xl p-8 border border-white/5">
              {/* Profile/Avatar Indicator */}
              <div className="h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl mb-8 flex flex-col items-center justify-center border border-white/5">
                <div className="text-5xl mb-2">👨‍💻</div>
                <div className="text-white font-display font-extrabold text-lg">Ashish Yadav</div>
                <div className="text-primary-300 text-xs font-mono font-bold mt-1">@0001ashishYadav</div>
              </div>

              <h3 className="text-lg font-display font-black text-white mb-6">Quick Facts</h3>
              
              <div className="space-y-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div className="text-xs text-slate-400 font-bold tracking-wider uppercase mb-1">{fact.label}</div>
                    <div className="text-sm md:text-base text-white font-semibold">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Summary Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-bg-card/45 glass-card rounded-2xl p-6 text-center border border-white/5 transition-all duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <stat.icon className="w-6 h-6 text-primary-300 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-display font-black text-white mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-black text-center mb-12 text-white">
            Core Development Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                className="bg-bg-card/30 glass-card rounded-2xl p-8 border border-white/5 transition-all duration-300"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-primary-500/10 border border-primary-500/20 rounded-xl w-fit mb-6">
                  <val.icon className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-4">
                  {val.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium">
                  {val.description}
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
