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
            setShow={setShow} />
        }
        {
          step === 2 && console.log(show) &&
          <p>Hi from Step 2</p>
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
