import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';
import Header from './components/header/Header';
import MainNav from './components/header/MainNav';
import Movies from './pages/movies/Movies';
import Search from './pages/search/search';
import Series from './pages/series/Series';
import Trending from './pages/trending/Trending';


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <div className="app">
        <Container>
          <Routes>
            <Route path='/' element={<Trending/>} exact></Route>
            <Route path='/movies' element={<Movies/>}></Route>
            <Route path='/series' element={<Series/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
          </Routes>  
        </Container>
      </div>
      <MainNav/>
    </BrowserRouter>
  )
}

export default App
