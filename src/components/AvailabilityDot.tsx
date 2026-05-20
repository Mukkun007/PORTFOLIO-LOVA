"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  size: "small" | "large";
  withTooltip: boolean;
  hrefAnchor?: string;
};

const AvailabilityDot = ({ size, withTooltip, hrefAnchor }: Props) => {
  const t = useTranslations();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile || !tooltipVisible) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setTooltipVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, tooltipVisible]);

  const handleClick = () => {
    if (hrefAnchor) {
      document.querySelector(hrefAnchor)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (isMobile) setTooltipVisible((v) => !v);
  };

  const dotSizeClass = size === "large" ? "w-5 h-5" : "w-2.5 h-2.5";
  // const pingClass = size === "large" ? "w-5 h-5" : "w-2.5 h-2.5";

  const dot = (
    <div className="relative flex items-center justify-center cursor-pointer" onClick={handleClick}>
      <span className={`relative flex ${dotSizeClass}`}>
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60`}
          style={{ animationDuration: "2.5s" }}
        />
        <span
          className={`relative inline-flex rounded-full ${dotSizeClass} bg-green-500 border-2 border-white`}
        />
      </span>
    </div>
  );

  if (!withTooltip) return dot;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      onMouseEnter={() => !isMobile && setTooltipVisible(true)}
      onMouseLeave={() => !isMobile && setTooltipVisible(false)}
      onClick={handleClick}
    >
      <span className={`relative flex ${dotSizeClass} cursor-pointer`}>
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60`}
          style={{ animationDuration: "2.5s" }}
        />
        <span
          className={`relative inline-flex rounded-full ${dotSizeClass} bg-green-500 border-2 border-white`}
        />
      </span>

      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 sm:bottom-auto sm:top-1/2 sm:left-full sm:translate-x-2 sm:-translate-y-1/2 sm:mb-0"
          >
            <div className="bg-[#1e293b] text-white rounded-xl shadow-xl px-4 py-3 w-[220px] text-left">
              <p className="font-semibold text-sm text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                {t("availability.available")}
              </p>
              <p className="text-gray-300 text-xs mt-1">{t("availability.hours")}</p>
              <p className="text-gray-300 text-xs mt-0.5">{t("availability.tooltipLocation")}</p>
            </div>
            {/* Flèche vers le bas sur mobile, vers la gauche sur desktop */}
            <div className="flex justify-center sm:hidden">
              <div className="w-2.5 h-2.5 bg-[#1e293b] rotate-45 -mt-1.5" />
            </div>
            <div className="hidden sm:block absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 bg-[#1e293b] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AvailabilityDot;
