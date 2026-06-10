import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// CONFIGURATION: Replace this with your actual Formspree endpoint ID
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Formspree submission error:", error);
      setStatus("error");
    }
  };

  // Reset success state after 4 seconds
  useEffect(() => {
    if (status === "sent") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "ashishkumary959@gmail.com",
      link: "mailto:ashishkumary959@gmail.com",
    },
    {
      icon: MapPin,
      title: "Work Location",
      value: "Khamaria, Bhadohi, UP (221306)",
      link: "https://maps.google.com/?q=Khamaria+Bhadohi+Uttar+Pradesh",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/0001ashishYadav",
      color: "hover:text-purple-400 border-purple-500/20",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ashish-yadav-608a67349",
      color: "hover:text-blue-400 border-blue-500/20",
    },
    {
      icon: Twitter,
      name: "Twitter / X",
      href: "https://x.com/Ashish46777",
      color: "hover:text-cyan-400 border-cyan-500/20",
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
              Let's Connect
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            Have a project in mind, a freelance inquiry, or want to say hello? Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form (Left) */}
          <motion.div
            className="lg:col-span-7 bg-bg-card/45 glass-card rounded-3xl p-8 border border-white/5 fade-in-up"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg mr-4 shadow-primary-500/10">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-white">
                Send a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 font-medium transition-all"
                    placeholder="Ashish Yadav"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 font-medium transition-all"
                    placeholder="ashish@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 font-medium transition-all"
                  placeholder="Project Collaboration Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2"
                >
                  Message Content
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 font-medium transition-all resize-none"
                  placeholder="Tell me about your product details or business requirements..."
                />
              </div>

              {/* Submit Button with Dynamic States */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 px-6 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md ${
                  status === "sending"
                    ? "bg-slate-800 text-slate-500 border border-slate-700 shadow-none cursor-not-allowed"
                    : status === "sent"
                    ? "bg-success-500 text-white shadow-success-500/10"
                    : status === "error"
                    ? "bg-rose-500 text-white shadow-rose-500/10"
                    : "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:scale-[1.01] shadow-primary-500/10"
                }`}
                whileHover={status === "idle" ? { scale: 1.01 } : {}}
                whileTap={status === "idle" ? { scale: 0.99 } : {}}
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin text-primary-300" />
                    Sending Message...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2 text-white animate-bounce" />
                    Message Sent Successfully! ✓
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="w-5 h-5 mr-2 text-white" />
                    Failed to send. Try again.
                  </>
                )}
              </motion.button>

              {FORMSPREE_FORM_ID === "YOUR_FORM_ID" && (
                <p className="text-[11px] text-slate-500 text-center font-mono mt-2">
                  💡 Setup Tip: Replace <code>YOUR_FORM_ID</code> in <code>Contact.tsx</code> to receive emails.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Details (Right) */}
          <motion.div
            className="lg:col-span-5 space-y-6 fade-in-up"
          >
            {/* Contact Info Cards */}
            <div className="bg-bg-card/45 glass-card rounded-3xl p-8 border border-white/5">
              <h2 className="text-xl font-display font-bold text-white mb-6">
                Get in Touch
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:bg-slate-900/60 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 mr-4 transition-colors">
                      <info.icon className="w-5 h-5 text-primary-300" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">{info.title}</div>
                      <div className="text-sm md:text-base text-white font-semibold group-hover:text-primary-300 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-bg-card/45 glass-card rounded-3xl p-8 border border-white/5">
              <h2 className="text-xl font-display font-bold text-white mb-6">
                Professional Channels
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-4 bg-slate-900/30 border rounded-2xl transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:scale-110 transition-transform mb-2" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-wider">
                      {social.name.split(" ")[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Status Panel */}
            <div className="bg-success-500/5 border border-success-500/15 rounded-3xl p-8">
              <div className="flex items-center mb-3">
                <div className="w-2.5 h-2.5 bg-success-500 rounded-full mr-3 animate-pulse" />
                <span className="text-success-400 font-bold tracking-wide text-sm font-display">
                  Active Freelance Availability
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
                Open to full-stack projects, Golang microservice consulting, and part-time remote developer opportunities. Let's arrange a call.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
