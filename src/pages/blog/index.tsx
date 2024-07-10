// /pages/posts/index.tsx

import { getDocuments } from "outstatic/server";

import { InferGetStaticPropsType } from "next";
import { cn } from "@/lib/utils";
import BlogCard from "@/components/blog/Card";

type Post = {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  author: { name: string; picture: string };
};

export default function Index({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log({ posts });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          className={cn("m-4")}
          title={post.title}
          slug={post.slug}
          publishedAt={post.publishedAt}
          author={post.author?.name}
          description={post.description}
        />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = getDocuments("posts", [
    "title",
    "slug",
    "publishedAt",
    "author",
    "description",
  ]);

  console.log({ posts });

  return {
    props: { posts },
  };
};
