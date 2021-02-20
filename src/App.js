import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { searchShow, showInfo } from './tvService';
import { ResultRow } from './components/ResultRow';
import { Step1 } from './pages/Step1';

function App() {
const [query, setQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [showId, setShowId] = useState("");
const [show, setShow] = useState([]);
const [step, setStep] = useState(1);

function keypress(ev) {
  if (ev.key === "Enter") {
    searchShow(query)
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <Step1 results={searchResults} query={query} setQuery={setQuery} setSearchResults={setSearchResults} setShowId={setShowId} showId={showId} setShow={setShow} setStep={setStep} show={show}/>
        {/* <Step2 results={searchResults} setShow={setShow}/> */}
      </header>
    </div>
  );
}

export default App;
