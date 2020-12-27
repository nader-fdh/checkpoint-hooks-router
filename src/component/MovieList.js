import React,{useState,useEffect} from 'react'
import MovieCard from "./MovieCard" ;
import ModalInput from './ModalInput'
import Filter from './Filter'
import Trailer from './Trailer'
import { BrowserRouter, Route } from 'react-router-dom';

const MovieList = (props) => {
    const [newMovies, setNewMovies] = useState(props.movies)
    const [filteredList, setFilteredList] = useState(newMovies)
    const [search, setSearch] = useState('')
    const [rate, setRate] = useState(0)
    const callBack = data => {
        setFilteredList([...newMovies, data])
        setNewMovies([...newMovies, data])
    }
    const getInput = (inputSearch, rate) => {
        setSearch(inputSearch)
        setRate(rate)
        console.log(inputSearch, rate);
    }
    useEffect(() => {
        let newFilteredMovies = newMovies.filter((movie) => {
            let check = movie.title.toLowerCase().includes(search);
        
            if(check && movie.rate >= rate){
                return movie;
            }
        })
        setFilteredList(newFilteredMovies);
    },[search,rate] )
  

    return (
        <div>
            <BrowserRouter>
                

            <div style={{display:'flex' }}>
            <ModalInput callBack={callBack} />
            <Filter getInput={getInput} />
            </div>
            <div style={{display:'flex' , flexWrap:'wrap', textAlign:'center' , backgroundColor:'beige'}}>
            {filteredList.map((el,index) => {
                return  <MovieCard key={index} el={el} />
                }
                )}
            </div>
            <Route path='/movies/:id' render={(props) => <Trailer {...props} filteredList={filteredList } />} />
            </BrowserRouter>
        </div>
    )
}

export default MovieList
