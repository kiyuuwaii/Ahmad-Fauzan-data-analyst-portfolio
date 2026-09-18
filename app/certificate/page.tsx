import CertificateCard from "@/components/CertificateCard";
import { certificates } from "@/data/certificates";

export default function CertificatePage() {
  return (
    <main className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-zinc-100 tracking-tight mb-3">Certifications</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Continuous learning and verified credentials that strengthen my analytical foundation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </main>
  );
}

