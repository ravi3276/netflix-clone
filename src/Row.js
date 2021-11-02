import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';

const base_url="https://image.tmdb.org/t/p/original";
function Row({title,Urls,isLargeRow}) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
       async function fetchData(){
           const response = await axios.get(Urls);
           setMovie(response.data.results)

           return response
       }
       fetchData();
    }, [Urls])
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>

            <div className="row__img">
                {
                    movie.map((data) =>{
                        return <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                             key={data.id}
                             src={`${base_url}${isLargeRow? data.poster_path : data.backdrop_path} `}
                             alt={data.name} 
                              />
                    })
                }
            </div>
        </div>
    )
}

export default Row
