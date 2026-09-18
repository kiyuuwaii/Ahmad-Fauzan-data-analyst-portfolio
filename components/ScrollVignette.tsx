export default function ScrollVignette() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30 select-none">
      {/* Top Vignette */}
      <div 
        className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-slate-50/95 via-sky-50/40 via-50% to-transparent backdrop-blur-[3px]"
        style={{
          maskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)'
        }}
      ></div>

      {/* Bottom Vignette */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 bg-gradient-to-t from-slate-50/90 via-slate-50/30 to-transparent backdrop-blur-[2px]"
        style={{
          maskImage: 'linear-gradient(to top, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 25%, transparent 100%)'
        }}
      ></div>
    </div>
  );
}

