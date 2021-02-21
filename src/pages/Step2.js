import styled from 'styled-components';
import { ResultRow } from '../components/ResultRow';
import { episodesPerDay, find_end_date } from '../tvService';
import { charcoal, purple, coral } from '../colors';

const Step2Container = styled.div`
    display: flex;
    margin: 10vh 5vw;
    flex-direction: column;
    align-items: center;
`

const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 30px 0px;
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
    width: 3.5rem;
    height: 1em;
    padding: 5px;
    font-size: 30px;
    background-color: transparent;
    color: white;
    border: 2px solid ${charcoal};
`

const Button = styled.button`
    border-radius: 5px;
    height: 50px;
    padding: 0px 100px;
    background-color: ${coral};
`

const StyledH3 = styled.h3`

`

const StyledH2 = styled.h2`
    justify-self: start;
    //align-self: start;
`

const SquareSelect = styled.div`
    border-radius: 5px;
    padding: 10px;
    width: 45%;
    cursor: pointer;
    border: 2px solid ${charcoal};
    &:disabled {
        opacity: 0.5;
    }
    &:hover {
        border: 2px solid ${purple};
    }
    background-color: ${props => (props.highlighted ? '#7d4e57ff' : 'transparent')};
`

export const Step2 = (props) => {
    return (
        <>
            <Step2Container>
                <HorizontalDiv>
                    {<TVImage src={props.show.image.medium}></TVImage>}
                    <h1>{props.show.name}</h1>
                </HorizontalDiv>
                <SentenceDiv>
                    <StyledH3>I am about to start Season&nbsp;</StyledH3>
                    <InputNum
                        value={props.startSeason}
                        onChange={(event) => props.setStartSeason(event.target.value)}></InputNum>
                    <StyledH3>&nbsp;Episode&nbsp;</StyledH3>
                    <InputNum
                        value={props.startEp}
                        onChange={(event) => props.setStartEp(event.target.value)}></InputNum>
                </SentenceDiv>
                <SentenceDiv>
                    <StyledH3>I want to watch through Season&nbsp;</StyledH3>
                    <InputNum
                        value={props.endSeason}
                        onChange={(event) => props.setEndSeason(event.target.value)}></InputNum>
                    <StyledH3>&nbsp;Episode&nbsp;</StyledH3>
                    <InputNum
                        value={props.endEp}
                        onChange={(event) => props.setEndEp(event.target.value)}></InputNum>
                </SentenceDiv>
                <StyledH2>Select an option:</StyledH2>
                <HorizontalDiv>
                    <SquareSelect highlighted={props.isFinishByDate} onClick={() => props.setIsFinishByDate(true)}>
                        <h3>I want to finish on this date:</h3>
                        <InputBox type="date" id="Watch By" onChange={(event) => props.setEndDate(event.target.value)}></InputBox>
                    </SquareSelect>
                    <SquareSelect highlighted={!props.isFinishByDate} onClick={() => props.setIsFinishByDate(false)}>
                        <h3>I want to watch this many episodes per day:</h3>
                        <InputBox type="Number" min="1" onChange={(event) => props.setRate(event.target.value)}></InputBox>
                    </SquareSelect>
                </HorizontalDiv>
                <HorizontalDiv>
                <Button disabled={!props.canCalculate} onClick={() => {
                    console.log("isFinishByDate:")
                    console.log(props.isFinishByDate);
                    if (props.isFinishByDate) {
                        console.log("finishing by")
                        props.setRate(episodesPerDay(props.startSeason, props.startEp, props.endSeason, props.endEp, props.endDate, props.showEpisodes));
                    }
                    else if (!props.isFinishByDate)  {
                        console.log("giving rate")
                        props.setEndDate(find_end_date(props.startSeason, props.startEp, props.endSeason, props.endEp, props.rate, props.showEpisodes));
                    }
                    props.setStep(3);
                    }}>Calculate!</Button>
                </HorizontalDiv>
            </Step2Container>
        </>
    )
}
