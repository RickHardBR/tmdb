import React from 'react'
import { Button } from './styled';

function MovieGenre(props) {

    const { name } = props

    return (
        <Button>{name}</Button>
    );
}

export default MovieGenre;