import { roles } from '@/data/roles';
import HiringClient from './HiringClient';

export async function generateStaticParams() {
  return roles.map((role) => ({
    slug: role.slug,
  }));
}

export default function HiringPage({ params }: { params: { slug: string } }) {
  const role = roles.find((r) => r.slug === params.slug);

  if (!role) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Role Not Found</h2>
        <p className="text-gray-600 mb-4">The position you’re looking for doesn’t exist or has been filled.</p>
        <a href="/careers" className="text-blue-600 hover:underline">
          View All Open Positions
        </a>
      </div>
    );
  }

  return <HiringClient role={role} />;
}