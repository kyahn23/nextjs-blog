import AllPosts from "@/components/posts/all-posts";

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

function AllPostsPage(props) {
  return <AllPosts posts={DUMMY} />;
}

export default AllPostsPage;
