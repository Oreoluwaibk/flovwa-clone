"use client";
import { useState } from "react";

interface Tool {
  name: string;
  url: string;
}

// Add your full list of tools here
const tools: Tool[] = [
  { name: "Instapage", url: "https://api.flowvahub.com/storage/v1/object/public/icons//instapage.jpeg" },
  { name: "Moosend", url: "https://api.flowvahub.com/storage/v1/object/public/icons//Moosend.png" },
  { name: "Hootsuite", url: "https://api.flowvahub.com/storage/v1/object/public/icons//hootsuite.png" },
  { name: "SendGrid", url: "https://api.flowvahub.com/storage/v1/object/public/icons//sendgrid.png" },
  { name: "Warmy", url: "https://api.flowvahub.com/storage/v1/object/public/icons//warmy.jpeg" },
  { name: "Later", url: "https://api.flowvahub.com/storage/v1/object/public/icons//later.png" },
  { name: "Monday.com", url: "https://api.flowvahub.com/storage/v1/object/public/icons//monday.jpeg" },
  { name: "Notion", url: "https://api.flowvahub.com/storage/v1/object/public/icons//notion.png" },
  { name: "Guidde", url: "https://api.flowvahub.com/storage/v1/object/public/icons//guidde.jpeg" },
  { name: "Evernote", url: "https://api.flowvahub.com/storage/v1/object/public/icons//evernote.png" },
  { name: "Clearscore", url: "https://api.flowvahub.com/storage/v1/object/public/icons//clearscore.png" },
  { name: "Sublime Text", url: "https://api.flowvahub.com/storage/v1/object/public/icons//sublime%20text.webp" },
  { name: "Visual Studio Code", url: "https://api.flowvahub.com/storage/v1/object/public/icons//vscode.jpg" },
  { name: "Zapier", url: "https://api.flowvahub.com/storage/v1/object/public/icons//zapier.webp" },
  { name: "Make.com", url: "https://api.flowvahub.com/storage/v1/object/public/icons//make.webp" },
  { name: "Clockify", url: "https://api.flowvahub.com/storage/v1/object/public/icons//Clockify.webp" },
  { name: "DocuSign", url: "https://api.flowvahub.com/storage/v1/object/public/icons//DocuSign.webp" },
  { name: "Google Forms", url: "https://api.flowvahub.com/storage/v1/object/public/icons//Google%20Forms.webp" },
  { name: "Ilovepdf", url: "https://api.flowvahub.com/storage/v1/object/public/icons//Ilovepdf.webp" },
  { name: "Laxis", url: "https://api.flowvahub.com/storage/v1/object/public/icons//Laxis.webp" },
  { name: "Maze", url: "https://api.flowvahub.com/storage/v1/object/public/icons//maze.webp" },
  { name: "Optimizely", url: "https://api.flowvahub.com/storage/v1/object/public/icons//optimizely.webp" },
  { name: "Pomofocus", url: "https://api.flowvahub.com/storage/v1/object/public/icons//pomofocus.webp" },
  { name: "Scribehow", url: "https://api.flowvahub.com/storage/v1/object/public/icons//Scribehow.webp" },
  { name: "Storylane", url: "https://api.flowvahub.com/storage/v1/object/public/icons//Storylane.webp" },
  { name: "Survey Legend", url: "https://api.flowvahub.com/storage/v1/object/public/icons//Survey%20Legend.webp" }
];


interface Props {
  onBack: () => void;
  onContinue: (selectedTools: Tool[]) => void;
}

export default function Step4({ onBack, onContinue }: Props) {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());

  const toggleSelect = (toolName: string) => {
    const newSet = new Set(selectedTools);
    if (newSet.has(toolName)) newSet.delete(toolName);
    else newSet.add(toolName);
    setSelectedTools(newSet);
  };

  return (
    <div className="h-137.5 flex flex-col animate-fadeIn">
      {/* Step indicators */}
      <div className="flex justify-center gap-2 mb-6">
        <div className="size-2 rounded-full bg-[#E9ECEF] transition-all duration-300"></div>
        <div className="size-2 rounded-full bg-[#E9ECEF] transition-all duration-300"></div>
        <div className="w-6 rounded-sm bg-[#9013FE] transition-all duration-300"></div>
        <div className="size-2 rounded-full bg-[#E9ECEF] transition-all duration-300"></div>
        <div className="size-2 rounded-full bg-[#E9ECEF] transition-all duration-300"></div>
      </div>

      <h2 className="text-[#212529] text-[1.5rem] leading-[1.3rem] mb-4 font-bold text-start">
        Which tools do you currently use?
      </h2>
      <p className="text-[0.95rem] text-[#495057] text-start mb-4">
        Select the tools you use regularly (we'll help track or find alternatives)
      </p>

      {/* Tools Grid */}
      <div className="overflow-y-auto rounded-xl category-list h-full p-1 border-b border-b-gray-50 mb-4">
        <div className="grid grid-cols-3 gap-3">
          {tools.map((tool) => (
            <button
              key={tool.name}
              type="button"
              onClick={() => toggleSelect(tool.name)}
              className={`py-3 px-2 flex flex-col items-center text-[0.85rem] text-center transition-all duration-200 ease-in-out rounded-2xl border-2 ${
                selectedTools.has(tool.name)
                  ? "border-[#9013FE] bg-[#f5e8ff] translate-y-0.5"
                  : "border-[#E9ECEF] hover:border-[#C77DFF] hover:translate-y-0.5"
              }`}
            >
              <div className="w-6 h-6 mb-2">
                <img src={tool.url} alt={tool.name} className="w-full h-full object-contain" />
              </div>
              {tool.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-row-reverse mt-auto pt-8 w-full gap-4">
          <button
            type="button"
            disabled={selectedTools.size === 0}
            onClick={() => onContinue(tools.filter((t) => selectedTools.has(t.name)))}
            className={`inline-flex w-full justify-center font-semibold items-center transition-all duration-[0.25s] text-white rounded-[100px] py-3 px-5 border-none
              ${
                selectedTools.size > 0
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
  );
}
