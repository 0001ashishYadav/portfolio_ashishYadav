import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  FileText,
  Share2,
} from "lucide-react";
import resumeImg from "../assets/resume.png";

export default function Resume() {
  const [zoom, setZoom] = useState(1);
  const [downloaded, setDownloaded] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Resume | Ashish Yadav - Full Stack Developer";
  }, []);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 2.2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.7));
  const handleResetZoom = () => setZoom(1);

  const handleDownload = (type: string) => {
    setDownloaded(type);
    setTimeout(() => setDownloaded(null), 3000);
  };

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-violet-500/30">
      {/* Top Floating / Sticky Header */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5 shadow-lg shadow-black/30">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Left: Back Link & Info */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:bg-slate-700/80 text-slate-300 hover:text-white text-sm font-medium transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="hidden sm:block border-l border-slate-700/60 pl-4">
              <h1 className="text-sm font-semibold text-white flex items-center gap-2">
                Ashish Yadav — Resume
                <span className="px-2 py-0.5 rounded-full text-[11px] font-normal bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xs text-slate-400">React · Node.js · Go · PostgreSQL</p>
            </div>
          </div>

          {/* Right: Controls & Actions */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Zoom Controls */}
            <div className="hidden md:flex items-center gap-1 bg-slate-800/80 border border-slate-700/70 rounded-xl p-1">
              <button
                type="button"
                onClick={handleZoomOut}
                title="Zoom Out"
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-300 font-mono px-2 min-w-[3.2rem] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                title="Zoom In"
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                title="Reset Zoom"
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Share Link */}
            <button
              type="button"
              onClick={handleShare}
              title="Copy Resume Link"
              className="px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            {/* Open Raw PDF in Browser */}
            <a
              href="/Ashish_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-1.5"
              title="Open direct PDF file"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Direct PDF</span>
            </a>

            {/* Download PDF Main CTA */}
            <a
              href="/Ashish_Yadav_Resume.pdf"
              download="Ashish_Yadav_Resume.pdf"
              onClick={() => handleDownload("PDF")}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 shadow-md shadow-violet-600/30 hover:shadow-violet-600/50 transition-all flex items-center gap-2 active:scale-95"
            >
              {downloaded === "PDF" ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Downloaded PDF!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </a>
          </div>
        </div>
      </header>

      {/* Main Resume Viewer Area */}
      <main className="flex-1 py-8 px-4 sm:px-6 flex flex-col items-center justify-start">
        {/* Banner with download options */}
        <div className="w-full max-w-4xl mb-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-white font-medium text-sm sm:text-base">
                Ashish_Yadav_Resume.pdf
              </h2>
              <p className="text-xs text-slate-400">
                You can view the full resume below or download it in your preferred format.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/Ashish_Yadav_Resume.pdf"
              download="Ashish_Yadav_Resume.pdf"
              onClick={() => handleDownload("PDF")}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
            <a
              href="/Ashish_Yadav_Resume.png"
              download="Ashish_Yadav_Resume.png"
              onClick={() => handleDownload("PNG")}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download PNG
            </a>
          </div>
        </div>

        {/* Scaled Resume Document */}
        <motion.div
          className="w-full flex justify-center overflow-x-auto pb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="transition-transform duration-200 ease-out origin-top shadow-2xl shadow-black/80 rounded-xl overflow-hidden border border-slate-800 bg-white"
            style={{
              transform: `scale(${zoom})`,
              maxWidth: "880px",
              width: "100%",
            }}
          >
            <img
              src={resumeImg}
              alt="Ashish Yadav Resume"
              className="w-full h-auto block select-none"
              draggable={false}
            />
          </div>
        </motion.div>
      </main>

      {/* Footer info */}
      <footer className="py-4 border-t border-slate-900 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ashish Yadav • Full Stack Web Developer
      </footer>
    </div>
  );
}
