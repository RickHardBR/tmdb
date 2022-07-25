import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: var(--purple);
`
export const Content = styled.div`
  max-width: 1033px;
  margin: 0 auto;
  text-align: center;
  padding: 5.3rem 0;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 3.5rem;

    color: var(--white);
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    font-weight: 700;
    line-height: 3.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: var(--white);
  }

  @media (max-width: 720px) {
    text-align: center;
    margin: 0 1rem 0;
  }
`

export const GenreButton = styled.button`
  height: 2rem;
  width: auto;
  padding: 0.5rem 1rem;
  margin-left: 0.7rem;
  margin-inline-start: 0.5rem;
  margin-bottom: 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;

  background-color: ${props => (props.marked ? '#D18000' : '#fff')};
  color: ${props => (props.marked ? '#FFFFFF' : '#323232')};
  svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0.1rem;
  }
  `