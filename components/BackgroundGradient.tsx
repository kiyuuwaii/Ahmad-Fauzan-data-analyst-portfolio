"use client";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-full h-full bg-white">
      {/* Container for blobs to stay fixed relative to viewport */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        {/* Soft Blue Blob - Top Left */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-200 blur-[120px] mix-blend-multiply animate-blob"
        ></div>

        {/* Soft Indigo Blob - Top Right */}
        <div 
          className="absolute top-[0%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-200 blur-[100px] mix-blend-multiply animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Soft Emerald Blob - Bottom Center */}
        <div 
          className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-emerald-200 blur-[120px] mix-blend-multiply animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </div>
  );
}
