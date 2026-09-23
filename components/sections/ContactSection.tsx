"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    
    // Web3Forms payload
    const payload = {
      ...formValues,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        e.currentTarget.reset(); // Reset form inputs

        // Hide success banner after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        console.error("Web3Forms error:", result.message);
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-36">
      <div className="mb-14">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">// GET IN TOUCH</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">Let&apos;s Connect</h2>
        <p className="text-slate-600 max-w-2xl">
          Have a data project in mind or want to discuss potential collaboration? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Left: Contact info */}
        <div className="flex flex-col gap-6">
          <div className="liquid-glass-card rounded-3xl p-4 sm:p-6 flex flex-col gap-2">
            <a href={`mailto:${profileData.contact.email}`} className="group flex items-center gap-4 p-3.5 rounded-2xl border border-transparent transition-all duration-300 ease-out hover:translate-x-2.5 hover:bg-slate-50 hover:border-slate-200/80 hover:shadow-sm cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-600 transition-transform duration-300 group-hover:scale-110">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Email</p>
                <span className="text-sm font-medium text-slate-800 break-all">
                  {profileData.contact.email}
                </span>
              </div>
            </a>
            
            <a href={`tel:${profileData.contact.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center gap-4 p-3.5 rounded-2xl border border-transparent transition-all duration-300 ease-out hover:translate-x-2.5 hover:bg-slate-50 hover:border-slate-200/80 hover:shadow-sm cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-600 transition-transform duration-300 group-hover:scale-110">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Phone / WhatsApp</p>
                <span className="text-sm font-medium text-slate-800">
                  {profileData.contact.phone}
                </span>
              </div>
            </a>
            
            <div className="group flex items-center gap-4 p-3.5 rounded-2xl border border-transparent transition-all duration-300 ease-out hover:translate-x-2.5 hover:bg-slate-50 hover:border-slate-200/80 hover:shadow-sm cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-600 transition-transform duration-300 group-hover:scale-110">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Location</p>
                <span className="text-sm font-medium text-slate-800">{profileData.contact.location}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">On The Web</p>
            <div className="flex gap-3 justify-start">
              <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={profileData.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="liquid-glass-card rounded-3xl p-6 relative">
          
          {/* Success Banner */}
          <div className={`absolute -top-16 left-0 right-0 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl shadow-md transition-all duration-300 flex items-center gap-3 ${status === 'success' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
            <CheckCircle2 className="text-emerald-500" size={20} />
            <span className="text-sm font-medium">Message sent successfully! I will get back to you soon.</span>
          </div>

          {/* Error Banner */}
          <div className={`absolute -top-16 left-0 right-0 bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl shadow-md transition-all duration-300 flex items-center gap-3 ${status === 'error' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}>
            <span className="text-sm font-medium">Failed to send message. Please try again.</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-bold text-slate-900">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={status === 'loading'}
                placeholder="Your full name"
                className="bg-white/50 backdrop-blur-md border border-white/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white/85 focus:border-slate-400 transition placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-bold text-slate-900">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={status === 'loading'}
                placeholder="you@example.com"
                className="bg-white/50 backdrop-blur-md border border-white/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white/85 focus:border-slate-400 transition placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-bold text-slate-900">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                disabled={status === 'loading'}
                placeholder="What's this about?"
                className="bg-white/50 backdrop-blur-md border border-white/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white/85 focus:border-slate-400 transition placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-bold text-slate-900">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={status === 'loading'}
                placeholder="Your message..."
                className="bg-white/50 backdrop-blur-md border border-white/80 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white/85 focus:border-slate-400 transition placeholder:text-slate-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-1 flex items-center justify-center gap-2 w-full bg-gradient-to-b from-slate-800/90 via-slate-900/90 to-slate-950 backdrop-blur-md sm:backdrop-blur-xl border border-white/20 border-t-white/50 shadow-md text-white font-medium py-3 rounded-2xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  Mengirim pesan... <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
