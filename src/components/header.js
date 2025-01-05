import { useState } from 'react';
import '../styles/header.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie, closeMovie } from '../redux/selectMovieSlice'
import { useSnackbar } from 'notistack';

const Header = () => {
    const [searching, setSearching] = useState(false)
    const { enqueueSnackbar } = useSnackbar()
    const apikey = process.env.REACT_APP_APIKEY
    const isMovieSelected = useSelector(state => state.movieReducer.isMovieSelected)
    const dispatch = useDispatch()
    const [searchVal, setSearchVal] = useState(null)

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&t=${searchVal}&plot=full`)
            const data = await response.json()
            dispatch(selectMovie(data))
            setSearchVal('')
            setSearching(false)
            // console.log(response)
            // if(!response.error){
            //     dispatch(selectMovie(data))
            //     setSearchVal('')
            //     setSearching(false)
            // }else{
            //     enqueueSnackbar("Movie not found!",
            //         {
            //             variant : "error",
            //             anchorOrigin: {
            //                 vertical: "top",
            //                 horizontal: "right"
            //             }
            //         }
            //     )
            // }
        } catch (error) {
            enqueueSnackbar("Movie not found.",
                {
                    variant : "error",
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "right"
                    }
                }
            )
        }
    }
    const handleKeyDown = (e)=>{
        if(e.key === 'Enter'){
            handleSearch()
            setSearching(true)
        }
    }


    return ( 
        <div className="header-wrapper">
            <header>
                <div className='header-cont'>
                    <h1 
                    className='title'>CINEBUDDY</h1>
                    <div>
                        <input 
                        className='searchbar'
                        placeholder='Type a movie name to begin your search...'
                        value={searchVal}
                        onChange={(e)=>setSearchVal(e.target.value)}
                        onKeyDown={handleKeyDown}
                        type="search" />
                    </div>
                </div>
            </header>
            {searching && <div className="searching">
                <p className='text-transparent bg-gradient-to-r from-red-700
                 to-pink-700 bg-clip-text animate-gradientLoop bg-[length:200%_200%]
                sm:text-4xl text-2xl font-bold'>Searching...</p>
            </div>}
        </div>
     );
}
 
export default Header;