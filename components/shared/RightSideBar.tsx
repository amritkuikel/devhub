import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSideBar = () => {
  const hotQuestions = [
    { _id: 1, title: "How to improve website performance?" },
    { _id: 2, title: "Best practices for responsive design?" },
    { _id: 3, title: "How to deploy a Node.js app on AWS?" },
    { _id: 4, title: "Introduction to GraphQL and its advantages" },
    { _id: 5, title: "Tips for debugging JavaScript code efficiently" },
  ];
  const popularTags = [
    { _id: "1", name: "Category A", totalQuestions: 20, showCount: true },
    { _id: "2", name: "Category B", totalQuestions: 15, showCount: false },
    { _id: "3", name: "Category C", showCount: true },
    { _id: "4", name: "Category D", totalQuestions: 10 },
    { _id: "5", name: "Category E" },
  ];
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900"> Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="\assets\icons\chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900"> Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
