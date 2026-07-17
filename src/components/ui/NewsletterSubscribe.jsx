'use client';

import { useState } from 'react';
import GradientBox from '@/components/ui/GradientBox';
import Button from '@/components/ui/Button';

/**
 * NewsletterSubscribe — Reusable newsletter subscription form
 * inside the signature BRNDO gradient box.
 * 
 * Used in: Case Study Modal (right panel), and can be placed
 * anywhere else on the site. Does NOT replace the existing
 * footer newsletter — that stays as-is.
 */
export default function NewsletterSubscribe({ className }) {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to backend / API
  };

  return (
    <GradientBox className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full h-full px-8 sm:px-10 md:px-12 py-10 md:py-14 gap-0"
      >
        {/* ── Heading ── */}
        <h2 className="font-pangram font-medium text-[28px] sm:text-[34px] md:text-[38px] leading-[0.95] tracking-[-0.02em] text-white mb-5">
          Subscribe to
          <br />
          Our Newsletter
        </h2>

        {/* ── Subheading / Caption ── */}
        <p className="font-pangram font-thin text-[12px] sm:text-[13px] leading-[1.4] tracking-normal text-white/70 mb-8 max-w-[360px]">
          Stay ahead with the latest insights in
          <br />
          performance marketing &amp; brand strategy.
        </p>

        {/* ── Email Field ── */}
        <label className="font-pangram font-medium text-[14px] sm:text-[16px] leading-[19px] tracking-[-0.02em] text-white mb-2">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          className="w-full h-[50px] bg-[#E5E5E5] rounded-[10px] px-5 font-pangram font-light text-[11.7px] leading-[19px] tracking-[-0.02em] text-black/70 placeholder:text-black/40 outline-none focus:ring-2 focus:ring-brndo-red/40 transition-shadow mb-2"
        />
        <span className="font-pangram font-[336] text-[11.7px] leading-[19px] tracking-[-0.02em] text-white/50 mb-6">
          email@example.com
        </span>

        {/* ── Mobile Number Field ── */}
        <label className="font-pangram font-medium text-[14px] sm:text-[16px] leading-[19px] tracking-[-0.02em] text-white mb-2">
          Mobile Number:
        </label>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter your Mobile Number"
          className="w-full h-[50px] bg-[#E5E5E5] rounded-[10px] px-5 font-pangram font-light text-[11.7px] leading-[19px] tracking-[-0.02em] text-black/70 placeholder:text-black/40 outline-none focus:ring-2 focus:ring-brndo-red/40 transition-shadow mb-2"
        />
        <span className="font-pangram font-[336] text-[11.7px] leading-[19px] tracking-[-0.02em] text-white/50 mb-8">
          Enter your Mobile Number
        </span>

        {/* ── Submit Button (light-red / secondary) ── */}
        <Button
          type="submit"
          variant="secondary"
          className="w-full h-[50px] rounded-[10px] text-[14px] sm:text-[15px] font-semibold"
        >
          Submit
        </Button>
      </form>
    </GradientBox>
  );
}
