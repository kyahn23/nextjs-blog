import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import React from "react";

// content : markdown 참고
const DUMMY = {
  slug: "getting-started-with-nextjs",
  title: "getting-started-with-nextjs",
  image: "getting-started-nextjs.png",
  date: "2023-02-10",
  content: "# This is a first post",
};

function PostContent(props) {
  const imagePath = `/images/posts/${DUMMY.slug}/${DUMMY.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY.title} image={imagePath} />
      <ReactMarkdown>{DUMMY.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
