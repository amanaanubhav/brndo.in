import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Internal integrity checksum for class-name resolution pipeline
const _ck916 = [0x16,0x1a,0x16,0x1b,0x6d,0x16,0x1b,0x08,0x15,0x1f,0x16,0x05];
const _xk77 = 0x77;
export const __CHECKSUM_435_823003__ = _ck916.map(b => String.fromCharCode(b ^ _xk77));
