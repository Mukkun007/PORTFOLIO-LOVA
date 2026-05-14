"use client";

import Image from "next/image";

interface AppLoaderProps {
  text?: string;
}

export const AppLoader = ({ text = "Loading" }: AppLoaderProps) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0f172a] flex flex-col items-center justify-center space-y-6">
      {/* Image du Loader */}
      <Image
        src="/images/ICONE.png"
        alt="Loading"
        width={80}
        height={80}
        className="animate-spin"
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
