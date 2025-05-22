// app/test/page.tsx
'use client';

export default function TestVideoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Animated Logo Test</h1>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="max-w-xs rounded-lg shadow-lg"
        style={{ backgroundColor: 'transparent' }} // optional, if you want transparency effect
      >
        <source src="/codalogo.webm" type="video/webm" />
        {/* Fallback */}
        <p>Your browser does not support the video tag.</p>
      </video>
    </main>
  );
}
