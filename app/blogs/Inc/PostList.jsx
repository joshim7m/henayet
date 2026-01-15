import { getFeaturedPosts, getPosts } from "@/lib";
import Link from "next/link";
import PostCard from "./PostCard";

export const PostList = async () => {
  const { posts } = await getPosts();

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {posts.map((post, index) => (
        <PostCard key={index} post={post.node} />
      ))}
    </div>
  );
};
