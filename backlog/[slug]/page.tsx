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
    <article className="prose lg:prose-xl mx-auto py-10 px-58">
        <div className = 'h1-custom mb-2'>{post.title}</div>
       <p className="text-black text-[18px] tracking-[.5px] mb-12">
          PUBLISHED - {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
{/*            <button className="border border-black rounded px-3 py-1 font-mono flex items-center hover:bg-gray-100 mb-14">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Convert Datasets
            </button> */}
 
 {/*       {post.longExcerpt && (
           <div className="max-w bg-gray-100 rounded mb-6">
            <p className="text-[20px] leading-[35px] text-gray-800">{post.longExcerpt}</p>
          </div>
        )} */}
      <div className = "text-[20px] leading-[35px]" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}