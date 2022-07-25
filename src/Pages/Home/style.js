import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  margin: 1.875rem 7rem;
  gap: 2rem;

  @media (max-width: 720px) {
    width: 100vw;
    justify-content: center;
    margin: 2rem 1rem;
    gap: 1rem;
  }

  @media (min-width: 1200px) {
    width: 100vw;
    justify-content: center;
    margin: 2rem 1rem;
    gap: 1rem;
  }
`

