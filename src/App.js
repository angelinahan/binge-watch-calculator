import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { searchShow } from './tvService';
import { ResultRow } from './components/ResultRow';

function App() {
const [query, setQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [showId, setShowId] = useState("");

function keypress(ev) {
  if (ev.key === "Enter") {
    searchShow(query)
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <input size="50" 
        onChange={(event) => setQuery(event.target.value)} 
        value={query} placeholder="Type the name of a show"></input>
        <button onClick={() => searchShow(query).then(data => setSearchResults(data))}>Search</button>
        {
          searchResults &&
          //console.log(searchResults)
          
          searchResults.map(result => 
            <ResultRow key={result.show.id} show={result.show} onClick={() => setShowId(result.show.id)}/>
          )
          
        }
      </header>
    </div>
  );
}

export default App;
