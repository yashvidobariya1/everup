import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import './Faqs.css';

const faqs = [
  {
    question: 'What is BrandBee?',
    answer: 'Share your opinion, get rewarded! The BrandBee app allows you to earn rewards by completing surveys and cash out instantly for gift cards from great brands like Amazon.com, Starbucks, and many more!',
  },
  {
    question: 'How do I earn rewards?',
    answer: 'Complete surveys, tasks, or offers in the app to earn points, which can be exchanged for gift cards.',
  },
  {
    question: 'How much money do I get for completing a survey?',
    answer: 'It depends on the survey! Some pay a few cents, others several dollars based on length and availability.',
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Got a question?<br />Check out our FAQs</h1>
      {faqs.map((faq, index) => (
        <div
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            {faq.question}
            <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}><MdExpandMore/></span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
      {/* <button className="download-button">📥 Get BrandBee Mobile</button> */}
    </div>
  );
}

export default Faqs;
