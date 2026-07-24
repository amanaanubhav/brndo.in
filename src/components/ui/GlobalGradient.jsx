'use client';

export default function GlobalGradient({ className = "", children }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-black via-[#1a0000] to-[#3a0000] group ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full pointer-events-none transform transition-transform duration-1000 ease-out group-hover:scale-[1.02] z-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-brndo-red rounded-full blur-[130px] opacity-40 mix-blend-screen transition-transform duration-1000 group-hover:translate-x-8 group-hover:translate-y-8"></div>
        <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] bg-[#800000] rounded-full blur-[150px] opacity-50 mix-blend-screen transition-transform duration-1000 group-hover:-translate-x-8 group-hover:-translate-y-8"></div>
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-black rounded-full blur-[100px] opacity-80"></div>
        <div className="absolute top-[40%] right-[30%] w-[30%] h-[30%] bg-brndo-lightRed rounded-full blur-[100px] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[#D9D9D9] opacity-[0.03] mix-blend-overlay"></div>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none mix-blend-overlay rounded-[20px] z-0"></div>
    </div>
  );
}
