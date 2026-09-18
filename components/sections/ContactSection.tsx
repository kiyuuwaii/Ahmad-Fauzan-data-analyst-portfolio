import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
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
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-600">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Email</p>
                <a href={`mailto:${profileData.contact.email}`} className="text-sm font-medium text-slate-800 hover:text-slate-600 transition-colors">
                  {profileData.contact.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-600">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Phone / WhatsApp</p>
                <a href={`tel:${profileData.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-medium text-slate-800 hover:text-slate-600 transition-colors">
                  {profileData.contact.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-600">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Location</p>
                <p className="text-sm font-medium text-slate-800">{profileData.contact.location}</p>
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
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-bold text-slate-900">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition placeholder:text-slate-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-bold text-slate-900">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition placeholder:text-slate-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-bold text-slate-900">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="What's this about?"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition placeholder:text-slate-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-bold text-slate-900">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message..."
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="mt-1 flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl shadow-sm transition-colors"
            >
              Send Message <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
