import './App.css';
import {useState} from 'react';
import MovieList from "./component/MovieList";
import {BrowserRouter, Route} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [movies, setMovies] = useState([
    { 
      id: uuidv4(),
      title: "The Matrix",
      rate: 5,
      description:
        "Action and drama ",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/51oBxmV-dML._AC_.jpg",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
    { 
      id: uuidv4(),
      title: "Jhon Wick",
      rate: 3,
      description:
        "Action and drama ",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg",
        trailer:"https://www.youtube.com/embed/C0BMx-qxsP4"
    },
 
    { 
      id: uuidv4(),
      title: " Another Round",
      rate: 5,
      description:
        "Four friends who work as high school teachers apply a new theory, with the quadruple trying to improve their lives by keeping a certain percentage of alcohol in their blood.",
      posterurl:
        "https://img.akwam.co/uploads/f4JU2.jpg",
        trailer:"https://www.youtube.com/embed/bj8Jmz_srDg"
    },
    { 
      id: uuidv4(),
      title: "Horror Shark ",
      rate: 5,
      description:
        "In one of the laboratories specialized in genetics, the DNA of the great white shark is modified, which transforms it into an invincible organism and an imminent threat to humans and marine organisms alike.",
      posterurl:
        "https://img.akwam.co/uploads/Smjjf.jpg",
        trailer:"https://www.youtube.com/embed/3_DQmfFjTlU"
    },
  ]);
  return (
    <div className="App">
      <MovieList movies={movies} />
 
    </div>
  );
}

export default App;
