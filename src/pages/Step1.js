import styled from 'styled-components';
import { ResultRow } from '../components/ResultRow';
import { searchShow, showInfo } from '../tvService';
 
const Step1Container = styled.div`
    display: flex;
    margin: 20vh 5vw;
    flex-direction: column;
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

export const Step1 = ( props ) => {
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
                        setShowId={props.setShowId}/>
                    )
                }
                </ResultsDiv>
                <Button onClick={() => {(showInfo(props.showId).then(info => props.setShow(info))); 
                console.log(props.show);
                props.setStep(2);}}>Next</Button>
            </Step1Container>
        </>
    )
}