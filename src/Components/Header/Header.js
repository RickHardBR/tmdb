import React from 'react'
import logo from '../../Assets/logo.svg'
import { Container } from './style';
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/Coordinator';

export default function Header() {
  const history = useNavigate()
  return (
    <Container>
      <header>
        <img
          src={logo}
          alt="Tmdb logo"
          onClick={() => goToHome(history)}
        />
      </header>
    </Container>
  )
}