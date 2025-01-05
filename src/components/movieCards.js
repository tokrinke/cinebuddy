import { useEffect, useState } from 'react';
import '../styles/moviecard.css';
import { Star, Clock, Calendar } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie, closeMovie } from '../redux/selectMovieSlice'

const MovieCards = () => {
    const [movies, setMovies] = useState([]);
    const isMovieSelected = useSelector(state => state.movieReducer.isMovieSelected)
    const dispatch = useDispatch()
    const movieNames = [
        "The Dark Knight",
        "Inception",
        "The Shawshank Redemption",
        "The Godfather",
        "Forrest Gump",
        "Pulp Fiction",
        "The Matrix",
        "Interstellar",
        "Se7en",
        "Fight Club",
        "Memento",
        "Good Will Hunting",
      ];
    const apikey = process.env.REACT_APP_APIKEY

    useEffect(()=>{
       const fetchMovies = async () => {
        try {
            const fetchedMovies = []
            for(let movie of movieNames){
                const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&t=${movie}`);
                const data = await response.json()

                if (data.Response === "True") {
                    fetchedMovies.push(data);
                  } else {
                    console.error(`Movie not found: ${movie}`);
                  }
            }
            console.log(fetchedMovies)
            setMovies(fetchedMovies);
        } catch (error) {
            console.log(error)
        }
       }
       fetchMovies()
    }, [])

    return ( 
        movies.length === 0 ? (<p className='text-transparent bg-gradient-to-r 
        from-red-700 to-pink-700 bg-clip-text animate-gradientLoop 
        bg-[length:200%_200%] sm:text-4xl text-2xl font-bold'>Loading...</p>) : 
            (
                movies.map((movie, index)=>(
                    <div className="movie-card-wrapper">
                <div className="movie-card" key={index} onClick={()=>dispatch(selectMovie(movie))}>
                    <div className='m-c-left'>
                        <img className='card-poster'
                       src={movie.Poster} 
                       alt=""
                        />
                   </div>
                   <div className='m-c-right p-2'>
                       <h2 className='movie-title'>{movie.Title}</h2>
                       <div className='flex flex-col overflow-scroll'>
                           <strong className='flex flex-row gap-1 text-sm '><Clock size={18} strokeWidth={3}/>{movie.Runtime}</strong>
                           <span className='text-sm text-neutral-500'>{movie.Genre}</span>
                           <span className='font-semibold  text-base'>Director: {movie.Director}</span>
                           <p className='movie-plot'>
                            {movie.Plot}
                           </p>
                           <span className='movie-released sm:visible invisible '>
                               <Calendar size={16} />{movie.Released}</span>
                       </div>
                       <span className='card-rating font-bold'><Star size={18} color='#f5c518'/>{movie.imdbRating}/10</span>
                   </div>
               </div>
           </div>
                ))
            )
     );
}
 
export default MovieCards;