import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 24, 2020"
            title="GPT-3: The good, the bad and the ugly"
            url="Read the full article"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Feb 21, 2023"
            title="What GPT-3 Taught ChatGPT in a Year"
            url2="Read the full article"
          />{" "}
          <Article
            imgUrl={blog03}
            date="Feb 24, 2021"
            title="Why GPT-3 is the best and worst of AI"
            url3="Read the full article"
          />{" "}
          <Article
            imgUrl={blog04}
            date="Jul 19, 2020"
            title="GPT-3 Is Amazing—And Overhyped"
            url4="Read the full article"
          />{" "}
          <Article
            imgUrl={blog05}
            date="Nov 22, 2022"
            title='"Why we do not use GPT-3"'
            url5="Read the full article"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
