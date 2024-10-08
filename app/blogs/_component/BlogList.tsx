import React, { ReactNode } from "react";
import BlogCard from "./BlogCard";
import Blog_1 from "./blogs/Blog_1";
import Blog_2 from "./blogs/Blog_2";
import Blog_3 from "./blogs/Blog_3";

const blogData: {
  title: string;
  content: ReactNode;
}[] = [
  {
    title: "React Query",
    content: <Blog_2 />,
  },
  {
    title: "NextUI",
    content: <Blog_1 />,
  },
  {
    title: "Side Projects",
    content: <Blog_3 />,
  },
];

const BlogList = () => {
  return (
    <div className="flex gap-10 flex-wrap">
      {blogData.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
