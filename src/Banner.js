import React, { useEffect, useState } from 'react'
import './Banner.css';
import requests from './request';
import axios from './axios';
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOriginals);
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ])
            return response;
        }
        fetchData()
        // console.log(movie)
    }, [])

  function turncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...":str;
  }
    return (
        <header className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                <div className="banner__buttons">
                    <button className="banner__button">play</button>
                    <button className="banner__button">my list</button>
                </div>
                <h1 className="banner__discription">
                    {turncate(movie.overview, 150)}
                </h1>
            </div>

            <div className="fadebottom"></div>
        </header>
    )
}

export default Banner
