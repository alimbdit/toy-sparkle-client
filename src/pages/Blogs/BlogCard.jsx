import React from "react";

const BlogCard = ({ blog }) => {
  const { blog_id, question, answer } = blog;
  return (
    <div className="card w-full bg-orange-50 shadow-xl">
      <div className="card-body">
        <p className="text-xl font-medium text-violet-700">{blog_id}. {question}</p>
        <p className="text-lg text-neutral-600"><span className="font-medium text-neutral-700">Ans: </span>{answer}</p>
        
      </div>
    </div>
  );
};

export default BlogCard;
