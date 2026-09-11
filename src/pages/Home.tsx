import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import profilePhoto from "../assets/profile-photo.jpg";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
// import banner4 from "../assets/banner-4.png";
import HomeStoryAndGitHub from "../components/HomeStoryAndGitHub";

const carouselBanners = [
  { id: 1, src: banner1, alt: "Ashish Yadav - Full Stack Developer & 2026 Goals" },
  { id: 2, src: banner2, alt: "Ashish Yadav - Turning Ideas into Real-World Applications" },
  { id: 3, src: banner3, alt: "Ashish Yadav - 2026 Modern Office Workspace" },
  // { id: 4, src: banner4, alt: "Ashish Yadav - Clean Code & System Design" },
];

/* ─── Typewriter Hook ─────────────────────────────────── */
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

/* ─── Animated Counter ───────────────────────────────── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(interval); }
          else setCount(start);
        }, 40);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

/* ─── Home Page ──────────────────────────────────────── */
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide carousel every 4.5s (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselBanners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselBanners.length) % carouselBanners.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselBanners.length);
  };

  const roles = ["Full Stack Developer", "MERN Specialist", "Golang Engineer", "API Architect"];
  const typedRole = useTypewriter(roles);

  const achievements = [
    { icon: Award, label: "Experience", value: 1, suffix: "+ yr" },
    { icon: Calendar, label: "Projects Built", value: 10, suffix: "+" },
    { icon: Zap, label: "Production Apps", value: 5, suffix: "+" },
    { icon: Layers, label: "Tech Stacks", value: 2, suffix: "" },
  ];

  const services = [
    {
      title: "Full-Stack MERN",
      description:
        "Scalable frontends in React & Next.js backed by secure Node.js / Express RESTful APIs.",
      icon: Code,
      color: "from-violet-500 to-purple-600",
      glow: "rgba(124,58,237,0.25)",
      tag: "React · Node · MongoDB",
    },
    {
      title: "Golang APIs",
      description:
        "Lightning-fast, high-concurrency backend services and API gateways using Golang Fiber.",
      icon: Cpu,
      color: "from-cyan-500 to-blue-600",
      glow: "rgba(6,182,212,0.25)",
      tag: "Go · Fiber · REST",
    },
    {
      title: "Database Design",
      description:
        "High-efficiency relational DBs (PostgreSQL, SQLite) and flexible NoSQL (MongoDB) with Prisma ORM.",
      icon: Layers,
      color: "from-pink-500 to-rose-600",
      glow: "rgba(236,72,153,0.25)",
      tag: "PostgreSQL · Prisma · MongoDB",
    },
  ];

  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#e2e8f0" },
    { name: "Node.js", color: "#68A063" },
    { name: "Express", color: "#e2e8f0" },
    { name: "Golang", color: "#00ADD8" },
    { name: "Fiber", color: "#00ADD8" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Prisma", color: "#5A67D8" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "HTML5 · CSS3", color: "#E34F26" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/0001ashishYadav", label: "GitHub", color: "#ffffff" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashish-yadav-608a67349", label: "LinkedIn", color: "#0A66C2" },
    { icon: Mail, href: "mailto:ashishkumary959@gmail.com", label: "Email", color: "#ec4899" },
  ];

  const containerV = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const itemV = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <motion.div
      className="min-h-screen relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ── Decorative Background ───────────────────── */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-600/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-violet-400 rounded-full opacity-40"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-40"
          animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-30"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-24">

        {/* ══ HERO ══════════════════════════════════════ */}
        <section className="grid lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Availability pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 mb-7 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm text-emerald-300 font-semibold tracking-wide">
                Open to Freelance &amp; Remote Roles
              </span>
            </motion.div>

            {/* Name heading */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white mb-4 leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Ashish Yadav</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-lg sm:text-2xl font-display font-bold text-slate-300">
                {typedRole}
                <span className="inline-block w-0.5 h-6 bg-violet-400 ml-0.5 align-middle animate-pulse" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-base sm:text-lg text-slate-400 leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Building production-grade web applications at{" "}
              <span className="text-white font-semibold">Inflection Org Pvt. Ltd.</span>{" "}
              Passionate about high-performance APIs, scalable MERN stacks, and clean database architecture.
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center justify-center lg:justify-start text-slate-500 mb-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <MapPin className="w-4 h-4 mr-2 text-pink-400 flex-shrink-0" />
              <span className="text-sm">Bhadohi, Uttar Pradesh, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mb-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Link
                to="/projects"
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-pink-600 px-7 py-3.5 rounded-full text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30 flex items-center gap-2 text-sm md:text-base"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>

              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-3.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-200 font-bold transition-all duration-300 hover:border-violet-500/70 hover:text-white hover:bg-slate-800/90 hover:scale-105 flex items-center gap-2.5 text-sm md:text-base backdrop-blur-sm shadow-lg shadow-violet-950/20"
              >
                <FileText className="w-4 h-4 text-violet-400 group-hover:text-violet-300 transition-colors" />
                <span>Download Resume</span>
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-slate-400 group-hover:text-white ml-0.5" />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex justify-center lg:justify-start gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors relative z-10" />
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ background: `radial-gradient(circle at center, ${color}25, transparent 70%)` }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column – Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 blur-3xl scale-110" />
              <motion.div
                className="absolute inset-0 rounded-full border border-violet-500/20"
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-[-16px] rounded-full border border-pink-500/10"
                animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.05, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 glow-ring"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src={profilePhoto}
                    alt="Ashish Yadav"
                    className="w-full h-full object-cover object-center scale-[1.05] transition-transform duration-700 hover:scale-[1.12]"
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-3 -right-3 flex items-center gap-2 bg-slate-900/90 border border-violet-500/40 px-3 py-2 rounded-2xl shadow-xl backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-bold text-violet-300">Full Stack</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 flex items-center gap-2 bg-slate-900/90 border border-pink-500/40 px-3 py-2 rounded-2xl shadow-xl backdrop-blur-sm"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-bold text-pink-300">Go + Node</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-3 flex items-center gap-2 bg-slate-900/90 border border-emerald-500/40 px-3 py-2 rounded-2xl shadow-xl backdrop-blur-sm"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Scroll indicator */}
        <div className="flex justify-center mb-20">
          <motion.div
            className="flex flex-col items-center gap-1 text-slate-500 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>

        {/* ══ STATS ════════════════════════════════════ */}
        <motion.section
          className="mb-28"
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((a) => (
              <motion.div
                key={a.label}
                variants={itemV}
                className="relative group overflow-hidden rounded-2xl p-6 text-center bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 transition-all duration-300 backdrop-blur-sm cursor-default"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-pink-500/0 group-hover:from-violet-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-2xl" />
                <a.icon className="w-6 h-6 text-violet-400 mx-auto mb-3 relative z-10" />
                <div className="text-3xl md:text-4xl font-display font-black text-white mb-1 relative z-10">
                  <AnimatedCounter target={a.value} suffix={a.suffix} />
                </div>
                <div className="text-xs md:text-sm text-slate-400 font-medium relative z-10">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ══ SERVICES ════════════════════════════════ */}
        <motion.section
          className="mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-14">
            <motion.span
              className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-violet-400 border border-violet-500/30 rounded-full mb-4 bg-violet-500/5"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What I Do
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Services &amp; Expertise
            </motion.h2>
            <motion.p
              className="text-slate-400 max-w-xl mx-auto text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Leveraging a modern full-stack toolset to engineer reliable, high-performance software.
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerV}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={itemV}
                className="relative group rounded-2xl p-8 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 30% 30%, ${s.glow}, transparent 70%)` }}
                />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} p-2.5 mb-6 shadow-lg relative z-10`}>
                  <s.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3 relative z-10">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-5 relative z-10">
                  {s.description}
                </p>
                <span className="inline-block text-xs font-mono font-bold text-slate-500 border border-slate-700 px-3 py-1 rounded-full relative z-10">
                  {s.tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ══ TECH STACK ═══════════════════════════════ */}
        <motion.section
          className="mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-pink-400 border border-pink-500/30 rounded-full mb-4 bg-pink-500/5">
              Tech I Use
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white">
              Core Technologies
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                className="group relative px-4 py-2.5 bg-slate-900/70 border border-slate-800 text-slate-300 rounded-xl font-bold font-mono text-xs md:text-sm hover:text-white transition-all duration-300 backdrop-blur-sm overflow-hidden cursor-default"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.07 }}
              >
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: tech.color }}
                />
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${tech.color}10` }}
                />
                <span className="relative z-10">{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* ══ AUTO-SLIDE BANNER CAROUSEL ════════════════ */}
        <motion.section
          className="mt-20 md:mt-28 mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="relative group rounded-3xl overflow-hidden border border-slate-700/70 shadow-2xl shadow-violet-950/40 bg-slate-900/60 aspect-[1024/381] max-w-full flex items-center justify-center select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient glow behind border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 via-pink-600/15 to-violet-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

            {/* Carousel Slide */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={carouselBanners[currentSlide].src}
                alt={carouselBanners[currentSlide].alt}
                className="w-full h-full object-cover object-center block rounded-3xl"
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                draggable={false}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Previous Slide"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-900/90 text-white border border-white/10 hover:border-violet-500/50 backdrop-blur-md transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg shadow-black/50 z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Next Slide"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-900/90 text-white border border-white/10 hover:border-violet-500/50 backdrop-blur-md transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg shadow-black/50 z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 border border-white/10 backdrop-blur-md z-20">
              {carouselBanners.map((banner, index) => {
                const isActive = currentSlide === index;
                return (
                  <button
                    key={banner.id}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                      ? "w-7 h-2 bg-gradient-to-r from-violet-500 to-pink-500 shadow-sm shadow-violet-500/50"
                      : "w-2 h-2 bg-slate-500/60 hover:bg-slate-300"
                      }`}
                  />
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* ══ MY STORY & GITHUB HIGHLIGHTS ══════════════ */}
        <HomeStoryAndGitHub />

        {/* ══ CTA TEXT CONTENT BENEATH BANNER ═════════ */}
        <motion.section
          className="relative text-center px-4 mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Ambient glow behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-3xl mx-auto bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-xl shadow-black/20">
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase backdrop-blur-sm"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              Let's Build Something Amazing
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-5 tracking-tight leading-tight">
              Have a <span className="gradient-text">project in mind?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-9 leading-relaxed font-medium">
              I'm currently available for freelance projects and full-time remote roles. Let's discuss how I can help bring your ideas to life.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-4 rounded-full text-white font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/40 flex items-center gap-2 shadow-lg shadow-violet-600/25"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>

              <Link
                to="/projects"
                className="group px-8 py-4 rounded-full border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm md:text-base transition-all duration-300 hover:border-violet-500/50 hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
              >
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-violet-400 transition-colors" />
                <span>See My Work</span>
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
};

export default Home;
