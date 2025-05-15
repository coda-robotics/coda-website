import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-xl">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
        Return Home
      </Link>
    </div>
  );
} 