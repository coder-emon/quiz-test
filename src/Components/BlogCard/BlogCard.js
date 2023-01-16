import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <Link href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <Link href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </Link>
            <p className="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </Link>
          </div>
        </div>
        <p>
          This card component is part of a larger, open-source library of
          Tailwind CSS components. Learn more by going to the official{" "}
          <Link
            className="text-blue-600 hover:underline"
            href="#"
            target="_blank"
          >
            Flowbite Documentation
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
