import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20 items-center">
    <div className="max-w-[570px] w-full h-[213px] md:h-[311px] overflow-hidden transition-all hover:scale-105 rounded-[10px] relative">
      <Image
        src={post.featuredImage.url}
        alt={post.title}
        fill
        sizes="(max-width: 768px) 100vw, 570px"
        className="rounded-[10px] object-cover"
      />
    </div>
    <div>
      <div className="flex flex-col gap-3">
        <Link
          href={`/category/${post.category.slug}`}
          className="inline-flex max-w-max text-blue bg-blue/[0.08] font-medium text-custom-sm py-1 px-3 rounded-full"
        >
          {post.category?.name || "Uncategorized"}
        </Link>
        <h2 className="">
          <Link href={`/blogs/${post.slug}`}
            className="group text-dark font-bold text-xl sm:text-2xl xl:text-custom-4xl"
          >
            <span className="bg-linear-to-r from-primary/40 to-primary/30 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:text-gray-300">
              {post.title}
            </span>
          </Link>
        </h2>
        <p className="dark:text-gray-300">{post.excerpt}</p>
        <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
      </div>
    </div>
  </div>
);

export default PostCard;
