import styled from 'styled-components'

export const MovieInfoContainer = styled.div`
    padding: 50px;
    display: flex;
    background-color: #2D0C5E;
    color: #ffffff;
    height: 349px;
img{
    border-radius: 5px;
    margin-left: 20px;
    height: 454px;
}
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
p{
    font-size: 12px;
}
`

export const Date = styled.div`
    display: flex;
    align-items: center;
`

export const Sinopse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 496px;
`
export const VoteAverage = styled.div`
    display: flex;
div{
    margin-right: 10px;
}
`

export const Paragraph = styled.p`
    display: flex;
    align-items: center;
    position: absolute;
    width: 185px;
    height: 32px;
    left: 112px;
    top: 580px;
`