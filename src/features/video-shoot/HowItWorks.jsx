import Button from '@/components/ui/Button';

export default function HowItWorks() {
  return (
    <section className="w-full py-32 px-4 md:px-12 bg-white dark:bg-gray-950 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-[1280px] w-full flex flex-col items-center gap-12">
        
        <h2 className="font-pangram text-[60px] md:text-[100px] lg:text-[150px] font-black leading-none tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-300 via-gray-400/50 to-transparent">
            Your Partner in Digital<br/>Design & Development
          </span>
        </h2>

        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-16 bg-gray-200 rounded-lg"></div>
            <h3 className="font-pangram text-3xl font-bold text-[#800000]">
              How it Works
            </h3>
          </div>
          
          <Button variant="primary" className="bg-[#2B2B2B] hover:bg-black text-white px-12 py-4 rounded-[10px] font-pangram text-2xl md:text-3xl font-light">
            Book a Free Call
          </Button>
        </div>

      </div>
    </section>
  );
}
