import React from "react";

import { useLoaderData } from "react-router-dom";
import Loader from "../../components/Loader";
import BlogCard from "./BlogCard";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {

  useTitle("Blogs")

  const blogs = useLoaderData();
  // console.log(blogs);
  if (!blogs) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-rose-100 bg-opacity-25 pb-16">
      <h2 className="text-center text-5xl font-bold text-violet-700 py-5 dark-heading">
        Sample Question Answer
      </h2>
      <div className="bg-neutral-200 rounded-md my-5 py-10  px-2 lg:px-10">
        <div className="overflow-x-auto w-full  space-y-5">
          {blogs?.map((blog) => (
            <BlogCard key={blog.blog_id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
