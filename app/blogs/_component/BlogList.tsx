import React, { ReactNode } from "react";
import BlogCard from "./BlogCard";
import Blog_1 from "./blogs/Blog_1";

const blogData: {
  title: string;
  content: ReactNode;
}[] = [
  {
    title: "NextUI",
    content: <Blog_1 />,
  },
];

const BlogList = () => {
  return (
    <div>
      {blogData.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
