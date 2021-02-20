import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { searchShow } from './tvService';

function App() {
const [query, setQuery] = useState("hello");
const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(event) => setQuery(event.target.value)} value={query} placeholder="Type the name of a show"></input>
        <button onClick={() => setSearchResults(searchShow(query))}>Search</button>
        {
          searchResults && 
          console.log(searchResults)
          // searchResults.map(result => 
          //   <p>{result.show.id}</p>
          // )
        }
      </header>
    </div>
  );
}

export default App;
