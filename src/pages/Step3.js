import styled from 'styled-components';
import { ResultRow } from '../components/ResultRow';
import { searchShow } from '../tvService';
 
const Step3Container = styled.div`
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

const SentenceDiv = styled.div`
    display: flex;
    align-items: baseline;
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

const InputNum = styled.input`
    border-radius: 5px;
    width: 10%;
`

const Button = styled.button`
    border-radius: 5px;
    height: 50px;
    width: 20%;
    background-color: aliceblue;
`

const StyledH3 = styled.h3`

`

const SquareSelect = styled.div`
    border-radius: 5px;
    background-color: aqua;
`

export const Step3 = ( props ) => {
    return (
        <>
            <Step3Container>
            <HorizontalDiv>
                    <h1>Results</h1>
                </HorizontalDiv>
                <SentenceDiv>
                    <StyledH3>Based on your current position at season {props.startSeason} episode {props.startEp} </StyledH3>
                </SentenceDiv>
                <SentenceDiv>
                    <StyledH3>and your goal of watching until season {props.endSeason} episode {props.endEp}</StyledH3>
                </SentenceDiv>
                <SentenceDiv>
                    <StyledH3>You will reach your goal on {props.endDate}</StyledH3>
                </SentenceDiv>
                <SentenceDiv>
                    <StyledH3>If you continue your current pace of watching {props.rate} episodes per day of {props.show.name}</StyledH3>
                </SentenceDiv>
            </Step3Container>
        </>
    )
}
