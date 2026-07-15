type MarqueeDividerProps = {
  className?: string;
};

const labels = ["BUILD", "CODE", "SYSTEMS", "LEARN", "SHIP"];

function MarqueeGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="neo-strip__group" aria-hidden={duplicate || undefined}>
      {labels.map((label) => <span key={label}>{label}</span>)}
    </div>
  );
}

export default function MarqueeDivider({ className }: MarqueeDividerProps) {
  return (
    <div className={["neo-strip", className].filter(Boolean).join(" ")} aria-label="Areas of work">
      <div className="neo-strip__track">
        <MarqueeGroup />
        <MarqueeGroup duplicate />
      </div>
    </div>
  );
}
