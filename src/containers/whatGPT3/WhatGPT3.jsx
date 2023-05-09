import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>
        <a
          href="https://www.techtarget.com/searchenterpriseai/definition/GPT-3"
          target="blank"
        >
          {" "}
          Read more about it{" "}
        </a>{" "}
      </p>
    </div>

    <div className="gpt3__whatgpt3-container">
      <Feature
        title="What can GPT-3 do?"
        text="GPT-3 processes text input to perform a variety of natural language tasks. It uses both natural language generation and natural language processing to understand and generate natural human language text. Generating content understandable to humans has historically been a challenge for machines that don't know the complexities and nuances of language, but GPT-3 is trained to generate realistic human text. GPT-3 has been used to create articles, poetry, stories, news reports and dialogue using a small amount of input text that can be used to produce large amounts of copy."
      />
      <Feature
        title="GPT-3 examples"
        text="One of the most notable examples of GPT-3's implementation is the ChatGPT language model. ChatGPT is a variant of the GPT-3 model optimized for human dialogue, meaning it can ask follow-up questions, admit mistakes it has made and challenge incorrect premises. ChatGPT was made free to the public during its research preview to collect user feedback. ChatGPT was designed in part to reduce the possibility of harmful or deceitful responses."
      />
      <Feature
        title="How does GPT-3 work?"
        text="GPT-3 is a language prediction model. This means that it has a neural network machine learning model that can take input text and transform it into what it predicts the most useful result will be. This is accomplished by training the system on the vast body of internet text to spot patterns in a process called generative pre-training. GPT-3 was trained on several data sets, each with different weights, including Common Crawl, WebText2 and Wikipedia."
      />
    </div>
  </div>
);

export default WhatGPT3;
