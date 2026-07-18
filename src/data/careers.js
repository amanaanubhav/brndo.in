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
    { step: "1", title: "Resume", image: "resume 1" },
    { step: "2", title: "Fast Form", image: "form fillm 1" },
    { step: "3", title: "HR Review", image: "form ffilll 1" },
    { step: "4", title: "Candidate Pool", image: "printtt 1" },
    { step: "5", title: "Application Completion", image: "resultd 1" },
    { step: "6", title: "Congratulations", image: "congrats 1" }
  ]
};
