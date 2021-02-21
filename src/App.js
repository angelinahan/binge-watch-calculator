import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { searchShow, showInfo } from './tvService';
import { ResultRow } from './components/ResultRow';
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showId, setShowId] = useState("");
  const [showEpisodes, setShowEpisodes] = useState([]);
  const [show, setShow] = useState([]);
  const [step, setStep] = useState(1);
  const [startEp, setStartEp] = useState('');
  const [startSeason, setStartSeason] = useState('');
  const [endEp, setEndEp] = useState('');
  const [endSeason, setEndSeason] = useState('');


  function keypress(ev) {
    if (ev.key === "Enter") {
      searchShow(query)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          step === 1 &&
          <Step1
            results={searchResults}
            query={query}
            setQuery={setQuery}
            setSearchResults={setSearchResults}
            setShowId={setShowId}
            showId={showId}
            setStep={setStep}
            setShowEpisodes={setShowEpisodes} 
            setShow={setShow}/>
        }
        {
          step === 2 && 
          <Step2
            show={show}
            startEp={startEp}
            setStartEp={setStartEp}
            startSeason={startSeason}
            setStartSeason={setStartSeason}
            endEp={endEp}
            setEndEp={setEndEp}
            endSeason={endSeason}
            setEndSeason={setEndSeason}
            showEpisodes={showEpisodes}
          />
        }
        {
          step === 3 &&
          <p>Hi from Step 3</p>
        }

      </header>
    </div>
  );
}

export default App;
