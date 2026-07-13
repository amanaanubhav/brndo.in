import { cn } from '@/lib/utils';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className, 
  onClick, 
  type = 'button' 
}) {
  const baseStyles = "font-pangram flex items-center justify-center rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all duration-300 w-full sm:w-auto text-center whitespace-nowrap cursor-pointer";
  
  const variants = {
    primary: "bg-black text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_12px_rgba(0,0,0,0.1)] dark:hover:bg-white dark:hover:text-black",
    secondary: "bg-brndo-lightRed text-black hover:bg-white hover:shadow-[4px_4px_12px_rgba(0,0,0,0.1)]"
  };

  // Default padding, but can be overridden by className
  const defaultPadding = "px-5 py-3 sm:px-10 sm:py-4";

  const combinedClasses = cn(baseStyles, variants[variant], defaultPadding, className);

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
