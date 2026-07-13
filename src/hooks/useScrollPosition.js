'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking scroll position.
 * Useful for scroll-based UI changes (e.g., navbar background).
 *
 * @param {number} threshold - Pixel threshold to consider "scrolled" (default: 50)
 * @returns {{ scrollY: number, isScrolled: boolean }}
 */
export function useScrollPosition(threshold = 50) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrollY, isScrolled };
}
