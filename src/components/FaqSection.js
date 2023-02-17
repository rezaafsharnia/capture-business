import React from "react";
import styled from "styled-components";
import { About } from "../styles/AboutStyle";
function FaqSection() {
  return (
    <div>
      <Faq>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <Question>
          <h4>How Do I Start?</h4>
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, cumque.
            </p>
          </Answer>
          <div className="faq-line"></div>
        </Question>
        <Question>
          <h4>Daily schedule</h4>
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, cumque.
            </p>
          </Answer>
          <div className="faq-line"></div>
        </Question>
        <Question>
          <h4>Different Payments Methods</h4>
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, cumque.
            </p>
          </Answer>
          <div className="faq-line"></div>
        </Question>
        <Question>
          <h4>What Products Do You Offer?</h4>
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, cumque.
            </p>
          </Answer>
          <div className="faq-line"></div>
        </Question>
      </Faq>
    </div>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 5rem;
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    width: 100%;
  }
`;

const Question = styled.div`
  padding: 2rem 0rem;
  h4 {
    font-size: 1.5rem;
    padding: 1rem 0rem;
  }
`;

const Answer = styled.div`
padding: 2rem 0rem;
display: none;
`;



export default FaqSection;
