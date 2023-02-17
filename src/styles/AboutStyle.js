import styled from "styled-components";

export const About = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 5rem 10rem;
  min-height: 90vh;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 3rem;
  h2 {
    font-weight: lighter;
  }
  p {
    padding: 3rem 0rem;
  }
`;

export const Image = styled.div`
  flex: 0.8;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
