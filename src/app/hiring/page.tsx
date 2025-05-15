'use client';

export default function HiringPage() {
  return (
    <div className="p-4 sm:p-10 flex flex-col items-center text-center">
      <h1 className="text-[50px] sm:text-[80px] md:text-[110px] mb-4 sm:mb-8 leading-tight">Want to work with us?</h1>
      <h1 className="text-[30px] sm:text-[40px] md:text-[60px] mb-4 sm:mb-8">Let us know why</h1>
      <a href="mailto:founders@codarobotics.ai" className="text-[24px] sm:text-[30px] md:text-[40px] hover:underline">
        founders@codarobotics.ai
      </a>
    </div>
  );
} 