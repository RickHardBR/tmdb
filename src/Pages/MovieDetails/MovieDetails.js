import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { getMovieDetails } from '../../Services/getMovies';
import { Date, Description, MovieInfoContainer, Paragraph, Sinopse, VoteAverage } from './style';


function MovieDetails() {

    const [movie, setMovie] = useState([])
    const params = useParams()

    useEffect(() => {
        getMovieDetails(params.id, setMovie)
    }, [params.id])



    const movieDetails = movie &&
        <MovieInfoContainer>
            {movie.poster_path && <img alt="Poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />}
            <Description>
                <h2>{movie.title && movie.title}</h2>
                <Date>
                    <p>{movie.release_date && movie.release_date.split('-').reverse().join('/')} (BR) • </p>
                    {movie.genres && movie.genres.map((genre) => {
                        return <p>{genre.name && genre.name.replace('', ', ')}</p>
                    })}
                    <p> • {movie.runtime && movie.runtime + ' min'}</p>
                </Date>
                <VoteAverage>
                    <div>
                        <p>{movie.vote_average && movie.vote_average * 100}%</p>
                    </div>
                    <p> Avaliação dos usuários</p>
                </VoteAverage>
                <Sinopse>
                    <h5>Sinopse</h5>
                    <p>{movie.overview && movie.overview}</p>
                </Sinopse>
            </Description>
        </MovieInfoContainer>

    return (
        <div>
            <Header />
            <div>
                {movieDetails}
            </div>
            <Paragraph>
                Elenco original
            </Paragraph>
        </div>
    )
}

export default MovieDetails;