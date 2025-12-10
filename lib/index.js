import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (page = 1, perPage = 10) => {
  // fallback to page 1 if invalid
  const safePage = Number.isInteger(page) && page > 0 ? page : 1;
  const skip = (safePage - 1) * perPage;

  const query = gql`
    query GetPaginatedPosts($skip: Int!, $first: Int!) {
      postsConnection(skip: $skip, first: $first) {
        edges {
          node {
            title
            slug
            excerpt
            createdAt
            featuredImage {
              url
            }
            author {
              name
              photo {
                url
              }
            }
            category {
              name
              slug
            }
          }
        }
        aggregate {
          count
        }
      }
    }`;

  const variables = { skip, first: perPage };

  const result = await request(graphqlAPI, query, variables);
  return {
    posts: result.postsConnection.edges,
    total: result.postsConnection.aggregate.count,
  };
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
        post {
          id
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  // Map post count from nested aggregate
  return result.categories.map((category) => ({
    ...category,
    postCount: category.post.length
  }));
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          json
        }
        category{
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      postsConnection(where: {category: {slug: $slug}}) {
        edges {
          node {
            title
            slug
            excerpt
            createdAt
            featuredImage {
              url
            }
            author {
              name
              photo {
                url
              }
            }
            category {
              name
              slug
            }
          }
        }
        aggregate {
          count
        }
      }
    }`;

  const result = await request(graphqlAPI, query, { slug });

  return {
    posts: result.postsConnection.edges,
    total: result.postsConnection.aggregate.count,
  };
};


export const getFeaturedPosts = async () => {
  const query = gql`
    query getFeaturedPosts {
      posts(where: { featuredPost: true }) {
      title
        excerpt
        slug
        createdAt
        category {
              name
              slug
            }
        featuredImage {
          url
        }
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return {
    posts: result.posts,
  };
};


export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query getRecentPosts {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        author {
          name
          photo {
            url
          }
        }
      }
    }

  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getAllPosts = async () => {
  const query = gql`
    query GetAllPosts {
      posts {
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};
