import React, { ReactNode } from "react";

const BlogCard = ({
  blog,
}: {
  blog: {
    title: string;
    content: ReactNode;
  };
}) => {
  return (
    <div className="bg-white rounded p-10 border">
      <div className="text-2xl">{blog.title}</div>
      <div>{blog.content}</div>
    </div>
  );
};

export default BlogCard;
