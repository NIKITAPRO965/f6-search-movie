import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home"
import Movies from "./pages/Movies/Movies"
import MovieDetails from "./pages/MovieDetails/MovieDetails"





function App() {


  return (
   <>
   <nav>
      <NavLink to="/">Home</NavLink>{" / "}
      <NavLink to="/movies">Movies</NavLink>
    </nav>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:movieId' element={<MovieDetails/>}/>
     </Routes>
   </>
  )
}

export default App
