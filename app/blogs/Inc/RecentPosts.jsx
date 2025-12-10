import { getRecentPosts } from "@/lib"
import Image from "next/image"
import moment from 'moment';
import Link from "next/link";

export const RecentPosts = async () => {
  const posts = await getRecentPosts();

  return (
    <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
      <h4 className="font-semibold text-custom-4 text-dark mb-7.5">
        Recent Posts
      </h4>

      <div className="flex flex-col gap-7.5">
        {posts.map((post, index) => (
          <Link key={index} href={`/blogs/${post.slug}`} className="group flex gap-6.5">
            <div className="max-w-[70px] w-full h-17.5 rounded-full">
              <Image
                src={post.author.photo.url}
                alt={post.author.name}
                width={70}
                height={70}
                className="rounded-full" />
            </div>

            <div>
              <h5 className="font-medium text-sm text-dark duration-200 ease-in mb-1.5 group-hover:text-primary">
                {post.title}
              </h5>
              <div className="flex items-center gap-2">
                <p className="text-custom-xs">{post.author.name}</p>
                <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                <p className="text-custom-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
