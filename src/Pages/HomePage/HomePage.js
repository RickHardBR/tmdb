import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import MovieCard from '../../Components/Movies/Movies'
import { ButtonsContainer, CardContainer, DescriptionContainer, GenreContainer, MainContainer } from './style'
import { getMovies, getMovieGenres } from '../../Services/getMovies'
import MovieGenre from '../../Components/MovieGenre/MovieGenre'
import { goToMovieDetails } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

function HomePage() {

  const [movies, setMovies] = useState([])
  const [genre, setGenre] = useState([])
  const history = useNavigate()

  useEffect(() => {
    getMovies(setMovies)
  }, [])

  useEffect(() => {
    getMovieGenres(setGenre)
  }, [])

  const onClickCard = (id) => {
    goToMovieDetails(history, id)
  }

  const genreList = genre && genre.map((genre) => {
      return <MovieGenre
        key={genre.id}
        id={genre.id}
        name={genre.name}
      />
    })

  const movieList = movies && movies.map((movie) => {
      return <MovieCard
        key={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        release_date={movie.release_date}
        onClickCard={() => onClickCard(movie.id)}
      />
    })

  return (
    <MainContainer>
      <Header />
      <GenreContainer>
        <DescriptionContainer>
          <h3>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h3>
          <p>FILTRE POR:</p>
        </DescriptionContainer>
        <ButtonsContainer>
          {genreList}
        </ButtonsContainer>
      </GenreContainer>
      <CardContainer>
        {movieList}
      </CardContainer>
    </MainContainer>
  );
}

export default HomePage;