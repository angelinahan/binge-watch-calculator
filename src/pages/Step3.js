import styled from 'styled-components';
import { coral, purple } from '../colors';

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
    flex-direction: column;
    align-items: baseline;
`

const Button = styled.button`
    border-radius: 5px;
    height: 50px;
    padding: 0px 100px;
    background-color: ${coral};
`

const StyledH3 = styled.h3`
    margin: 10px;
`

const HighlightResult = styled.span`
    color: ${coral};
    font-size: 30px;
`

const SecondaryHighlight = styled.span`
    color: ${purple};
`

const ResultsContainer = styled.div`
    width: 50%;
    margin: 30px;
    padding: 30px;
`

const ButtonContainer = styled.div`

`

export const Step3 = (props) => {
    return (
        <>
            <Step3Container>
                <HorizontalDiv>
                    <h1>Results</h1>
                </HorizontalDiv>
                <SentenceDiv>
                    <StyledH3>Based on your current position at Season {props.startSeason} Episode {props.startEp} </StyledH3>
                    <StyledH3>and your goal of watching through Season {props.endSeason} Episode {props.endEp}</StyledH3>
                </SentenceDiv>
                {
                    props.isFinishByDate &&
                    <ResultsContainer>
                        <SentenceDiv>
                            <StyledH3>You should watch approximately <HighlightResult>{props.rate} episodes per day </HighlightResult> in order reach your goal in watching these episodes of {props.show.name} by {props.endDate.toString()}.</StyledH3>
                        </SentenceDiv>
                    </ResultsContainer>
                }
                {
                    !props.isFinishByDate &&
                    <ResultsContainer>
                        <SentenceDiv>
                            <StyledH3>You will reach your goal on <HighlightResult>{props.endDate.toString()}</HighlightResult> if you continue your current pace of watching {props.rate} episodes per day of {props.show.name}</StyledH3>
                        </SentenceDiv>
                    </ResultsContainer>
                }
                <ButtonContainer>
                    <a href="https://bingewatchcalculator.netlify.app/"><Button>Search again!</Button></a>
                </ButtonContainer>
            </Step3Container>
        </>
    )
}
