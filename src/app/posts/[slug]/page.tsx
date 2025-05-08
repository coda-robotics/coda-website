import { getPost, getAllPostsMeta } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <article className="prose lg:prose-xl mx-auto py-40 px-4">
        {post.longExcerpt && (
          <div className="max-w-md bg-gray-100 rounded mb-6">
            <p className="text-[20px] leading-[35px] text-gray-800">{post.longExcerpt}</p>
          </div>
        )}
        <p className="text-gray-500 text-[25px] tracking-[.5px] mb-4">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className = 'h1-custom'>{post.title}</div>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}