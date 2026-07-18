import { cn } from '@/lib/utils';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className, 
  onClick, 
  type = 'button' 
}) {
  const baseStyles = "font-pangram flex items-center justify-center rounded-[8px] transition-all duration-300 w-full sm:w-auto text-center whitespace-nowrap cursor-pointer";
  
  const typographyStyles = "font-[336] text-[20px] sm:text-[22px] leading-none tracking-[0.02em]";
  
  const variants = {
    primary: "bg-black text-white border border-black hover:bg-white hover:text-black hover:border-transparent hover:shadow-[4px_4px_10px_rgba(0,0,0,0.08)] dark:hover:bg-white dark:hover:text-black",
    secondary: "bg-brndo-lightRed text-black hover:bg-white hover:shadow-md"
  };

  // Default padding, optimized to perfectly center the text
  const defaultPadding = "px-6 py-[16px] sm:px-[40px] sm:py-[18px]";

  const combinedClasses = cn(baseStyles, typographyStyles, variants[variant], defaultPadding, className);

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
