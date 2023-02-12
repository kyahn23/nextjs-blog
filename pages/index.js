import FeaturedPosts from "@/components/home-page/featured-post";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import { Fragment } from "react";

const DUMMY = [
  {
    slug: "getting-started-with-nextjs",
    title: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a React framework for production",
    date: "2023-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "getting-started-with-nextjs2",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a React framework for production",
    date: "2023-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "getting-started-with-nextjs3",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a React framework for production",
    date: "2023-02-10",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
