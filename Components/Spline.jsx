'use client';
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineM() {
  const splineRef = useRef();

  const handleMouseMove = (e) => {
    if (splineRef.current) {
      // Forward event or manipulate if needed
    }
  };

  return (
    <div
      className="w-full h-full absolute left-0 top-0"
      onMouseMove={handleMouseMove}
    >
      <Spline
        ref={splineRef}
        scene="https://prod.spline.design/p5WPneqkUkH9ub5f/scene.splinecode"
      />
    </div>
  );
}
