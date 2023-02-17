import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieState } from "../MovieState";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function MovieDetail() {
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  useEffect(() => {
    getMovies();
  }, [movies, location]);
  console.log(location.pathname);
  //   console.log(location)
  const getMovies = () => {
    const findedMovie = movies.find((movie) => movie.url === location.pathname);
    setMovie(findedMovie);
    console.log(findedMovie);
  };
  console.log(movie);
  return (
    <>
      {movie && (
        <MovieDetailStyle>
          <Banner>
            <BlackCover
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              src={movie.mainImg}
              alt={movie.title}
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              {movie.title}
            </motion.h2>
          </Banner>
          <Awards>
            <h3>Awards</h3>
            <AwardsStyle>
              {movie.awards.map((award) => {
                return (
                  <Award>
                    <h4>{award.title}</h4>
                    <p>{award.description}</p>
                  </Award>
                );
              })}
            </AwardsStyle>
          </Awards>
          <Image>
            <img src={movie.secondaryImg} />
          </Image>
        </MovieDetailStyle>
      )}
    </>
  );
}

const MovieDetailStyle = styled(motion.div)`
  color: white;
`;

const Banner = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
  h2 {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 8rem;
    font-weight: bold;
  }
`;
const BlackCover = styled(motion.div)`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Awards = styled.div`
  padding: 4rem 5rem;
  h3 {
    color: #fdc830;
    font-weight: bold;
    font-size: 3rem;
    padding: 2rem 0rem;
  }
  h4 {
    font-size: 1.5rem;
    padding: 1rem 0;
  }
`;

const AwardsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Award = styled.div`
  p {
    width: 70%;
  }
`;

const Image = styled.div`
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
