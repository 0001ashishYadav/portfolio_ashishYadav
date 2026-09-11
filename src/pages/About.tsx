import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Zap, Award, Calendar, Layers, ShieldCheck, Star, GitFork, Users, BookOpen, ExternalLink } from "lucide-react";
import heroBanner from "../assets/hero-banner.png";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  name: string;
  bio: string;
}

interface GitHubRepo {
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

const GitHubStats = ({ username }: { username: string }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [langMap, setLangMap] = useState<Record<string, number>>({});
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);
        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();
        setUser(userData);
        let stars = 0;
        const langs: Record<string, number> = {};
        reposData.forEach((r) => {
          if (!r.fork) stars += r.stargazers_count;
          if (r.language) langs[r.language] = (langs[r.language] || 0) + 1;
        });
        setTotalStars(stars);
        setLangMap(langs);
      } catch (_) {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  const topLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const totalLangCount = topLangs.reduce((s, [, c]) => s + c, 0);

  const langColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f7df1e",
    Go: "#00acd7",
    Python: "#3572a5",
    "C++": "#f34b7d",
    Rust: "#dea584",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Java: "#b07219",
    Shell: "#89e051",
  };

  if (loading) {
    return (
      <div className="space-y-3 animate-pulse">
        <div className="h-20 bg-white/5 rounded-2xl" />
        <div className="h-16 bg-white/5 rounded-2xl" />
      </div>
    );
  }

  if (!user) {
    return (
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary-300 hover:text-white text-sm font-mono font-bold transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        github.com/{username}
      </a>
    );
  }

  return (
    <div className="space-y-4">
      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: BookOpen, label: "Repos", value: user.public_repos },
          { icon: Star, label: "Stars", value: totalStars },
          { icon: Users, label: "Followers", value: user.followers },
          { icon: GitFork, label: "Following", value: user.following },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="bg-bg-card/50 border border-white/8 rounded-xl p-3 flex items-center gap-3"
          >
            <div className="p-1.5 bg-primary-500/15 rounded-lg">
              <Icon className="w-3.5 h-3.5 text-primary-300" />
            </div>
            <div>
              <div className="text-white font-display font-black text-base leading-none">{value}</div>
              <div className="text-slate-400 text-[10px] font-bold tracking-wider uppercase mt-0.5">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Languages Bar */}
      {topLangs.length > 0 && (
        <div className="bg-bg-card/45 border border-white/5 rounded-2xl p-4">
          <div className="text-xs text-slate-400 font-bold tracking-wider uppercase mb-3">Top Languages</div>
          {/* Segmented bar */}
          <div className="flex rounded-full overflow-hidden h-2 mb-3 gap-0.5">
            {topLangs.map(([lang, count]) => (
              <div
                key={lang}
                style={{
                  width: `${(count / totalLangCount) * 100}%`,
                  backgroundColor: langColors[lang] ?? "#6366f1",
                }}
                className="h-full rounded-full"
              />
            ))}
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {topLangs.map(([lang, count]) => (
              <div key={lang} className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: langColors[lang] ?? "#6366f1" }}
                />
                <span className="text-slate-300 text-xs font-semibold">{lang}</span>
                <span className="text-slate-500 text-[10px]">{Math.round((count / totalLangCount) * 100)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GitHub link */}
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs text-primary-300 hover:text-white transition-colors font-mono font-bold"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        github.com/{username}
      </a>
    </div>
  );
};

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
      {/* Hero Banner Section */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{ maxHeight: "420px" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.img
          src={heroBanner}
          alt="Ashish Yadav — Full Stack Developer Hero Banner"
          className="w-full object-cover object-center"
          style={{ maxHeight: "420px" }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        />
        {/* Bottom fade overlay for smooth transition */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.85) 100%)",
          }}
        />
        {/* Top fade for navbar blend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,15,30,0.3) 0%, transparent 20%)",
          }}
        />
      </motion.div>

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
              <GitHubStats username="0001ashishYadav" />
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
              {/* Profile Banner Thumbnail */}
              <div className="relative rounded-2xl mb-8 overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={heroBanner}
                  alt="Ashish Yadav profile banner"
                  className="w-full object-cover object-center"
                  style={{ maxHeight: "160px" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(10,15,30,0.75) 100%)",
                  }}
                />
                <div className="absolute bottom-3 left-4">
                  <div className="text-white font-display font-extrabold text-base drop-shadow">Ashish Yadav</div>
                  <div className="text-primary-300 text-xs font-mono font-bold">@0001ashishYadav</div>
                </div>
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
