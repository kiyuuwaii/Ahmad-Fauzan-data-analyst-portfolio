import Image from "next/image";
import Link from "next/link";
import { Certificate } from "@/data/certificates";
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="group flex flex-col bg-zinc-900/60 border border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700">
      <div className="relative w-full aspect-[4/3] bg-zinc-800 overflow-hidden">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col p-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-zinc-800 text-zinc-300 rounded-md">
            {certificate.year}
          </span>
        </div>
        
        <h3 className="text-zinc-100 font-bold text-sm leading-snug mb-1 line-clamp-2">
          {certificate.title}
        </h3>
        <p className="text-zinc-400 text-xs mb-4">
          {certificate.issuer}
        </p>
        
        <div className="mt-auto">
          <Link
            href={certificate.verifyLink}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            <span>Verify Credential</span>
            <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}

