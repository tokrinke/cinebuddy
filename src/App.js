import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import MovieCards from './components/movieCards';
import SelectedMovie from './components/selectedMovie';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const  isMovieSelected  = useSelector(state => state.movieReducer.isMovieSelected)

  return (
    <div className="main-bg">
        <Header />
        <div className="splitter border-b border-neutral-900 text-center shadow-lg">
          <strong className='text-2xl text-white'>RECOMMENDED</strong>
        </div>
        <section className='hero-section'>
          <MovieCards/>
        </section>
        {isMovieSelected && <SelectedMovie />}
    </div>
  );
}

export default App;
