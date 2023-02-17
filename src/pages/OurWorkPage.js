import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MovieState } from "../MovieState";
import Movie from "../components/Movie";
import { pageTransition } from "../animation";
function OurWorkPage() {
  const [movies, setMovies] = useState(MovieState());
  return (
    <Work
    variants={pageTransition}
     initial="hidden"
     animate="show"
    //  exit="exit" 
    >
      {movies.map((movie) => (
        <Movie key={movie.url} title={movie.title} image={movie.mainImg} url={movie.url} />
      ))}
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: white;
  color: white;
`;

export default OurWorkPage;
