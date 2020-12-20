import './App.css';
import {useState} from 'react';
import MovieList from "./component/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "The Matrix",
      rate: 5,
      description:
        "Action and drama ",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/51oBxmV-dML._AC_.jpg",
    },
    {
      title: "Jhon Wick",
      rate: 3,
      description:
        "Action and drama ",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg",
    },
    {
      title: "Fast and Furious",
      rate: 2,
      description: "Action and drama ",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/81b3BHq7bVL._AC_SL1500_.jpg",
    },
    {
      title: "The Craft",
      rate: 4,
      description:
        "moves to a new town and meets a group of friends, but soon discovers that she has supernatural abilities and she has to help from her friends to explore them. ",
      posterurl:
        "https://fastly.syfy.com/sites/syfy/files/styles/1240x700_hero/public/2020/09/cr_online_6072x9000_06.jpg?offset-x=0&offset-y=34",
    },
    {
      title: " Another Round",
      rate: 5,
      description:
        "Four friends who work as high school teachers apply a new theory, with the quadruple trying to improve their lives by keeping a certain percentage of alcohol in their blood.",
      posterurl:
        "https://img.akwam.co/uploads/f4JU2.jpg",
    },
    {
      title: "Horror Shark ",
      rate: 5,
      description:
        "In one of the laboratories specialized in genetics, the DNA of the great white shark is modified, which transforms it into an invincible organism and an imminent threat to humans and marine organisms alike.",
      posterurl:
        "https://img.akwam.co/uploads/Smjjf.jpg",
    },
  ]);
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
