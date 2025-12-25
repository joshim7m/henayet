import { getFeaturedPosts } from "@/lib";
import PostCard from "./PostCard";
import Link from "next/link";

export const RecentPostList = async () => {
  const { posts } = await getFeaturedPosts();

  return (
    <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
       <Link href='/blogs' className="font-medium text-dark border border-dark rounded-md py-3 px-7.5 hover:bg-dark hover:text-white ease-in duration-200">
            Show more...
          </Link>
      </div>
    </div>
  );
};
