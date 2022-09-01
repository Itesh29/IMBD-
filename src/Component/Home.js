import React, { useEffect, useState } from "react";
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'

const Home = () =>{
    const [popularMovies,setPopularMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, []) 
    return(
        <div className="Home">
            <div className="Poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:'none',color:'white'}} to={'/movie/${movie.id}'}>
                                <div className="Poster-img">
                                    <img src={`https://image.tmdb.org/t/p/original ${movie && movie.backdrop_path}`} alt='#'></img>
                                </div>
                                <div className="Poster-img-overlay">
                                    <div className="Poster-img-title">{movie ? movie.original_title: ''}</div>
                                    <div className="Poster-img-runtime">
                                        {movie ? movie.release_date:''}
                                        <span className="Poster-img-rating">
                                            {movie ? movie.vote_average:''}
                                            <i className="fas fa-start"> {' '}</i>
                                        </span>
                                    </div>
                                    <div className="Poster-img-discription">{movie ? movie.overview :''}</div>
                                </div>
                            </Link>
                        ))
                    }

                </Carousel>
            </div>
        </div>
    )
}

export default Home;