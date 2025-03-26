"use client";

interface AppLoaderProps {
  text?: string;
}

export const AppLoader = ({ text = "Loading" }: AppLoaderProps) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0f172a] flex flex-col items-center justify-center space-y-6">
      {/* Image du Loader */}
      <img
        src="/images/ICONE.png"
        alt="Loading"
        className="w-20 h-20 animate-spin"
      />

      {/* Texte "Loading..." avec animation des points */}
      <div className="text-xl font-bold text-[#52a8b6] flex items-center space-x-1">
        <span>{text}</span>
        <span className="dot-animate">.</span>
        <span className="dot-animate">.</span>
        <span className="dot-animate">.</span>
      </div>
    </div>
  );
};
