import FeaturedPosts from "@/components/home-page/featured-post";
import Hero from "@/components/home-page/hero";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;
