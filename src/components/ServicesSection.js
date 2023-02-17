import React from "react";
import home2 from "../images/home2.png";
// import Icons
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import { About, Image, Description } from "../styles/AboutStyle";
import styled from "styled-components";
function ServicesSection() {
  return (
    <div>
      <Service className="services">
        <Description>
          <h2>
            High <span>quality</span> Services
          </h2>
          <Cards>
            <Card>
              <Icon>
                <img src={clock} alt="clock" />
                <h3>Efficient</h3>
              </Icon>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <Icon>
                <img src={teamwork} alt="teamwork" />
                <h3>TeamWork</h3>
              </Icon>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <Icon>
                <img src={diaphragm} alt="diaphragm" />
                <h3>Diaphragm</h3>
              </Icon>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <Icon>
                <img src={money} alt="money" />
                <h3>Affordable</h3>
              </Icon>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image className="image">
          <img src={home2} alt="services" />
        </Image>
      </Service>
    </div>
  );
}

const Service = styled(About)`
  p {
    width: 70%;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  h3 {
    background-color: #fff;
    color: #000;
    padding: 0.8rem;
    margin-left: 1rem;
  }
`;

const Cards = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 18rem;
`;

export default ServicesSection;
