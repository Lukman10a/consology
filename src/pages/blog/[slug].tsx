import { cn } from "@/lib/utils";
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  GetStaticPaths,
} from "next";
import { getDocumentBySlug, getDocuments } from "outstatic/server";
import { Fragment } from "react";
import { remark } from "remark";
import html from "remark-html";

// Define the Post type
type Post = {
  title: string;
  publishedAt: string;
  slug: string;
  author: string;
  content: string;
  coverImage: string;
  description: string;
};

// Define the Props type
interface Props {
  post: Post;
}

// Function component with typed props
export default function Index({ post }: Props) {
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
        <p className="border-t-2 py-2 text-xl text-white 2md:text-lg">
          {post.description}
        </p>
      </header>
      <section className="container mx-auto space-y-8 p-12">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
    </Fragment>
  );
}

// Get static props with typed context and result
export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  if (!params?.slug || typeof params.slug !== "string") {
    return {
      notFound: true,
    };
  }

  const post = getDocumentBySlug("posts", params.slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
    "desciption",
  ]) as Post;

  const content = await remark().use(html).process(post.content);

  return {
    props: {
      post: {
        ...post,
        content: content.toString(),
      },
    },
  };
}

// Define getStaticPaths to generate dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getDocuments("posts", ["slug"]) as { slug: string }[];

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false, // can also be true or 'blocking'
  };
};
