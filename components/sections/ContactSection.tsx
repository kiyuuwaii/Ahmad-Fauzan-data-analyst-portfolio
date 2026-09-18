import { Mail, MapPin, Phone, ArrowRight, Code, Briefcase, Camera } from "lucide-react";
import { profileData } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 max-w-5xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Let's Connect</h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mb-4 mx-auto md:mx-0"></div>
        <p className="text-slate-500 max-w-2xl mx-auto md:mx-0">
          Interested in working together or have a question about my projects? Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Direct Info */}
        <div className="flex flex-col gap-8">
          <div className="bg-white border border-slate-200/80 shadow-sm rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 border border-slate-200">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Email</h3>
                <a href={`mailto:${profileData.contact.email}`} className="text-slate-600 font-medium hover:text-emerald-600 transition-colors">
                  {profileData.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 border border-slate-200">
                <Phone size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">WhatsApp</h3>
                <a href={`tel:${profileData.contact.phone}`} className="text-slate-600 font-medium hover:text-emerald-600 transition-colors">
                  {profileData.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600 border border-slate-200">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Location</h3>
                <p className="text-slate-600 font-medium">
                  {profileData.contact.location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <a href={profileData.socials.linkedin} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
              <Briefcase size={20} />
            </a>
            <a href={profileData.socials.github} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
              <Code size={20} />
            </a>
            <a href={profileData.socials.instagram} className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all">
              <Camera size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white border border-slate-200/80 shadow-sm rounded-2xl p-8">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-900">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-900">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-bold text-slate-900">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Project Inquiry"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-900">Message</label>
              <textarea 
                id="message" 
                rows={4}
                placeholder="How can we help you?"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>
            
            <button 
              type="button"
              className="mt-2 flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl shadow-sm transition-colors"
            >
              <span>Send Message</span>
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
