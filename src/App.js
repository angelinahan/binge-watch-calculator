import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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
  const [endDate, setEndDate] = useState();
  const [isFinishByDate, setIsFinishByDate] = useState();
  const [rate, setRate] = useState();
  const [canCalculate, setCanCalculate] = useState(false);
  const [display, setDisplay] = useState('');


  function keypress(ev) {
    if (ev.key === "Enter") {
      searchShow(query)
    }
  }

  useEffect(() => {
    setCanCalculate((startSeason && startEp && endEp && endSeason) && ((rate && !isFinishByDate) || (endDate && isFinishByDate)));
    console.log(canCalculate);
  });

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
            setStep={setStep}
            endSeason={endSeason}
            setEndSeason={setEndSeason}
            showEpisodes={showEpisodes}
            endDate={endDate}
            setEndDate={setEndDate}
            isFinishByDate={isFinishByDate}
            setIsFinishByDate={setIsFinishByDate}
            rate={rate}
            setRate={setRate}
            canCalculate={canCalculate}
            setDisplay={setDisplay}
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
