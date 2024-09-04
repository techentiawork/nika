// import React from 'react'
import { useEffect, useState } from "react";
import { BlogCard, BreadCrumb, Signup } from "../components";
import { Blogs } from "../interfaces";
import axios from "axios";
import { useParams } from "react-router-dom";

type propType = {
  blogs: Blogs[];
};

function Article(prop: propType) {
  const { blogs } = prop;

  const { id} = useParams();

  console.log(id)

  // const [blog,setBlog] = useState<Blogs>({})

  const tags: string[] = [
    "All",
    "#teg",
    "#teg",
    "#DeFiTutorials",
    "#DeFiTutorials",
    "#Insights",
    "#Updates",
    "#InvestmentStrategies",
  ];

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs/${id}`);

      console.log(res.data.blogs)

      // setBlog(res.data.blogs);
    } catch (e: any) {
      console.log(e)
    }

  }

  const [selectTag, setSelecttag] = useState("#InvestmentStrategies");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    fetchBlog()
  });

  return (
    <>
      <BreadCrumb />
      <div className="lg:p-[30px_80px_0] xs:p-[30px_40px_0] p-[30px_16px_0] w-full flex xl:justify-center justify-start overflow-hidden">
        <div className="xl:w-[1280px] max-w-[100%] ">
          <div className="flex gap-1 w-[100%] overflow-auto">
            {tags.map((item, ind) => (
              <p
                className={`py-1 px-2 rounded-[34px] cursor-pointer text-xs font-inter text-center w-max ${
                  selectTag == item
                    ? "bg-[#5B40FF] text-white"
                    : "bg-[rgba(91,64,255,0.08)] text-[#5B40FF]"
                }`}
                onClick={() => setSelecttag(item)}
                key={ind}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="flex justify-between w-full items-center">
              <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
                Investment Strategy
              </div>
              <div className="w-auto text-right text-[#070707] text-base font-medium font-inter leading-normal">
                Show more
              </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-3 ">
              {blogs.map((blog, ind) => (
                <BlogCard blog={blog} key={ind} />
              ))}
              {blogs.map((blog, ind) => (
                <BlogCard blog={blog} key={ind} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px_0] xs:p-[25px_40px_0] p-[25px_16px_0] w-full flex justify-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="flex justify-between w-full items-center">
              <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
                Latest Articles
              </div>
              <div className="w-auto text-right text-[#070707] text-base font-medium font-inter leading-normal">
                Show more
              </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-[auto] gap-3 ">
              {blogs.map((blog, ind) => (
                <BlogCard blog={blog} key={ind} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Signup />
    </>
  );
}

export default Article;
