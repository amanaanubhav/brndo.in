export const careersData = {
  openPositions: Array(6).fill({
    title: "Graphic Designer",
    location: "Delhi, India",
    closes: "Sep 30, 2025",
    type: "Full Time",
    isNew: true,
    link: "#apply-now",
    contactLink: "#contact-us"
  }).map((item, i) => ({ ...item, id: i + 1 })),
  applicationJourney: [
    {
      step: "01",
      title: "Submit Application",
      description: "Send us your resume, portfolio, and a brief note on why you'd be a great fit for BRNDO."
    },
    {
      step: "02",
      title: "Initial Screening",
      description: "A quick 15-minute call with our HR team to align on expectations and discuss your background."
    },
    {
      step: "03",
      title: "Skills Assessment",
      description: "Complete a short, role-specific task or technical interview to showcase your capabilities."
    },
    {
      step: "04",
      title: "Cultural Fit Interview",
      description: "Meet with the team leads to ensure our values align and we can build great things together."
    },
    {
      step: "05",
      title: "Offer & Onboarding",
      description: "Welcome to the team! We'll set you up with everything you need to hit the ground running."
    }
  ]
};
