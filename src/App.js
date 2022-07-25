import HomePage  from './Pages/Home/Home';
import Header from './Components/Header/Header';
import MovieDetails from './Pages/Details/Details';
import MoviesProvider from './Services/getMovies';
import ErrorPage from './Pages/Error/Error';

import { GlobalStyle } from './Constants/GlobalStyle'

import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <MoviesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route element={<ErrorPage />} />
      </Routes>
      <GlobalStyle />
    </MoviesProvider>
  )
}
