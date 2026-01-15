import Link from "next/link";
import PostCard from "./PostCard";
import { getCategoryPosts } from "@/lib";

export const PostList = async ({slug}) => {
  const { posts } = await getCategoryPosts(slug);

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {posts.map((post, index) => (
        <PostCard key={index} post={post.node} />
      ))}
    </div>
  );
};
