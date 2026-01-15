import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => (
  <div className="flex flex-col gap-3">
    <div className="w-full h-[265px] overflow-hidden transition-all hover:scale-105 rounded-[10px] relative">
      <Image
        src={post.featuredImage.url}
        alt={post.title}
        fill
        sizes="(max-width: 768px) 100vw, 340px"
        className="rounded-[10px] object-cover"
      />
    </div>
    <div>
      <div className="flex flex-col gap-5">

        <h2 className="">
          <Link
            href={`/blogs/${post.slug}`}
            className="group text-dark font-bold text-xl md:text-2xl"
          >
            <span className="bg-linear-to-r from-primary/40 to-primary/30 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:text-gray-300">
              {post.title}
            </span>
          </Link>
        </h2>
        {post.excerpt.length > 70 ? `${post.excerpt.slice(0, 70)}...` : post.excerpt}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={post.author.photo.url}
                alt={post.author.name}
                width={24} height={24}
                className="rounded-full" />
            </div>

            <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
          </div>

          <Link
            href={`/post/${post.slug}`}
            className="inline-flex max-w-max text-blue bg-blue/[0.08] font-medium text-custom-sm py-1 px-3 rounded-full"
          >
            {post.category?.name || "Uncategorized"}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
