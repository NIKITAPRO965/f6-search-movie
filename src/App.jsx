import { Route, Routes, NavLink } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
// import Home from "./pages/Home/Home"
const Home = lazy(()=>import("./pages/Home/Home"))
// import Movies from "./pages/Movies/Movies"
const Movies = lazy(()=>import("./pages/Movies/Movies"))
// import MovieDetails from './pages/MovieDetails/MovieDetails'
const MovieDetails = lazy(()=>import('./pages/MovieDetails/MovieDetails'))
import Cast from './pages/Cast/Cast'
import Reviews from './pages/Reviews/Reviews'




function App() {


  return (
   <>
   <nav>
      <NavLink to="/">Home</NavLink>{" / "}
      <NavLink to="/movies">Movies</NavLink>
    </nav>
    <Suspense fallback={<p>loading</p>}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:movieId' element={<MovieDetails/>}>
      <Route path='cast' element={<Cast/>}/>
      <Route path='reviews' element={<Reviews/>}/>
      </Route>
     </Routes>
     </Suspense>
   </>
  )
}

export default App
