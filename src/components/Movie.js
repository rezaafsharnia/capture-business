import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Movie({title,image,url}) {
  return (
    <MovieStyle>
      <h2>{title}</h2>
      <div className="line"></div>
      <Link to={url}>
        <img src={image} alt="the-athlete" />
      </Link>
    </MovieStyle>
  );
}

const MovieStyle = styled.div`
  padding-bottom: 8rem;
  h2 {
    padding: 1rem 0rem;
    color: #000;
  }
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 80vh;
  }
`;

export default Movie;
