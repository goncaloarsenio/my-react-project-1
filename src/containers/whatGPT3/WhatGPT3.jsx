import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Availability"
        text="GPT-4 is available on ChatGPT Plus and as an API for developers to build applications and services."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        About GPT-4
      </h1>
      <p>
        <a
          href="https://openai.com/product/gpt-4"
          target="blank"
        >
          {" "}
          Read more about it{" "}
        </a>{" "}
      </p>
    </div>

    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Infrastructure"
        text="GPT-4 was trained on Microsoft Azure AI supercomputers. Azure’s AI-optimized infrastructure also allows us to deliver GPT-4 to users around the world."
      />
      <Feature
        title="Research"
        text="GPT-4 is the latest milestone in OpenAI’s effort in scaling up deep learning."
        more="View GPT-4 research"
      />
      <Feature
        title="Limitations"
        text="GPT-4 still has many known limitations that we are working to address, such as social biases, hallucinations, and adversarial prompts. We encourage and facilitate transparency, user education, and wider AI literacy as society adopts these models. We also aim to expand the avenues of input people have in shaping our models."
      />
    </div>
  </div>
);

export default WhatGPT3;
