'use client';
import Image from 'next/image';

export default function DigitalCousinsPage() {
  return (
    <div className="p-4 sm:p-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Large Image Component with Overlay Text */}
        <div className="w-full h-[600px] rounded-lg relative overflow-hidden">
          <Image
            src="/article_images/Robotic World Models.png"
            alt="Robotic World Models"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
            <h1 className="text-[60px] sm:text-[80px] md:text-[110px] mb-4 sm:mb-8 leading-tight">Robotic World Models</h1>
            <h3 className="text-[20px] sm:text-[24px] md:text-[30px] mb-4 sm:mb-8 max-w-3xl">
              Scale your teleoperation data at the lowest costs
            </h3>
            <h3 className="text-[20px] sm:text-[24px] md:text-[30px] mt-0 sm:mt-2">
              Coming Soon
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
} 