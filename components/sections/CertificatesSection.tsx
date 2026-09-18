import CertificateCard from "@/components/CertificateCard";
import { certificates } from "@/data/certificates";

export default function CertificatesSection() {
  return (
    <section id="certificate" className="scroll-mt-24 mb-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-3">Certifications</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Continuous learning and verified credentials that strengthen my analytical foundation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
}
