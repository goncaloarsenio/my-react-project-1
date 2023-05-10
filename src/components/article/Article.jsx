import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title, url, url2, url3, url4, url5 }) => {
  return (
    <div className="gpt3__blog-container_article ">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog " />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>

          <h5>
            {" "}
            <a
              href="https://towardsdatascience.com/gpt-3-the-good-the-bad-and-the-ugly-5e2e5b7f0f66"
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>{" "}
          </h5>
          <h5>
            {" "}
            <a
              href="https://www.trendmicro.com/en_fi/research/23/b/review-what-gpt-3-taught-chatgpt-in-a-year.html"
              target="_blank"
              rel="noreferrer"
            >
              {url2}
            </a>{" "}
          </h5>
          <h5>
            {" "}
            <a
              href="https://www.technologyreview.com/2021/02/24/1017797/gpt3-best-worst-ai-openai-natural-language/"
              target="_blank"
              rel="noreferrer"
            >
              {url3}
            </a>{" "}
          </h5>
          <h5>
            {" "}
            <a
              href="https://www.forbes.com/sites/robtoews/2020/07/19/gpt-3-is-amazingand-overhyped/?sh=4be78d0e1b1c"
              target="_blank"
              rel="noreferrer"
            >
              {url4}
            </a>{" "}
          </h5>
          <h5>
            {" "}
            <a
              href="https://www.articleforge.com/blog/why-we-dont-use-gpt-3/"
              target="_blank"
              rel="noreferrer"
            >
              {url5}
            </a>{" "}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Article;
