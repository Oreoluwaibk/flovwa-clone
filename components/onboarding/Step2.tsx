export function Step2({
  onNext,
  onBack,
}: {
  onNext: (interest: string) => void;
  onBack: () => void;
}) {
  const goals = [
    {
      title: "Track my tool subscriptions",
      desc: "See all my subscriptions in one place and reduce costs",
    },
    {
      title: "Organize my work tools",
      desc: "Manage all my work apps from a single dashboard",
    },
    {
      title: "Discover new tools",
      desc: "Get recommendations based on my needs",
    },
    {
      title: "Earn Rewards",
      desc: "Earn rewards for trying new tools and staying productive",
    },
  ];

  return (
    <div className="min-h-120 flex flex-col animate-fadeIn">
      <div className="flex-1 flex flex-col">
        {/* progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-6 rounded-sm bg-[#9013FE]" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="size-2 rounded-full bg-[#E9ECEF]" />
          ))}
        </div>

        <h2 className="text-[#212529] text-[1.5rem] mb-4 font-bold">
          What's your main goal?
        </h2>

        <p className="text-[0.95rem] text-[#495057] mb-6">
          Select one to see a personalized demo workspace
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          {goals.map((g) => (
            <button
              key={g.title}
              onClick={() => onNext(g.title)}
              className="transition-all flex flex-col p-5 border-2 rounded-2xl
              duration-[0.25s] ease-in-out cursor-pointer border-[#E9ECEF]
              hover:border-[#9013FE] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]
              hover:-translate-y-0.5"
            >
              <h3 className="text-[1.1rem] mb-4 font-bold text-[#495057]">
                {g.title}
              </h3>
              <p className="text-[0.95rem] text-[#495057]">{g.desc}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() =>onNext("")}
          className="text-[0.85rem] text-[#495057] hover:text-[#9013FE] hover:underline"
        >
          Skip setup and go straight to my dashboard
        </button>
      </div>
    </div>
  );
}
