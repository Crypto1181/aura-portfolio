const stats = [
  "50+ PROJECTS",
  "120+ SALES",
  "99.9% UPTIME",
  "RAW PERFORMANCE",
  "ZERO DOWNTIME",
  "CLEAN CODE",
];

const StatsTicker = () => {
  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-4 border-y border-foreground/10">
      <div className="ticker-scroll flex whitespace-nowrap">
        {[...stats, ...stats].map((stat, i) => (
          <span key={i} className="flex items-center gap-4 mx-6 text-sm font-bold tracking-widest uppercase">
            <span className="w-2 h-2 bg-vault-yellow rounded-full flex-shrink-0" />
            {stat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StatsTicker;
