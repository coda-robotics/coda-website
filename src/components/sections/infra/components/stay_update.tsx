import React from 'react';

export default function StayUpdated() {
  return (
    <div className="py-30">
      <h2 className="text-4xl font-normal mb-2" style={{ 
        letterSpacing: 0,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: 50,
        lineHeight: '100%',
        color: '#000',
      }}>STAY UPDATED</h2>
      <p className="mb-8 text-base" style ={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: '100%',
        color: '#000',
      }}>Get research updates, news, and events</p>
      <form className="flex flex-col gap-4">
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          className="border-b border-black outline-none py-2 mb-4 bg-transparent"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 15,
            lineHeight: '100%',
            color: '#000',
          }}
        />
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 w-fit"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 17,
            lineHeight: '100%',
          }}
        >
          ENTER
        </button>
      </form>
    </div>
  );
}
