import Button from '@/components/ui/Button';

export default function EnterpriseReliability() {
  return (
    <section className="w-full py-32 px-4 md:px-12 bg-white dark:bg-gray-950 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 overflow-hidden">
      
      <div className="flex flex-col max-w-[650px] gap-8">
        <h2 className="font-pangram text-[1.6rem] sm:text-3xl md:text-5xl font-bold tracking-tight text-[#800000] leading-[1.25] md:leading-tight">
          Video Production Services For <br className="md:hidden" /> Enterprise-grade Reliability
        </h2>
        
        <p className="font-pangram text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
          20+ brands trust BRNDO for their video production needs—from one-time campaigns to ongoing content across multiple formats and cities. Share your brief with us, and we'll get back to you within 48 hours with a clear, tailored production plan.
        </p>
        
        <h3 className="font-instrument text-2xl font-medium text-[#071E22] dark:text-gray-100 tracking-tight">
          Book a Call and Talk to our Production Experts Today
        </h3>

        <div className="mt-4">
          <Button 
            variant="primary" 
            href="/contact"
            className="!w-[195px] !h-[48px] !rounded-[10px] !px-[60px] !py-[21px] flex items-center justify-center gap-[10px]"
          >
            Get a Quick Call
          </Button>
        </div>
      </div>

      {/* Right side Video Grid Layout */}
      <div className="flex flex-row items-start gap-4 h-[591px]">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 w-[230px] h-full justify-center">
          <div className="w-full h-[309px] bg-black rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform"></div>
          <div className="w-full h-[190px] bg-black rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform"></div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-[230px] h-full justify-center mt-12">
          <div className="w-full h-[190px] bg-black rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform"></div>
          <div className="w-full h-[309px] bg-black rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform"></div>
        </div>
      </div>

    </section>
  );
}
