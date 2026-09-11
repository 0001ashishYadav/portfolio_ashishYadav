import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  FileText,
  CheckCircle2,
} from "lucide-react";
import resumeImg from "../assets/resume.png";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [zoom, setZoom] = useState(1);
  const [downloaded, setDownloaded] = useState<string | null>(null);

  // Reset zoom on open
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setDownloaded(null);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 2.5));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.6));
  const handleResetZoom = () => setZoom(1);

  const handleDownloadFeedback = (type: string) => {
    setDownloaded(type);
    setTimeout(() => setDownloaded(null), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl shadow-violet-950/50 overflow-hidden"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-900 border-b border-slate-800 z-10">
              {/* Title & Info */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                    Ashish Yadav — Resume
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-xs font-normal bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Available to Hire
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Full Stack Web Developer • React | Node.js | Go | PostgreSQL
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Zoom Controls (Hidden on smallest screens) */}
                <div className="hidden md:flex items-center gap-1 bg-slate-800/80 border border-slate-700 rounded-lg p-1 mr-2">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    title="Zoom Out"
                    className="p-1.5 rounded hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-400 font-mono px-1.5 min-w-[3rem] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    title="Zoom In"
                    className="p-1.5 rounded hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    title="Reset Zoom"
                    className="p-1.5 rounded hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Open in New Tab */}
                <a
                  href="/Ashish_Yadav_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-1.5"
                  title="Open in new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                {/* Download PDF Button */}
                <a
                  href="/Ashish_Yadav_Resume.pdf"
                  download="Ashish_Yadav_Resume.pdf"
                  onClick={() => handleDownloadFeedback("PDF")}
                  className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 shadow-md shadow-violet-600/20 hover:shadow-violet-600/40 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  {downloaded === "PDF" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </>
                  )}
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Viewer Body */}
            <div className="relative flex-1 overflow-auto bg-slate-950/80 p-4 sm:p-8 flex items-start justify-center custom-scrollbar">
              <div
                className="transition-transform duration-200 ease-out origin-top shadow-2xl rounded-lg overflow-hidden border border-slate-800 bg-white"
                style={{
                  transform: `scale(${zoom})`,
                  maxWidth: "850px",
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
            </div>

            {/* Footer Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-2.5 bg-slate-900/90 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Preview
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="hidden sm:inline">Use mouse scroll or zoom buttons to inspect</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/Ashish_Yadav_Resume.png"
                  download="Ashish_Yadav_Resume.png"
                  onClick={() => handleDownloadFeedback("PNG")}
                  className="hover:text-slate-200 underline decoration-slate-600 underline-offset-4 flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  Download PNG format
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
