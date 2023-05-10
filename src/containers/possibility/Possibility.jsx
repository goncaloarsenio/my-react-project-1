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
          Over 300 applications are delivering GPT-3–powered search,
          conversation, text completion, and other advanced AI features through
          our API.
        </p>
        <a
          href="https://openai.com/blog/gpt-3-apps"
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
