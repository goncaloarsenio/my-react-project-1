import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <h3>Start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt3__cta-button">
      <a href="https://chat.openai.com/" target="_blank" rel="noreferrer">
        <button type="button" >Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default CTA;
