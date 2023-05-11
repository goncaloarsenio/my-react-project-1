import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          GPT-3 powers the next generation of apps
        </h1>
        <p>
          ChatGPT and the language models it’s based on are revolutionizing the
          digital and online worlds in new and exciting ways. If you want to see
          what some of the cutting-edge developments can do, you’ll want some of
          the best tools based on the latest OpenAI language model, GPT-4.
          Although there are some ways you can play with the classic GPT-4
          chatbot for free, you can also try out these awesome applications to
          see what the power of GPT-4 can really do.
        </p>
        <a
          href="https://www.digitaltrends.com/computing/best-apps-to-use-gpt-4/"
          target="_blank"
          rel="noreferrer"
        >
          <h4>Find out more about it!</h4>{" "}
        </a>
      </div>
    </div>
  );
};

export default Possibility;
