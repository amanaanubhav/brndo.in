'use client';

import { cn } from '@/lib/utils';

/**
 * GradientBox — Reusable red-black gradient container used across the site.
 * Renders the signature BRNDO dark gradient with floating orb effects.
 * Accepts className for sizing/resizing and children for content.
 */
export default function GradientBox({ children, className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] bg-gradient-to-br from-black via-[#1a0000] to-[#3a0000]",
        className
      )}
    >
      {/* Background Orb Effects */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-brndo-red rounded-full blur-[130px] opacity-40 mix-blend-screen"></div>
        <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] bg-[#800000] rounded-full blur-[150px] opacity-50 mix-blend-screen"></div>
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-black rounded-full blur-[100px] opacity-80"></div>
        <div className="absolute top-[40%] right-[30%] w-[30%] h-[30%] bg-brndo-lightRed rounded-full blur-[100px] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[#D9D9D9] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none mix-blend-overlay rounded-[20px]"></div>
    </div>
  );
}
