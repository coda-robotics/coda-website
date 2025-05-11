'use client';

import { useState } from 'react';

export default function Careers_Section() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (sectionId: number) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-32">
      <div className="items-start px-[22px] sm:px-[20px] lg:px-[105px]">
        {/* Mission Section */}
        <div className="mb-20">
          <h1 className="coda-font text-[40px] mb-8 mt-8">MISSION</h1>
          <h2 className="coda-font text-[25px] mb-8 mt-8">Through the intersection of AI and Robotics, we are building general purpose humanoid robots. These robots will eliminate the need for unsafe and undesirable jobs, allowing future generations to live happier, more purposeful lives.</h2>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '35px',
              letterSpacing: 0,
              verticalAlign: 'middle',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%', // or remove for full width of column
              color: '#000',
            }}
            className="space-y-5"
          >
            {/* <p>
            Through the intersection of AI and Robotics, we are building general purpose humanoid robots. These robots will eliminate the need for unsafe and undesirable jobs, allowing future generations to live happier, more purposeful lives.
            </p> */}
          </div>
        </div>

        {/* Vision Section (Copy 1) */}
        <div className="mb-20">
          <h1 className="coda-font text-[40px] mb-8 mt-8">VISION</h1>
          <h2 className="coda-font text-[25px] mb-8 mt-8">Through the intersection of AI and Robotics, we are building general purpose humanoid robots. These robots will eliminate the need for unsafe and undesirable jobs, allowing future generations to live happier, more purposeful lives.</h2>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '35px',
              letterSpacing: 0,
              verticalAlign: 'middle',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
              color: '#000',
            }}
            className="space-y-5"
          >
            {/* <p>
            Through the intersection of AI and Robotics, we are building general purpose humanoid robots. These robots will eliminate the need for unsafe and undesirable jobs, allowing future generations to live happier, more purposeful lives.
            </p> */}
          </div>
        </div>

        {/* Values Section (Copy 2) */}
        <div className="mb-20">
          <h1 className="coda-font text-[40px] mb-8 mt-8">CULTURE</h1>
          <h2 className="coda-font text-[25px] mb-8 mt-8">Through the intersection of AI and Robotics, we are building general purpose humanoid robots. These robots will eliminate the need for unsafe and undesirable jobs, allowing future generations to live happier, more purposeful lives.</h2>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '35px',
              letterSpacing: 0,
              verticalAlign: 'middle',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
              color: '#000',
            }}
            className="space-y-5"
          >
            {/* <p>
            Through the intersection of AI and Robotics, we are building general purpose humanoid robots. These robots will eliminate the need for unsafe and undesirable jobs, allowing future generations to live happier, more purposeful lives.
            </p> */}
          </div>
        </div>

        {/* Right: Roles */}
        <div className="mt-20">
          <h1 className="coda-font text-[40px] mb-8 mt-8">CORE VALUES</h1>
          
          <div className="border-t border-b border-gray-200 py-8 mb-4 cursor-pointer" 
            style={{ maxWidth: '800px' }}
            onClick={() => toggleSection(1)}
          >
            <div className="flex items-center w-full">
              <div className="flex items-center flex-1">
                <span className="text-xl font-bold mr-4">01</span>
                <span className="coda-font text-[25px]">Move Fast & Learn Faster</span>
              </div>
              <span 
                className="text-2xl font-bold"
                aria-label="Toggle section"
              >
                {expandedSection === 1 ? '−' : '+'}
              </span>
            </div>
            
            {expandedSection === 1 && (
              <div className="mt-6 ml-10 pr-4">
                <p className="text-lg">
                  Hesitation is the enemy of momentum. We are tackling today's most complex technological challenges by
                  testing, experimenting, and taking calculated risks to embrace the unknown without fear of failure.
                </p>
              </div>
            )}
          </div>
          
          {/* Second core value */}
          <div className="border-t border-b border-gray-200 py-8 mb-4 cursor-pointer" 
            style={{ maxWidth: '800px' }}
            onClick={() => toggleSection(2)}
          >
            <div className="flex items-center w-full">
              <div className="flex items-center flex-1">
                <span className="text-xl font-bold mr-4">02</span>
                <span className="coda-font text-[25px]">Tackle Meaningful Challenges</span>
              </div>
              <span 
                className="text-2xl font-bold"
                aria-label="Toggle section"
              >
                {expandedSection === 2 ? '−' : '+'}
              </span>
            </div>
            
            {expandedSection === 2 && (
              <div className="mt-6 ml-10 pr-4">
                <p className="text-lg">
                  Hesitation is the enemy of momentum. We are tackling today's most complex technological challenges by
                  testing, experimenting, and taking calculated risks to embrace the unknown without fear of failure.
                </p>
              </div>
            )}
          </div>
          
          {/* Third core value */}
          <div className="border-t border-b border-gray-200 py-8 mb-4 cursor-pointer" 
            style={{ maxWidth: '800px' }}
            onClick={() => toggleSection(3)}
          >
            <div className="flex items-center w-full">
              <div className="flex items-center flex-1">
                <span className="text-xl font-bold mr-4">03</span>
                <span className="coda-font text-[25px]">Embrace Limitless Possibilities</span>
              </div>
              <span 
                className="text-2xl font-bold"
                aria-label="Toggle section"
              >
                {expandedSection === 3 ? '−' : '+'}
              </span>
            </div>
            
            {expandedSection === 3 && (
              <div className="mt-6 ml-10 pr-4">
                <p className="text-lg">
                  Hesitation is the enemy of momentum. We are tackling today's most complex technological challenges by
                  testing, experimenting, and taking calculated risks to embrace the unknown without fear of failure.
                </p>
              </div>
            )}
          </div>
          
          <hr className="border-t border-gray-300 my-10" style={{ maxWidth: '800px' }} />
        </div>
      </div>
      
    </section>

    
  );
}