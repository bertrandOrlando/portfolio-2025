"use client";

// Copy animate-blink on tailwind.config.js

import { useEffect, useState } from "react";

type TypewriterProps = {
  lines: string[];
  className: string;
  typingSpeed: number;
  pause: number;
  deletingSpeed: number;
};

export const Typewriter = ({
  lines,
  className = "",
  typingSpeed = 100,
  pause = 1500,
  deletingSpeed = 50,
}: TypewriterProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = lines[currentLine];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, lines, currentLine, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={`${className}`}>
      {text}
      <span className="animate-blink inline-block w-[1px] bg-black text-transparent">
        |
      </span>
    </span>
  );
};
