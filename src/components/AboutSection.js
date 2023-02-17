import React from "react";
import { About, Description, Hide, Image } from "../styles/AboutStyle";
import home1 from "../images/home1.png";
function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          nobis!
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="capture" />
      </Image>
    </About>
  );
}

export default AboutSection;
