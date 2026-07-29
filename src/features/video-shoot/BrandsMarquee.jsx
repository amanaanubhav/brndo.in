export default function BrandsMarquee() {
  return (
    <section className="w-full py-16 overflow-hidden bg-white dark:bg-gray-950 flex flex-col items-center">
      <p className="font-pangram text-center text-lg text-gray-500 mb-8 font-light">
        Trusted by 20+ Brands for Video Production
      </p>
      
      {/* Brand Logos/Text Strip */}
      <div className="relative w-full max-w-[1280px] h-[100px] flex items-center overflow-hidden">
        {/* We can use the animate-marquee utility if available, or just a simple flex layout if it's static */}
        <div className="flex whitespace-nowrap animate-marquee items-center gap-16 md:gap-32 px-4">
          
          <div className="flex items-center gap-8 md:gap-16 font-sans text-5xl md:text-7xl font-bold tracking-widest text-black/80 dark:text-white/80">
            <span>A</span>
            <span>B</span>
            <span>M</span>
            <span>A</span>
            <span>R</span>
            <span>K</span>
            <span>E</span>
            <span>T</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>

          <div className="flex items-center gap-8 md:gap-16 font-sans text-5xl md:text-7xl font-bold tracking-widest text-black/80 dark:text-white/80">
            <span>A</span>
            <span>B</span>
            <span>M</span>
            <span>A</span>
            <span>R</span>
            <span>K</span>
            <span>E</span>
            <span>T</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}
