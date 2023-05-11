import React from "react";
import "./feature.css";

const Feature = ({ title, text, more }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>

    </div>
    <div className="gpt3__features-container_feature-text-more">
<a href="https://openai.com/research/gpt-4" target="_blank" rel="noreferrer">
      <p>{more}</p>
      </a>
      </div>
  </div>
);

export default Feature;
