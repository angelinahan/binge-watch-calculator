import styled from 'styled-components';
import { ResultRow } from '../components/ResultRow';
import { searchShow, showInfo,to_episodes_map } from '../tvService';
 
const Step1Container = styled.div`
    display: flex;
    margin: 20vh 5vw;
    flex-direction: column;
    align-items: center;
`

const SearchBarDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const SearchBar = styled.input`
    border-radius: 5px;
    width: 80%;
`

const Button = styled.button`
    border-radius: 5px;
    height: 50px;
    width: 20%;
    background-color: aliceblue;
`

const ResultsDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`

export const Step1 = (props) => {
    return (
        <>
            <Step1Container>
                <SearchBarDiv>
                    <SearchBar size="50"
                        onChange={(event) => props.setQuery(event.target.value)}
                        value={props.query} placeholder="Type the name of a show"></SearchBar>
                    <Button onClick={() => searchShow(props.query).then(data => props.setSearchResults(data))}>Search</Button>
                </SearchBarDiv>
                <ResultsDiv>
                    {
                        props.results.map(result =>
                            <ResultRow
                                key={result.show.id}
                                show={result.show}
                                selectedShowId={props.showId}
                                setShowId={props.setShowId} />
                        )
                    }
                </ResultsDiv>
                <Button onClick={() => {
                    showInfo(props.showId);
                    props.setStep(2);
                }}
                    hidden={!props.showId && props.results !== []}
                    disabled={!props.showId}>Next</Button>
                {
                    console.log(props.results)
                }
            </Step1Container>
        </>
    )
}