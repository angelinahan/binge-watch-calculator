import styled from 'styled-components';
import { ResultRow } from '../components/ResultRow';
import { searchShow, showInfo, to_episodes_map } from '../tvService';
import { coral } from '../colors'

const Step1Container = styled.div`
    display: flex;
    margin: 20vh 0;
    flex-direction: column;
    align-items: center;
`

const SearchBarDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 41%;
`

const SearchBar = styled.input`
    border-radius: 5px;
    width: 80%;
    padding: 0px 15px;
`

const Button = styled.button`
    border-radius: 5px;
    height: 50px;
    width: 20%;
    background-color: ${coral};
`

const ResultsDiv = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    max-height: 310px;
    width: 100%;
    margin: 5vh auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Step1 = (props) => {
    return (
        <>
            <Step1Container>
                <h1>Search and select your show to begin:</h1>
                <SearchBarDiv>
                    <SearchBar size="50"
                        onChange={(event) => props.setQuery(event.target.value)}
                        value={props.query} placeholder="Type the name of a show"></SearchBar>
                    <Button onClick={() => searchShow(props.query).then(data => props.setSearchResults(data))}>Search</Button>
                </SearchBarDiv>
                <ResultsDiv>
                    {/* {
                        props.results.length === 0 &&
                        <p>No shows found :( Try again</p>
                    } */}
                    {
                        props.results.map(result =>
                            <ResultRow
                                key={result.show.id}
                                show={result.show}
                                selectedShowId={props.showId}
                                setShowId={props.setShowId}
                                setShow={props.setShow} />
                        )
                    }
                </ResultsDiv>
                <Button onClick={() => {
                    //showInfo(props.showId);
                    props.setStep(2);
                    (showInfo(props.showId).then(data => props.setShowEpisodes(to_episodes_map(data))));
                }}
                    hidden={!props.showId && props.results !== []}
                    disabled={!props.showId}>Next</Button>
            </Step1Container>
        </>
    )
}