export function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-120 flex flex-col animate-fadeIn">
      <div className="flex-1 flex justify-center flex-col text-center">
        <h1 className="text-[#212529] text-[2rem] font-bold">
          Welcome to Flowva
        </h1>

        <p className="text-[0.95rem] text-[#495057]">
          Let's get you set up in 30 seconds. First, tell us your main goal so
          we can personalize your experience.
        </p>
      </div>

      <div className="flex mt-auto pt-8 w-full gap-4">
        <button
          onClick={onNext}
          className="flex-1 font-semibold hover:bg-[#A29BFE] transition-all duration-[0.25s]
          hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:-translate-y-0.5
          active:translate-y-0 text-white bg-[#9013FE] rounded-[100px]
          py-3.5 px-6"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
