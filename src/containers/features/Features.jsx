import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Benefit 1:",
    text: "Whenever a large amount of text needs to be generated from a machine based on some small amount of text input, GPT-3 provides a good solution. Large language models, like GPT-3, are able to provide decent outputs given a handful of training examples.",
  },
  {
    title: "Benefit 2:",
    text: "GPT-3 also has a wide range of artificial intelligence applications. It is task-agnostic, meaning it can perform a wide bandwidth of tasks without fine-tuning.",
  },
  {
    title: "Benefit 3:",
    text: "As with any automation, GPT-3 would be able to handle quick repetitive tasks, enabling humans to handle more complex tasks that require a higher degree of critical thinking.",
  },
  {
    title: "Benefit 4:",
    text: "GPT-3 is lightweight and can run on a consumer laptop or smartphone.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="ftures">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">What are the benefits of GPT-3 ?</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
