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
            date="Mar 16, 2023"
            title="What the New GPT-4 AI Can Do"
            url="Read the full article"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Mar 16, 2023"
            title="GPT-4 is here: what scientists think"
            url2="Read the full article"
          />{" "}
          <Article
            imgUrl={blog03}
            date="Mar, 2023"
            title="OpenAI says new model GPT-4 is more creative and less likely to invent facts"
            url3="Read the full article"
          />{" "}
          <Article
            imgUrl={blog04}
            date="Mar 16, 2023"
            title="Evolution not revolution: why GPT-4 is notable, but not groundbreaking"
            url4="Read the full article"
          />{" "}
          <Article
            imgUrl={blog05}
            date="Apr 15, 2023"
            title="GPT-4 Capable of Doing Autonomous Scientific Research
"
            url5="Read the full article"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
