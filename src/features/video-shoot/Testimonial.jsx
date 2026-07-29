export default function Testimonial() {
  return (
    <section className="w-full py-24 px-4 md:px-12 bg-[#D9D9D9] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1280px] h-auto min-h-[418px] relative rounded-3xl bg-[#D9D9D9] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        
        {/* Testimonial Card */}
        <div className="relative w-full max-w-[700px] flex flex-col md:flex-row items-center md:items-start gap-8 z-10">
          
          {/* Avatar Area */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border border-gray-200">
               {/* Avatar placeholder icon */}
               <div className="w-12 h-12 bg-gray-200 rounded-full" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div>
              <h4 className="font-pangram text-2xl font-bold text-black uppercase tracking-wide">
                SARAH JANKINS
              </h4>
              <p className="font-pangram text-sm font-medium text-gray-700 uppercase tracking-widest mt-1">
                2.4 FOLLOWERS
              </p>
            </div>
            
            <p className="font-pangram text-2xl md:text-[22px] font-bold text-black leading-snug uppercase max-w-lg">
              BRNDO HELPED US STRENGTHEN OUR BRAND CREATIVE AND EFFECTIVE MARKETING SOLUTIONS
            </p>

            <div className="mt-4 flex justify-center md:justify-start">
              <button className="bg-[#2B2B2B] hover:bg-black text-white font-pangram font-[336] text-[26px] py-3 px-8 rounded-lg transition-colors">
                Get started
              </button>
            </div>
          </div>

        </div>

        {/* Gray decorative shape / image placeholder (as seen in Figma "Rectangle 32" "Rectangle 85") */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gray-400 rounded-2xl shadow-xl rotate-3 opacity-50 mix-blend-multiply pointer-events-none"></div>
      </div>
    </section>
  );
}
