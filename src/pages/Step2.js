import styled from 'styled-components';
import { ResultRow } from '../components/ResultRow';
import { searchShow } from '../tvService';
 
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

export const Step2 = ( props ) => {
    return (
        <>
            <Step2Container>
                <SearchBarDiv>
                
                <Button onClick={() => searchShow(props.query).then(data => props.setSearchResults(data))}>Search</Button>
                </SearchBarDiv>
                
                <Button>Next</Button>
            </Step2Container>
        </>
    )
}