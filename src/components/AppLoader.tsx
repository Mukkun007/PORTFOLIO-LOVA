"use client";

interface AppLoaderProps {
  text?: string;
}

export const AppLoader = ({ text = "Tahiana Lova" }: AppLoaderProps) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0f172a] flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-opacity-20 border-[#52a8b6] rounded-full absolute animate-ping"></div>
        <div className="w-24 h-24 border-4 border-[#52a8b6] rounded-full animate-pulse"></div>
      </div>
      <div className="text-xl font-bold text-[#52a8b6] animate-pulse">
        {text}
      </div>
    </div>
  );
};
