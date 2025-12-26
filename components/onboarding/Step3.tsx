import React, { useState } from "react";

const categories = [
  "Sales & Marketing",
  "Social Media Management",
  "Project Management",
  "Productivity",
  "Finance & Payments",
];

export default function StepThree({
  onNext,
  onBack,
}: {
  onNext: (category: string) => void;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (selected) onNext(selected);
  };

  return (
    <div className="max-w-125 w-full bg-white my-8 p-7 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative h-fit">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="w-6 rounded-sm bg-[#9013FE]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
      </div>

      <div className="h-120 flex flex-col animate-fadeIn">
        <h2 className="text-[#212529] text-[1.4rem] mb-2 font-bold text-center">
          What's your primary focus?
        </h2>

        <p className="text-[0.95rem] text-[#495057] mb-6 text-center">
          Select the one category you're most interested in
        </p>

        <div className="h-full overflow-hidden">
          <div className="overflow-y-scroll category-list h-full p-1">
            {categories.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setSelected(label)}
                className={`flex items-center w-full px-3.5 py-4 mb-1.5 rounded-xl transition-all duration-200
                ${
                  selected === label
                    ? "bg-[rgba(144,19,254,0.1)] border border-[#9013FE]"
                    : "bg-white hover:bg-[rgba(144,19,254,0.05)]"
                }`}
              >
                <div className="text-[18px] shrink-0 inline-flex bg-[rgba(144,19,254,0.1)] w-0 h-0 mr-3.5 rounded-full items-center justify-center text-[#9013FE]">
                  <svg aria-hidden="true" viewBox="0 0 576 512" className="w-4 h-4">
                    <path
                      fill="currentColor"
                      d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-[#212529] font-medium">{label}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex flex-row-reverse mt-auto pt-8 w-full gap-4">
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selected}
            className={`inline-flex w-full justify-center font-semibold items-center transition-all duration-[0.25s] text-white rounded-[100px] py-3 px-5 border-none
              ${
                selected
                  ? "bg-[#9013FE] hover:bg-[#A29BFE] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-0"
                  : "bg-[#d3c7f9] cursor-not-allowed"
              }`}
          >
            Continue
          </button>

          <button
            type="button"
            onClick={onBack}
            className="bg-transparent w-full font-medium border-none shadow-none rounded-xl hover:text-[#9013FE] hover:underline text-sm"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
