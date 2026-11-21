import { useState, useEffect, } from "react"
import { getTrendingMovies } from "../../servies/appi"
import MovieList from "../../components/MovieList/MovieList"
function Home(){
    const  [movies, setMovies] = useState([])
    useEffect(()=>{
        async function fetchMovies(){
            const data = await getTrendingMovies()
            setMovies(data)
        }
        fetchMovies()
    }, [])

    
    return(
        <>
        <h1>Trending Today</h1>
       
       <MovieList movies={movies} />
        </>
    )
}

export default Home