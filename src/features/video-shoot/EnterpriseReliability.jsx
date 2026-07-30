import Button from '@/components/ui/Button';

export default function EnterpriseReliability() {
  return (
    <section className="w-full py-32 px-4 md:px-12 bg-white dark:bg-gray-950 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 overflow-hidden">
      
      <div className="flex flex-col max-w-[650px] gap-8">
        <h2 className="font-pangram text-[1.6rem] sm:text-3xl md:text-5xl font-bold tracking-tight text-[#800000] leading-[1.25] md:leading-tight">
          Video Production Engineered for <br className="md:hidden" /> Enterprise Reliability
        </h2>
        
        <h3 className="font-instrument text-2xl md:text-3xl font-medium text-[#071E22] dark:text-gray-100 tracking-tight mt-[-10px]">
          Book a Call and Talk to our Production Experts Today
        </h3>

        <p className="font-pangram text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
          20+ brands trust BRNDO for their video production needs—from one-time campaigns to ongoing content across multiple formats and cities. Share your brief with us, and we'll get back to you within 48 hours with a clear, tailored production plan.
        </p>

        <div className="mt-6 md:mt-8">
          <Button 
            variant="primary" 
            href="/contact"
            className="!w-[219px] !h-[44px] !rounded-[5px] md:!w-[195px] md:!h-[48px] md:!rounded-[10px] md:!px-[60px] md:!py-[21px] text-base md:text-lg font-thin shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-[10px]"
          >
            Get a Quick Call
          </Button>
        </div>
      </div>

      {/* Right side Video Grid Layout */}
      <div className="flex flex-row items-start gap-3 md:gap-4 w-full max-w-[400px] lg:max-w-none md:w-auto h-auto md:h-[591px] justify-center mt-8 lg:mt-0 mx-auto lg:mx-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-3 md:gap-4 w-1/2 md:w-[230px] h-full justify-center">
          <div className="w-full bg-black rounded-xl md:rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform" style={{ aspectRatio: '230 / 309' }}></div>
          <div className="w-full bg-black rounded-xl md:rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform" style={{ aspectRatio: '230 / 190' }}></div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3 md:gap-4 w-1/2 md:w-[230px] h-full justify-center mt-8 md:mt-12">
          <div className="w-full bg-black rounded-xl md:rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform" style={{ aspectRatio: '230 / 190' }}></div>
          <div className="w-full bg-black rounded-xl md:rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform" style={{ aspectRatio: '230 / 309' }}></div>
        </div>
      </div>

    </section>
  );
}
