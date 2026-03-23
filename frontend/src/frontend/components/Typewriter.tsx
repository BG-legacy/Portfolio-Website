"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  /** When false, shows nothing until true, then types once (for scroll-triggered copy). */
  active?: boolean;
  /** Cursor bar color (Tailwind). Defaults to white for dark hero text. */
  cursorClassName?: string;
  /** Called once when the full string has been typed. */
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 80,
  delay = 400,
  className = "",
  active = true,
  cursorClassName = "bg-white",
  onComplete,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(active);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      setShowCursor(false);
      return;
    }

    let i = 0;
    let firedComplete = false;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let doneCursorTimeout: ReturnType<typeof setTimeout> | undefined;

    setShowCursor(true);
    const timeoutId = setTimeout(() => {
      setDisplayed("");
      intervalId = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          if (!firedComplete) {
            firedComplete = true;
            onCompleteRef.current?.();
          }
          doneCursorTimeout = setTimeout(() => setShowCursor(false), 2000);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      if (doneCursorTimeout) clearTimeout(doneCursorTimeout);
    };
  }, [text, speed, delay, active]);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`inline-block w-[3px] translate-y-[2px] ${cursorClassName} ${
          showCursor ? "animate-pulse" : "opacity-0"
        }`}
        style={{ height: "0.85em" }}
        aria-hidden
      />
    </span>
  );
}
