import { useContext } from 'react'
import Genres from '../Genre/Genre'
import { Link } from 'react-router-dom'
import Movie from '../../Components/Movies/Movies'
import { MoviesContext } from '../../Services/getMovies'
import Paginate from '../../Services/Paginate/paginate'

import {
  Container,
  Content
} from './style'

export default function HomePage() {
  const {
    movies,
    filteredMovies
  } = useContext(MoviesContext)

  return (
    <>
      <Genres />
      <Container>
        <Content>
          {filteredMovies.length > 0
            ? filteredMovies.map(movie => (
                <Link
                  style={{ textDecoration: 'none' }}
                  key={movie.id}
                  to={`/moviedetails/${movie.id}`}
                >
                  <Movie
                    title={movie.title}
                    imagePath={movie.poster_path}
                    dateRelease={movie.release_date}
                  />
                </Link>
              ))
            : movies.map(movie => (
                <Link
                  style={{ textDecoration: 'none' }}
                  key={movie.id}
                  to={`/moviedetails/${movie.id}`}
                >
                  <Movie
                    title={movie.title}
                    imagePath={movie.poster_path}
                    dateRelease={movie.release_date}
                  ></Movie>
                </Link>
              ))}
        </Content>
        {filteredMovies.length > 1 ? (
          <></>
        ) : (
          <Paginate />
        )}
      </Container>
    </>
  )
}
