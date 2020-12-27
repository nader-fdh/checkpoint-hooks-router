import './App.css';
import {useState} from 'react';
import MovieList from "./component/MovieList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [movies, setMovies] = useState([
    { 
      id: uuidv4(),
      title: "بيك نعيش",
      rate: 5,
      description:
        "تتحول رحلة (فارس) و(مريم) إلى الجنوب التونسي إلى كارثة عندما يتعرض ابنهما الوحيد (عزيز) لطلق ناري عشوائي مما يستلزم زراعة كبد تقلب حياة الأسرة رأسًا على عقب، وتكشف عن سر قديم طال إخفائه يكاد يهدد علاقة الزوجين للأبد",
      posterurl:
        "https://img.akwam.co/thumb/260x380/uploads/AmJXq.jpg",
        trailer: "https://www.youtube.com/watch?v=ufSCpaSsuiI",
    },
    { 
      id: uuidv4(),
      title: "The Matrix",
      rate: 5,
      description:
        "Neo becomes the last hope of mankind, as he is the only one capable of doing miracles, and Neo tries to save the city of Zion, which will soon fall under the siege of machines.",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/51oBxmV-dML._AC_.jpg",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
    { 
      id: uuidv4(),
      title: "Jhon Wick",
      rate: 3,
      description:
        "The events of the movie revolve around the former professional killer John Wake (Keanu Reeves), who happens to him to disrupt his current peaceful life, as a thief breaks into his house, steals his car, and kills his dog, the dog that his ex-wife gave him, so (John) goes to ( New York) seeks revenge on this thief, but discovers that the father of this thief is a Russian gang leader, who places a reward for whoever kills (John), and if (Marcus) the former partner, and a friend (John) tries to obtain this reward. ",
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
