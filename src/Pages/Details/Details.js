import axios from 'axios'
import ReactPlayer from 'react-player/youtube'
import 'react-circular-progressbar/dist/styles.css'
import Movie from '../../Components/Movies/Movies'
import imgNotFound from '../../Assets/imagenotfound.png'
import imgVideoNotFound from '../../Assets/videonotfound.png'


import {
  Content,
  CastCard,
  CastName,
  CrewInfo,
  Synopsis,
  CrewTitle,
  CastTitle,
  Container,
  MovieInfo,
  Assessment,
  MovieCover,
  MovieTitle,
  CrewContent,
  MovieDetail,
  MidiaContent,
  MovieTrailer,
  SynopsisText,
  TrailerTitle,
  CastContainer,
  CharacterName,
  CrewContainer,
  RecommendationsTitle,
  MovieRecommendationsContainer
} from './style'

import {
  format,
  getYear
} from 'date-fns'

import {
  useState,
  useEffect
} from 'react'

import {
  Link,
  useParams
} from 'react-router-dom'

import {
  buildStyles,
  CircularProgressbar
} from 'react-circular-progressbar'


import {
  BASE_URL,
  API_KEY,
  BASE_IMAGE_URL,
  BASE_YT_URL
} from '../../Constants/base_url'

export default function MovieDetails(params) {
  const { id } = useParams()

  const [movieDetails, setMovieDetails] = useState([])

  const [movieCurrent, setMovieCurrent] = useState([])

  const [movieRecommendations, setMovieRecommendations] = useState([])

  const [realeseDate, setRealeaseDate] = useState({})

  const [castInfo, setCastInfo] = useState([])

  const [crewInfo, setCrewInfo] = useState([])

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    try {
      axios
        .get(
          `${BASE_URL}${id}?${API_KEY}&append_to_response=videos&language=pt-BR`
        )
        .then(response => setMovieDetails(response.data))

      axios.get(`${BASE_URL}${id}/release_dates?${API_KEY}`)
      .then(response => {
        const data = response.data.results

        for (let obj of data) {
          if (obj.iso_3166_1 === 'BR') {
            setRealeaseDate(obj)
            break
          }
        }
      })

      axios
        .get(`${BASE_URL}${id}/credits?${API_KEY}&language=pt-BR`)
        .then(response => setCastInfo(response.data.cast))

      axios
        .get(`${BASE_URL}${id}/credits?${API_KEY}&language=pt-BR`)
        .then(response => {
          const data = response.data.crew
          let filteredData = []

          for (let obj of data) {
            if (['Characters', 'Director', 'Writer']
            .includes(obj.job)) {
              filteredData
            .push(obj)
            }
          }
          setCrewInfo(filteredData)
        })

      axios
        .get(
          `${BASE_URL}${id}/recommendations?${API_KEY}&language=pt_BR&page=1`
        )
        .then(response => setMovieRecommendations(response.data.results))
    } catch (error) {
      console.log(error)
    }
  }, [id, movieCurrent])

  const {
    title,
    poster_path,
    vote_average,
    release_date,
    runtime,
    genres,
    videos
  } = movieDetails

  let percentage = (vote_average / 100) * 10

  const dateFormated = release_date
    ? format(new Date(release_date), 'dd/MM/yyyy')
    : ''
  const year = release_date ? getYear(new Date(release_date)) : ''
  const movieHour = runtime ? Math.floor(runtime / 60) : ''
  const movieMin = runtime ? runtime % 60 : ''

  return (
    <Container>
      <Content>
        <MovieCover
          src={`${BASE_IMAGE_URL}original/${poster_path}`}
          alt={title}
        />
        <MovieDetail>
          <MovieTitle>
            {title} ({year})
          </MovieTitle>
          <MovieInfo>
            <p>Classificação:</p>
            Faixa etária: {realeseDate && realeseDate.iso_3166_1
              ? realeseDate.release_dates[0].certification
              : ''}{' '}
            anos<br/>
            Lançamento: {dateFormated}<br/>
            Dublado: (BR)<br/>
            Duração: {movieHour}h {movieMin}min<br/>
            Tipo:
            {genres
              ? genres.map(
                  (genre, index) =>
                    ` ${genre.name}${index + 1 === genres.length ? ' ' : ', '}`
                )
              : ''}
          </MovieInfo>
          <Assessment>
            <div style={{ width: 65 }}>
           <CircularProgressbar
                value={percentage}
                maxValue={1}
                text={`${vote_average * 10}%`}
                styles={buildStyles({
                  rotation: 0.5 + (1 - percentage / 100) / 2,
                  pathColor: '#14FF00',
                  textColor: '#14FF00',
                  trailColor: '#FFFFFF',
                  backgroundColor: '#14FF00',
                })}
              />
            </div>
            <p>
              Avaliação dos usuários
            </p>
          </Assessment>

          <Synopsis>Sinopse</Synopsis>
          <SynopsisText>
            {movieDetails ? movieDetails.overview : 'Sinopse Não encontrada'}
          </SynopsisText>

          <CrewContainer>
            {crewInfo.map(crew => (
              <CrewContent key={crew.id}>
                <CrewTitle>{crew.name}</CrewTitle>
                <CrewInfo>{crew.job}</CrewInfo>
              </CrewContent>
            ))}
          </CrewContainer>
        </MovieDetail>
      </Content>
      <MidiaContent>
        <CastTitle>Elenco:</CastTitle>
        <CastContainer>
          {castInfo.map(cast => (
            <CastCard key={cast.id}>
              <img
                src={
                  cast.profile_path === null
                    ? imgNotFound
                    : `${BASE_IMAGE_URL}original/${cast.profile_path}`
                }
                alt={cast.name}
              />
              <CastName>{cast.name}</CastName>
              <CharacterName>{cast.character}</CharacterName>
            </CastCard>
          ))}
        </CastContainer>
        <TrailerTitle>Trailer</TrailerTitle>

        <MovieTrailer>
          {videos && videos.results.length ? (
            <ReactPlayer
              width="100%"
              height="100%"
              url={`${BASE_YT_URL}${videos ? videos.results[0].key : ''}`}
              controls={true}
            />
          ) : (
            <>
              <img src={imgVideoNotFound} alt="VideoNotFounded" />
            </>
          )}
        </MovieTrailer>

        <RecommendationsTitle>Recomendações</RecommendationsTitle>
        <MovieRecommendationsContainer>
          {movieRecommendations.map(movie => (
            <Link
              style={{ textDecoration: 'none' }}
              onClick={() => setMovieCurrent(movie.id)}
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
        </MovieRecommendationsContainer>
      </MidiaContent>
    </Container>
  )
}
