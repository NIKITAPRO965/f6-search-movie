// import style from "./Home.module.css"
import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../servies/appi"

function Home(){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        async function fetchMovies(){
            const data = await getTrendingMovies()
            setMovies(data)
        }
        fetchMovies()
    }, [])

    console.log(movies);
    
return(<>
<h1>Home</h1>
<ul>
    {movies.map((movie)=>{
        return(
            <li key={movie.id}>{movie.title}</li>
        )
    })}
</ul>
</>)
}

export default Home