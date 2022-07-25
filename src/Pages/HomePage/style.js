import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 25px;
    margin: 20px 50px;
`

export const GenreContainer = styled.div`
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #2D0C5E;
    color: #ffffff;
    height: 349px;
`

export const DescriptionContainer = styled.div`
    width: 47%;
    font-size: 27px;
p{
    font-size: 15px;
}
`

export const ButtonsContainer = styled.div`
    margin: 16px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 75%;
`