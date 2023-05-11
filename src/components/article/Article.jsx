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
              href="https://www.scientificamerican.com/article/what-the-new-gpt-4-ai-can-do/"
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>{" "}
          </h5>
          <h5>
            {" "}
            <a
              href="https://www.nature.com/articles/d41586-023-00816-5"
              target="_blank"
              rel="noreferrer"
            >
              {url2}
            </a>{" "}
          </h5>
          <h5>
            {" "}
            <a
              href="https://www.theguardian.com/technology/2023/mar/14/chat-gpt-4-new-model"
              target="_blank"
              rel="noreferrer"
            >
              {url3}
            </a>{" "}
          </h5>
          <h5>
            {" "}
            <a
              href="https://theconversation.com/evolution-not-revolution-why-gpt-4-is-notable-but-not-groundbreaking-201858"
              target="_blank"
              rel="noreferrer"
            >
              {url4}
            </a>{" "}
          </h5>
          <h5>
            {" "}
            <a
              href="https://www.analyticsvidhya.com/blog/2023/04/gpt-4-capable-of-doing-autonomous-scientific-research/"
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
