import { useState ,useEffect } from "react";
import "./Banner.css"
import instance from "../../Services/instance";
import requests from "../../Services/requests";
export const Bannner = ()=>{


    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie ( request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
                );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);




    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1)+"...":string; 
    }


    return(<><header className="Banner"
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "centre centre"
    }}
    
    >
        <div className="banner_contents">
            <h1  className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_descripition"> {truncate(movie.overview, 150)}</h1>

        </div>
        <div className="banner_fadeBottom" />

    </header>
    </>)
 
}