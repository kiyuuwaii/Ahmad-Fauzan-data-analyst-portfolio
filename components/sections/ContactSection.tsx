import { Mail, MapPin, Phone, ArrowRight, Code, Briefcase, Camera } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 mb-10 max-w-5xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-3">Get In Touch</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto md:mx-0">
          Interested in working together or have a question about my projects? Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Direct Info */}
        <div className="flex flex-col gap-8">
          <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-300">
                <Mail size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 mb-1">Email</h3>
                <a href="mailto:hello@example.com" className="text-zinc-100 font-medium hover:text-emerald-400 transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-300">
                <Phone size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 mb-1">WhatsApp</h3>
                <a href="tel:+6281234567890" className="text-zinc-100 font-medium hover:text-emerald-400 transition-colors">
                  +62 812 3456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-300">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 mb-1">Location</h3>
                <p className="text-zinc-100 font-medium">
                  Surabaya, Indonesia
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="#" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
              <Briefcase size={20} />
            </Link>
            <Link href="#" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
              <Code size={20} />
            </Link>
            <Link href="#" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
              <Camera size={20} />
            </Link>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe"
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com"
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Project Inquiry"
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
              <textarea 
                id="message" 
                rows={4}
                placeholder="How can we help you?"
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600 resize-none"
              ></textarea>
            </div>
            
            <button 
              type="button"
              className="mt-2 flex items-center justify-center gap-2 w-full bg-zinc-100 text-zinc-950 font-semibold py-3 rounded-xl hover:bg-zinc-200 transition-colors"
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

