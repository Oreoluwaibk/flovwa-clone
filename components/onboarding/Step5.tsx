import React from "react";

export default function StepFive({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="min-h-120 flex flex-col animate-fadeIn">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="w-6 rounded-sm bg-[#9013FE]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
      </div>

      <h2 className="text-[#212529] text-[1.5rem] mb-4 font-bold">
        Your Personalized Demo
      </h2>

      <p className="text-[0.95rem] text-[#495057] mb-6">
        Based on your selections, here's how Flowva can help you:
      </p>

      <div className="mt-6 p-6 border-2 border-dashed border-[#E9ECEF] bg-white rounded-2xl">
        <h3 className="text-[1.1rem] mb-4 font-bold text-[#495057]">
          Your Dashboard Preview
        </h3>

        <div>
          <div className="p-3 my-2 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[0.9rem] flex items-start gap-3">
            🧰 <strong>Tool Organizer</strong> — All your work apps in one dashboard
          </div>

          <div className="p-3 my-2 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[0.9rem] flex items-start gap-3">
            🔗 <strong>Quick Access</strong> — Launch Business tools instantly
          </div>

          <div className="p-3 my-2 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[0.9rem] flex items-start gap-3">
            📊 <strong>Usage Stats</strong> — See which tools you use most
          </div>

          <div className="p-3 my-2 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[0.9rem] flex items-start gap-3">
            🛠️ <strong>Your Tools:</strong> Evernote
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-row-reverse mt-auto pt-8 w-full gap-4">
        <button
          onClick={onNext}
          className="inline-flex justify-center font-semibold items-center w-full text-white bg-[#9013FE] rounded-[100px] py-3 px-5 border-none hover:bg-[#A29BFE] transition-all hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] duration-[0.25s] hover:-translate-y-0.5 active:translate-y-0"
        >
          Looks Great!
        </button>

        <button
          onClick={onBack}
          className="bg-transparent w-full font-medium rounded-2xl hover:text-[#9013FE] hover:underline text-sm"
        >
          Back
        </button>
      </div>
    </div>
  );
}
