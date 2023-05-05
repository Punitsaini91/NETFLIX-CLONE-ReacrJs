import { Bannner } from "../Components/Banner/Bannner"
import { Navbar } from "../Components/Navbar/Navbar"
import { Row } from "../Components/Row"
import requests from "../Services/requests";

export const Homescreen = ()=>{
    return(<div className="app">
        <Navbar/>
        
        <Bannner/>
        <Row title="Netflix Original " fetchurl={requests.fetchNetflixOriginals} isLargeRow/>
       <Row title="Netflix Treading " fetchurl={requests.fetchTrending}/>
       <Row title="Netflix TopRated " fetchurl={requests.fetchTopRated}/>
       <Row title="Netflix ActionMovies " fetchurl={requests.fetchActionMovies}/>
       <Row title="Netflix ComedyMovies " fetchurl={requests.fetchComedyMovies}/>
       <Row title="Netflix HorroMovies" fetchurl={requests.fetchHorrorMovies}/>
       <Row title="Netflix RomanticMovies " fetchurl={requests.fetchTrending}/>
       <Row title="Netflix Documentaries " fetchurl={requests.fetchDocumentaries}/>


        
    </div>)
}