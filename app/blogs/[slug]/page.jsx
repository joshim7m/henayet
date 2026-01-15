
import { RichText } from '@graphcms/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import { getPostDetails } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { RecentPosts } from '../Inc/RecentPosts';
import { Categories } from '../Inc/Categories';

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostDetails(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Your Blog Name`,
    description: post.excerpt,
  };
}

export default async function PostDetailsPage({ params }) {
  const { slug } = await params
  const post = await getPostDetails(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="mt-24">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10'>
          <div className='md:col-span-2'>
            <div className="mb-5">
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full rounded-xl object-cover"
              />
            </div>

            <div className='flex flex-col gap-5'>
              <h1 className="text-dark font-bold text-xl sm:text-2xl xl:text-custom-4xl">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Image
                  src={post.author.photo.url}
                  alt={post.author.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />

                <p className="font-semibold text-gray-700">{post.author.name}</p>
                <p className="text-sm text-gray-500">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>

                <Link
                  href={`/category/${post.category?.slug || 'uncategorized'}`}
                  className="inline-flex max-w-max text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full"
                >
                  {post.category?.name || 'Uncategorized'}
                </Link>
              </div>
            </div>

            <div className="prose lg:prose-xl max-w-none">
              <RichText
                content={post.content.json}
                renderers={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold mt-6">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold mt-4">{children}</h2>,
                  p: ({ children }) => <p className="mb-4">{children}</p>,
                  img: ({ src, alt }) => (
                    <img src={src} alt={alt} className="my-6 rounded-xl" />
                  ),
                  a: ({ href, children }) => (
                    <a href={href} className="text-blue-600 underline">{children}</a>
                  ),
                }}
              />
            </div>
          </div>
          <div>
            <div className="max-w-[370px] w-full">
              <div className="flex flex-col gap-10">
                <RecentPosts />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
