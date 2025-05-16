'use client';

import { useState } from 'react';
import Link from 'next/link';
import ApplicationModal from './ApplicationModal';

export default function AnnouncementBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full bg-black text-white py-2 text-center">
        <p className="text-sm">
          Request early access to embodied reasoning.{' '}
          <button 
            onClick={() => setShowModal(true)} 
            className="underline hover:text-gray-300 cursor-pointer"
          >
            Apply now →
          </button>
        </p>
      </div>
      
      {showModal && <ApplicationModal onClose={() => setShowModal(false)} />}
    </>
  );
} 