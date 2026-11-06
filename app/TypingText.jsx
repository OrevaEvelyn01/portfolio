"use client";

import { useEffect, useState } from "react";

const phrases = [
  "useful web applications",
  "clean, responsive websites",
  "projects that solve real problems",
];

export default function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    let delay = deleting ? 28 : 58;

    if (!deleting && text === phrase) delay = 1150;
    if (deleting && text === "") delay = 220;

    const timer = setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex(
          (current) => (current + 1) % phrases.length
        );
      } else {
        setText((current) =>
          deleting
            ? current.slice(0, -1)
            : phrase.slice(0, current.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex]);

  return (
    <span
      className="typing-text"
      aria-label={phrases[phraseIndex]}
    >
      <span aria-hidden="true">{text}</span>
      <span className="typing-caret" aria-hidden="true">
        |
      </span>
    </span>
  );
}