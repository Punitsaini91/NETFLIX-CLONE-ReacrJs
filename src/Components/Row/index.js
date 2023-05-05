import "./style.css"
import { useEffect, useState } from "react"
import instance from "../../Services/instance";

export const Row = ({title,fetchurl,isLargeRow=false})=>{

    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies,setmovies]=useState([]);
    console.log(); 
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchurl);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchurl])
    console.log("movies",movies);



    return (<div className="row">
    <h1>{title}</h1>
    <div className="row_posters">
    {movies.map(movie => (
                <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
    </div>

           
  
    
    </div>)
}