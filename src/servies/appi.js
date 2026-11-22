const API_KEY = "d2e0e65ace2eb05d48b240c0c9604f7b"
import axios from "axios"


export async function getTrendingMovies() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    }
  );

  return response.data.results;
}



export async function getMovieDetailes(movieID){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}`,{
        params: {
            api_key:API_KEY,
        }
    })
    return response.data
}


export async function getMovieCredits(movieID){
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits`,{
    params: {
      api_key: API_KEY,
    }
  })
  return response.data.cast
}

export async function getMovieReviews(movieID){
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/reviews`,{
    params: {
      api_key: API_KEY,
    }
  })
  return response.data.results
}

export async function searchMovies(query) {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: API_KEY,
        query,
      },
    }
  );

  return response.data.results;
}