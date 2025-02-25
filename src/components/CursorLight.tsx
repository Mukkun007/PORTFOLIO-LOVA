"use client";

import React, { useState, useEffect } from "react";

const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(38, 91, 107, 0.2), transparent 400px)`,
        mixBlendMode: "lighten",
      }}
    />
  );
};

export default CursorLight;
