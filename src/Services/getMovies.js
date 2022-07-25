import axios from 'axios'

import {
  createContext,
  useEffect,
  useState
} from 'react'

import {
  BASE_GENRE_URL,
  BASE_URL,
  API_KEY
} from '../Constants/base_url'

export const MoviesContext = createContext([])

export default function MoviesProvider(params) {
  const [movies, setMovies] = useState([])

  const [genres, setGenres] = useState([])
  
  const [filters, setFilters] = useState([])

  const [filteredMovies, setFilteredMovies] = useState([])

  const [page, setPage] = useState(1)

  useEffect(() => {
    try {
      axios
        .get(`${BASE_URL}popular?${API_KEY}&language=pt-BR&page=${page}`)
        .then(response => setMovies(response.data.results))

      axios
        .get(`${BASE_GENRE_URL}list?${API_KEY}&language=pt-BR`)
        .then(response => setGenres(response.data.genres))
    } catch (error) {
      console.log(error)
    }
  }, [page])

  useEffect(() => {
    try {
      let filteredMovies = []

      movies.forEach(movie => {
        for (let filter of filters) {
          if (movie.genre_ids.includes(filter)) {
            filteredMovies = [...filteredMovies, movie]
            break
          }
        }
      })
      setFilteredMovies(filteredMovies)
    } catch (error) {
      console.log(error)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  function handleFilterGenres(genre) {
    if (filters.includes(genre)) {
      const index = filters.indexOf(genre)

      if (index === 0) {
        setFilters([...filters.slice(index + 1)])
      } else {
        setFilters([...filters.slice(0, index), ...filters.slice(index + 1)])
      }
    } else {
      setFilters([...filters, genre])
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        genres,
        movies,
        filters,
        filteredMovies,
        setPage,
        handleFilterGenres
      }}
    >
      {params.children}
    </MoviesContext.Provider>
  )
}
