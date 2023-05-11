import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Creativity",
    text: "GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style.",
  },

  {
    title: "Longer context",
    text: "GPT-4 is capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis.",
  },
  
  {
    title: "Visual input",
    text: "GPT-4 can accept images as inputs and generate captions, classifications, and analyses.",
  },
  
 /*  {
    title: "Benefit 4:",
    text: "GPT-3 is lightweight and can run on a consumer laptop or smartphone.",
  }, */
];

const Features = () => (
  <div className="gpt3__features section__padding" id="ftures">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">What are the benefits of GPT-4 ?</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
