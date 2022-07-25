import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 9.375rem;
  height: 18.75rem;
  margin: auto;
  white-space: normal;
  cursor: pointer;
`

export const MovieTitle = styled.strong`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: black;
`

export const MovieDate = styled.p`
  margin-top: 0.3rem;
  font-size: 0.875rem;
  font-weight: bold;
  color: gray;
`