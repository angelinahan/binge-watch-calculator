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

const SquareSelect = styled.div`
    border-radius: 5px;
    background-color: aqua;
`

export const Step2 = ( props ) => {
    return (
        <>
            <Step2Container>
                
            </Step2Container>
        </>
    )
}
