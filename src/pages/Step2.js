import styled from 'styled-components';
import { ResultRow } from '../components/ResultRow';
import { searchShow } from '../tvService';
 
const Step2Container = styled.div`
    display: flex;
    margin: 20vh 5vw;
    flex-direction: column;
    align-items: center;
`

const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`

const TVImage = styled.div`
    height: 110%;
    width: auto;
    position: relative;
    bottom: 10%;
`

const InputBox = styled.input`
    border-radius: 5px;
    width: 50%;
`

const Button = styled.button`
    border-radius: 5px;
    height: 50px;
    width: 20%;
    background-color: aliceblue;
`

const SquareSelect = styled.div`
    border-radius: 5px;
    background-color: aqua;
`

export const Step2 = ( props ) => {
    return (
        <>
            <Step2Container>
                <HorizontalDiv>
                    <TVImage src={props.image.medium}></TVImage>
                    <h2>{props.show.name}</h2>
                </HorizontalDiv>
                <p>I am about to start episode </p>
                <InputBox value={props.startEpisode} onChange={(event) => props.setStartEpisode(event.target.value)}></InputBox>
                <p>I want to watch until episode</p>
                <InputBox value={props.endEpisode} onChange={(event) => props.setEndEpisode(event.target.value)}></InputBox>
                <Button>Calculate!</Button>
                <p>Select an option:</p>
                <HorizontalDiv>
                    <SquareSelect onClick={() => props.setIsByDate(true)}>
                        <h3>I want to finish before this date:</h3>
                        <InputBox type="date" id="Watch By"></InputBox>
                    </SquareSelect>
                    <SquareSelect>
                        <h3>I want to watch this many episodes per day:</h3>
                        <InputBox type="Number" Rate></InputBox>
                    </SquareSelect>
                </HorizontalDiv>
            </Step2Container>
        </>
    )
}