'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const text = 'THARUUX';
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (visibleLetters < text.length) {
      const timeout = setTimeout(() => {
        setVisibleLetters((prev) => prev + 1);
      }, 100); // delay between letters
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters, text.length]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[100]">
      <div className="flex flex-col items-center">
        <p className="mt-4 text-white text-3xl tracking-widest manrope-200">
          {text.split('').map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-opacity duration-500 ${
                index < visibleLetters ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {letter}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
