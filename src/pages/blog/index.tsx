// /pages/posts/index.tsx

import { getDocuments } from "outstatic/server";

import { InferGetStaticPropsType } from "next";
import { cn } from "@/lib/utils";
import BlogCard from "@/components/blog/Card";
import { Fragment } from "react";

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
    <Fragment>
      <header
        className={cn(
          "relative isolate space-y-6 bg-cover bg-no-repeat p-20 md:px-10",
        )}
        style={{
          backgroundImage: `url(/assets/caseStudyBg.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="w-10/12 text-8xl font-medium text-white 2md:w-full 2md:text-5xl">
          Blog
        </h1>
        {/* <p className="border-t-2 py-2 text-xl text-white 2md:text-lg">
          {post.title}
        </p> */}
      </header>
      <section className="grid grid-cols-responsive250">
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
      </section>
    </Fragment>
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
