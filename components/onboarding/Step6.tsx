import { Button } from "antd";
import React, { useState } from "react";

export default function StepSix({
  onBack,
  onFinish,
  loading
}: {
  onBack: () => void;
  onFinish: (name: string) => void;
  loading?: boolean;
}) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;
    onFinish(name.trim());
  };

  return (
    <div className="min-h-120 flex flex-col animate-fadeIn">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="size-2 rounded-full bg-[#E9ECEF]" />
        <div className="w-6 rounded-sm  bg-[#9013FE]" />
      </div>

      <h2 className="text-[#212529] text-[1.5rem] mb-4 font-bold">
        What should we call you?
      </h2>

      <p className="text-[0.95rem] text-[#495057] mb-6">
        Enter your first name so we can personalize your experience
      </p>

      <div className="relative group mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your first name"
          className="peer w-full py-[0.85rem] px-4 border-2 rounded-2xl text-base outline-none transition-all duration-200 focus:border-[#9013fe]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]" />
      </div>

      {/* Footer */}
      <div className="flex flex-row-reverse mt-auto pt-8 w-full gap-4">
        <Button
          onClick={handleSubmit}
          disabled={!name.trim()}
          loading={loading}
          className={`inline-flex flex-1 justify-center font-semibold items-center rounded-[100px]! h-12.5! px-6 border-none text-white!
            ${
              name.trim()
                ? "bg-[#9013FE]! hover:bg-[#A29BFE]! hover:-translate-y-0.5"
                : "bg-[#d3c7f9]! cursor-not-allowed"
            }
            transition-all hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] duration-[0.25s] active:translate-y-0`}
        >
          Finish Setup
        </Button>

        <button
          onClick={onBack}
          className="bg-transparent font-medium rounded-2xl hover:text-[#9013FE] hover:underline text-sm"
        >
          Back
        </button>
      </div>
    </div>
  );
}
