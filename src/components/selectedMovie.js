import '../styles/selectedmovie.css';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie, closeMovie } from '../redux/selectMovieSlice'

const SelectedMovie = () => {
    const isMovieSelected = useSelector(state => state.movieReducer.isMovieSelected)
    const selectedMovie = useSelector(state => state.movieReducer.selectedMovie)
    const dispatch = useDispatch()
    return ( 
        <div className="selected-movie-wrapper">
            <div className="selected-movie-cont">
                <X size={36} className='close-btn' onClick={()=>dispatch(closeMovie())}/>
                    <div className="s-m-left">
                        <div className="s-m-l-top">
                            <h1 className='movie-title-sm py-2'>{selectedMovie.Title}</h1>
                            <img className='s-m-left-poster'
                                src={selectedMovie.Poster} alt="Movie Poster" />
                            <span 
                            className='lg:text-base xl:text-xl font-semibold text-neutral-300 '>
                               {selectedMovie.Language} | {selectedMovie.Year}</span>
                        </div>
                        <div className="raitings">
                            <div className="rottentomatoes rater">
                                <div className="image-bg">
                                    <strong>{selectedMovie.Ratings[1].Value}</strong>
                                    <img className='lg:rounded-bl-xl'
                                     src="/images/rottentomatoes.png" alt="rottentomatoes rating" />
                                </div>
                            </div>
                            <div className="imdb rater">
                                <div className="image-bg">
                                    <strong>{selectedMovie.Ratings[0].Value}</strong>
                                    <img src="/images/imdb.png" alt="imdb rating" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s-m-right">
                        <div className="details">
                            <div className='detail'>
                                Genre
                                <p className='gray-text'>{selectedMovie.Genre}</p>
                            </div>
                            <div className='detail'>
                                Release Date:
                                <p className='gray-text'>{selectedMovie.Released}</p>
                            </div>
                            <div className='detail'>
                                Director
                                <p className='gray-text'>{selectedMovie.Director}</p>
                            </div>
                            <div className='detail'>
                                Actors
                                <p className='gray-text'>{selectedMovie.Actors}</p>
                            </div>
                            <div className='detail'>
                                Plot
                                <p className='gray-text p-2 md:p-0 md:h-[30%]'>{selectedMovie.Plot}</p>
                            </div>
                            <div className='detail animate-gradientLoop bg-gradient-to-r from-[#B8860B]
                                 to-[#FFD700] bg-clip-text text-transparent bg-[length:200%_200%]'>
                                Awards
                                <p>{selectedMovie.Awards}</p>
                            </div>
                            <div className='border-none detail detail animate-gradientLoop bg-gradient-to-r from-green-400
                                 to-green-700 bg-clip-text text-transparent bg-[length:200%_200%]'>
                                Box Office
                                <p>{selectedMovie.BoxOffice}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default SelectedMovie;