// components/stay_update.js
import React from 'react';

export default function StayUpdated() {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-[50px] mb-2 whitespace-nowrap">STAY UPDATED</h3>
      <p className="mb-2">Get research updates, news, and events.</p>
      <div className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          className="border-b p-2 w-full focus:outline-none"
        />
        <button className="bg-black text-white border border-black py-2 px-6 rounded w-[100px] mb-10">
          ENTER
        </button>
      </div>
    </div>
  );
}
