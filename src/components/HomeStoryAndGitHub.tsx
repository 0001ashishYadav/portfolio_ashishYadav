import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  BookOpen,
  Star,
  Users,
  GitFork,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Zap,
  ArrowRight,
  Sparkles,
  Github,
  Code2,
} from "lucide-react";

interface GitHubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
  html_url: string;
}

interface GitHubRepo {
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

export default function HomeStoryAndGitHub() {
  const username = "0001ashishYadav";
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [langMap, setLangMap] = useState<Record<string, number>>({});
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);

        if (userRes.ok) {
          const userData = await userRes.json();
          setUser(userData);
        } else {
          // Fallback if rate-limited
          setUser({
            login: username,
            avatar_url: "https://avatars.githubusercontent.com/u/154948039?v=4",
            public_repos: 128,
            followers: 9,
            following: 10,
            name: "Ashish Yadav",
            bio: "Software Developer | Full Stack Web Developer. Turning Ideas into Real-World Applications.",
            html_url: `https://github.com/${username}`,
          });
        }

        if (reposRes.ok) {
          const reposData: GitHubRepo[] = await reposRes.json();
          let stars = 0;
          const langs: Record<string, number> = {};
          reposData.forEach((r) => {
            if (!r.fork) stars += r.stargazers_count || 0;
            if (r.language) langs[r.language] = (langs[r.language] || 0) + 1;
          });
          setTotalStars(stars);
          setLangMap(langs);
        } else {
          // Fallback language distribution
          setLangMap({
            TypeScript: 42,
            JavaScript: 38,
            Go: 18,
            HTML: 12,
            CSS: 10,
          });
          setTotalStars(8);
        }
      } catch (_) {
        // Fallback on network error
        setUser({
          login: username,
          avatar_url: "https://avatars.githubusercontent.com/u/154948039?v=4",
          public_repos: 128,
          followers: 9,
          following: 10,
          name: "Ashish Yadav",
          bio: "Software Developer | Full Stack Web Developer. Turning Ideas into Real-World Applications.",
          html_url: `https://github.com/${username}`,
        });
        setLangMap({
          TypeScript: 42,
          JavaScript: 38,
          Go: 18,
          HTML: 12,
          CSS: 10,
        });
        setTotalStars(8);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const topLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const totalLangCount = topLangs.reduce((sum, [, count]) => sum + count, 0) || 1;

  const langColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f7df1e",
    Go: "#00acd7",
    Python: "#3572a5",
    CSS: "#a855f7",
    HTML: "#f97316",
    Shell: "#10b981",
  };

  return (
    <motion.section
      className="mt-20 md:mt-28 mb-20 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-pink-600/8 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-14">
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          Get To Know Me
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4 tracking-tight">
          My Story &amp; <span className="gradient-text">GitHub Highlights</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          The drive behind my code, professional journey, and real-time open-source activity.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: My Story */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-9 backdrop-blur-sm shadow-xl shadow-black/20">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5 text-violet-400 font-display font-bold text-lg">
                <Code2 className="w-5 h-5" />
                <span>My Story</span>
              </div>
              <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Open to Opportunities
              </span>
            </div>

            {/* Story Timeline Cards */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {/* Card 1: Spark */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-violet-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Curiosity &amp; Academic Foundation
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      My journey began with deep curiosity about how software runs behind the browser. I taught myself HTML, CSS, and modern JavaScript before pursuing a <span className="text-slate-200 font-medium">Bachelor of Computer Applications (BCA)</span> at Allahabad State University to solidify computer science fundamentals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Industry */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-violet-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-pink-600/20 text-pink-400 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Production &amp; Real-World Scaling
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Bridging theory into industry practice, I stepped into a <span className="text-slate-200 font-medium">Full Stack Intern</span> role at <span className="text-violet-300 font-semibold">Inflection Org Pvt. Ltd.</span> Working within production systems pushed me to architect RESTful APIs, manage relational database schemas, and build resilient workflows under real constraints.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Dual Stack */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-violet-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-600/20 text-cyan-400 shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Dual-Stack Architecture (Node + Go)
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      To tackle high-concurrency and latency bottlenecks, I expanded beyond Node.js into <span className="text-cyan-300 font-semibold">Golang &amp; Fiber</span>. Today, I pair high-speed Go services with React and Next.js for fluid, accessible interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom link to about page */}
          <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-medium">
              Want to see values, education, and credentials?
            </span>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-400 hover:text-violet-300 group transition-colors"
            >
              <span>Read Full About Profile</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Live GitHub Highlights */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-9 backdrop-blur-sm shadow-xl shadow-black/20">
          <div>
            {/* GitHub Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 p-2 flex items-center justify-center text-white shadow-inner">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-base leading-tight">
                    GitHub Profile
                  </h3>
                  <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors"
                  >
                    @{username}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Data
              </span>
            </div>

            {/* GitHub Stats 4-Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: BookOpen, label: "Repositories", value: user?.public_repos ?? 128, color: "text-violet-400" },
                { icon: Star, label: "Total Stars", value: totalStars || 8, color: "text-amber-400" },
                { icon: Users, label: "Followers", value: user?.followers ?? 9, color: "text-pink-400" },
                { icon: GitFork, label: "Following", value: user?.following ?? 10, color: "text-cyan-400" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-3.5 flex items-center gap-3 hover:border-slate-600 transition-colors"
                >
                  <div className={`p-2 rounded-xl bg-slate-900/80 border border-slate-700/60 ${color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-display font-black text-lg leading-tight">
                      {loading ? "..." : value}
                    </div>
                    <div className="text-slate-400 text-[10px] font-bold tracking-wider uppercase mt-0.5">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Languages Breakdown */}
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                <span>Top Languages</span>
                <span className="text-[10px] font-normal text-slate-500 font-mono">By Repos</span>
              </div>

              {/* Progress Bar */}
              <div className="flex rounded-full overflow-hidden h-2.5 mb-3.5 gap-1 bg-slate-950/60 p-0.5 border border-slate-800">
                {topLangs.map(([lang, count]) => {
                  const pct = Math.max(Math.round((count / totalLangCount) * 100), 5);
                  return (
                    <div
                      key={lang}
                      title={`${lang}: ${pct}%`}
                      style={{
                        width: `${pct}%`,
                        backgroundColor: langColors[lang] ?? "#8b5cf6",
                      }}
                      className="h-full rounded-full transition-all duration-500"
                    />
                  );
                })}
              </div>

              {/* Language Tags */}
              <div className="flex flex-wrap gap-2">
                {topLangs.map(([lang, count]) => {
                  const pct = Math.round((count / totalLangCount) * 100);
                  const color = langColors[lang] ?? "#8b5cf6";
                  return (
                    <span
                      key={lang}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700/70 text-xs font-medium text-slate-300"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span>{lang}</span>
                      <span className="text-slate-500 text-[10px] font-mono">{pct}%</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Bio Callout */}
            {user?.bio && (
              <div className="p-3.5 rounded-2xl bg-violet-950/20 border border-violet-500/20 text-xs text-slate-300 leading-relaxed italic">
                "{user.bio.replace(/👋.*?\n/g, "").trim() || user.bio}"
              </div>
            )}
          </div>

          {/* GitHub CTA Link */}
          <div className="pt-6 mt-6 border-t border-slate-800">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group px-5 py-3 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800/80 hover:from-violet-900/40 hover:to-pink-900/30 border border-slate-700 hover:border-violet-500/50 text-white font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors ml-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
