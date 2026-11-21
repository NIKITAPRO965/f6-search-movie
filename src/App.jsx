import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home"
import Movies from "./pages/Movies/Movies"
import MovieDetails from './pages/MovieDetails/MovieDetails'
import Cast from './pages/Cast/Cast'
import Reviews from './pages/Reviews/Reviews'




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
      <Route path='/movies/:movieId' element={<MovieDetails/>}>
      <Route path='cast' element={<Cast/>}/>
      <Route path='reviews' element={<Reviews/>}/>
      </Route>
     </Routes>
   </>
  )
}

export default App
