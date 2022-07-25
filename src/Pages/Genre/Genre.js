import React, { useContext } from 'react'
import { MoviesContext } from '../../Services/getMovies'

import {
  Container,
  GenreButton,
  Content,
} from './style'

export default function Genres() {
    const {
      genres,
      filters,
      handleFilterGenres
    } = useContext(MoviesContext)

    return (
      <Container>
        <Content>

          <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
  
          <h2>Filtre por:</h2>

          {genres.map(genre => (
            <GenreButton
              key={genre.id}
              type="button"
              marked={filters.includes(genre.id)}
              onClick={() => handleFilterGenres(genre.id)}
            >
              {genre.name}
              {filters.includes(genre.id) }
            </GenreButton>
          ))}
        </Content>
      </Container>
    )
  }
