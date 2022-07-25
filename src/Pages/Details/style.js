import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 4.5rem 7rem;
  gap: 2rem;

  background: var(--purple);
  height: 37.5rem;
  @media (max-width: 1200px) {
    height: auto;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 2.125rem 1rem;
  }
`

export const MovieCover = styled.img`
  width: 23.9375rem;
  height: 35.875rem;
  filter: drop-shadow(0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
  border-radius: 0.5rem;
  @media (max-width: 720px) {
    align-self: center;
  }
`

export const MovieDetail = styled.div`
  max-width: 43.5rem;
  margin-bottom: 15px;
`

export const MovieTitle = styled.h1`
  font-size: 2rem;
`
export const MovieInfo = styled.p`
  margin-top: 0.5rem;
  font-size: 1.125rem;
`

export const Assessment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;

  gap: 0.725rem;
  p {
    line-height: 20px;
  }
`

export const Synopsis = styled.h1`
  font-size: 1.25rem;
  margin-top: 2.0375rem;
`

export const SynopsisText = styled.p`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-indent: 3em;
  text-align: justify;
`

export const CrewContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 33px;
`

export const CrewContent = styled.div`
  margin-left: 2rem;
`

export const CrewTitle = styled.h1`
  font-size: 1rem;
`

export const CrewInfo = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
`

export const MidiaContent = styled.div`
  display: flex;
  margin: 3.75rem 7rem;
  flex-direction: column;
  @media (max-width: 720px) {
    margin: 1rem;
  }
`

export const CastTitle = styled.h1`
  font-size: 1.75rem;
  color: var(--black);
`

export const CastContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`
export const CastCard = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  white-space: normal;
  border-radius: 0.25rem;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  background: var(--white);
  img {
    width: 10.938rem;
  }
`
export const CastName = styled.h1`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--black);
`
export const CharacterName = styled.p`
  margin-top: 0.25rem;
  color: var(--black);
  font-size: 1rem;
  font-weight: 400;
`

export const TrailerTitle = styled.h1`
  margin-top: 2.5rem;
  font-size: 1.75rem;
  color: var(--black);
`

export const MovieTrailer = styled.div`
  margin-top: 1.5rem;
  width: 56.6875rem;
  height: 31.875rem;
  img {
    width: 90%;
  }
  @media (max-width: 900px) {
    width: auto;
    height: 300px;
  }
  @media (max-width: 800px) {
    width: auto;
    height: 300px;
  }
`

export const RecommendationsTitle = styled.h1`
  margin-top: 4rem;
  font-size: 1.75rem;
  color: var(--black);
`

export const MovieRecommendationsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 1.5rem 0.5rem;
  gap: 2rem;
  @media (max-width: 720px) {
    justify-content: center;
    margin: 1rem auto 3rem auto;
    gap: 1rem;
  }
`
