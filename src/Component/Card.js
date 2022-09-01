import React, { useEffect } from "react";
import './Card.css'
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import {Link} from 'react-router-dom';

const Card = ({movie}) => {
    const [isLoading, setIsLoading] = useEffect(true)
    useEffect(() => {
        setTimeout( () => {
            setIsLoading(false)
        },1500)
    },[])
    return(
        <>
            isLoading
            ?
            <div className='cards'>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2}/>
 
                </SkeletonTheme>
            </div>
            :
            <Link to={`movie/${movie.id}`} style={{textDecoration:'none',color:"white"}}>
                <div className="cards">
                    <img  className="cards-img" src={` https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="#" ></img>
                    <div className="cards-overlay">
                        <div className="cards-title">{movie?movie.original_title:''}</div>
                        <div className="cards-runtime"> 
                            {movie?movie.release_date:''} 
                            <span className="cards-rating">{movie?movie.vote_avetage:''}<i className='fas fa-star'/></span>
                        </div>
                        <div className="cards-description">{movie?movie.overview.slice(0,118)+"...":''}</div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card;