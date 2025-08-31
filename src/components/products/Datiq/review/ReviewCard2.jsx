import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

export default function ReviewCard2({
  bgImage,
  number,
  numberSuffix = "", // agar trillion, billion etc lagana ho
  textAfterNumber,
  typewriterWords = [],
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // sirf ek dafa chale
    threshold: 0.3, // 30% visible hone par trigger ho
  });

  return (
    <div
      className="w-full h-[600px] bg-cover bg-gray-900 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={ref}
    >
      <div className="text-white flex flex-col items-center justify-center text-center gap-16 bg-black/70 p-10 rounded-xl max-w-5xl">
        {/* First Paragraph with animated number */}
        <p className="text-4xl sm:text-6xl md:text-8xl font-bold">
          more than{" "}
          {inView && <CountUp start={0} end={number} duration={3} separator="," />}
          {` ${numberSuffix} ${textAfterNumber}`}
        </p>

        {/* Second Paragraph with typing effect */}
        <p className="text-2xl sm:text-4xl md:text-6xl font-bold">
          {inView && (
            <Typewriter
              words={typewriterWords}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          )}
        </p>
      </div>
    </div>
  );
}
