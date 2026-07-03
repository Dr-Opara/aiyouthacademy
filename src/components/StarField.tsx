export default function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {Array.from({ length: 70 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] animate-twinkle rounded-full bg-white"
          style={{
            left: `${(i * 37) % 100}vw`,
            top: `${(i * 53) % 100}vh`,
            animationDelay: `${(i % 10) * 0.4}s`,
            opacity: 0.15 + ((i * 7) % 50) / 100,
          }}
        />
      ))}
    </div>
  );
}
