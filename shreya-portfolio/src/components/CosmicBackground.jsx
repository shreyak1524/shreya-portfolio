const stars = [
  { top: "7%", left: "9%", size: 1.5, delay: "0s", duration: "8s" },
  { top: "12%", left: "23%", size: 1, delay: "1.2s", duration: "6s" },
  { top: "5%", left: "42%", size: 1.5, delay: "2.4s", duration: "9s" },
  { top: "9%", left: "67%", size: 1, delay: "0.6s", duration: "7s" },
  { top: "16%", left: "88%", size: 2, delay: "3.1s", duration: "10s" },
  { top: "24%", left: "5%", size: 1, delay: "1.8s", duration: "6s" },
  { top: "31%", left: "17%", size: 1.5, delay: "0.3s", duration: "8s" },
  { top: "27%", left: "34%", size: 1, delay: "2.7s", duration: "7s" },
  { top: "22%", left: "52%", size: 1, delay: "4s", duration: "9s" },
  { top: "29%", left: "74%", size: 1.5, delay: "1.5s", duration: "6s" },
  { top: "35%", left: "94%", size: 1, delay: "0.9s", duration: "8s" },
  { top: "43%", left: "11%", size: 2, delay: "3.6s", duration: "10s" },
  { top: "48%", left: "29%", size: 1, delay: "2.1s", duration: "7s" },
  { top: "41%", left: "47%", size: 1, delay: "0.4s", duration: "6s" },
  { top: "52%", left: "63%", size: 1.5, delay: "2.9s", duration: "9s" },
  { top: "46%", left: "82%", size: 1, delay: "1.1s", duration: "7s" },
  { top: "58%", left: "7%", size: 1, delay: "3.3s", duration: "8s" },
  { top: "64%", left: "21%", size: 1.5, delay: "0.8s", duration: "6s" },
  { top: "59%", left: "38%", size: 1, delay: "4.2s", duration: "10s" },
  { top: "68%", left: "56%", size: 2, delay: "1.7s", duration: "9s" },
  { top: "61%", left: "77%", size: 1, delay: "2.5s", duration: "7s" },
  { top: "72%", left: "90%", size: 1.5, delay: "0.2s", duration: "8s" },
  { top: "79%", left: "13%", size: 1, delay: "3.8s", duration: "6s" },
  { top: "84%", left: "31%", size: 1.5, delay: "1.4s", duration: "9s" },
  { top: "76%", left: "49%", size: 1, delay: "2.2s", duration: "7s" },
  { top: "88%", left: "69%", size: 1, delay: "0.7s", duration: "8s" },
  { top: "82%", left: "85%", size: 1.5, delay: "3.4s", duration: "6s" },
  { top: "93%", left: "57%", size: 1, delay: "1.9s", duration: "9s" },
];

export default function CosmicBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-canvas" />
      <div
        className="absolute inset-x-0 -top-56 mx-auto h-[46rem] w-[min(90rem,170vw)] opacity-80"
        style={{ background: "var(--hero-halo)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 h-[34rem] w-[34rem] rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--glow), transparent 68%)",
        }}
      />
      <div
        className="absolute -right-48 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--glow), transparent 70%)",
        }}
      />
      {stars.map((star, index) => (
        <span
          key={index}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--delay": star.delay,
            "--duration": star.duration,
          }}
        />
      ))}
    </div>
  );
}
