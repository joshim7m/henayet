import { PostList } from "../PostList"

const CategoryPage = async({params}) => {

  const { slug } = await params;

  return (
    <div className='mt-20'>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 my-10">

        <div className='text-center mt-32 mb-14'>
          <h4 className='text-2xl: md:text-3xl text-secondary-dark font-bold'>Archive</h4>
          <p>See all posts we have ever written.</p>
        </div>

        <PostList slug={slug} />

      </div>
    </div>
  )
}

export default CategoryPage