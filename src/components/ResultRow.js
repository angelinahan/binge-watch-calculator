import { useEffect } from 'react';
import styled from 'styled-components';

const ResultDiv = styled.div`
display: flex;
    border: 1px solid white;
    height: 50px;
    padding: 5px;
    display: flex;
    width: 40vw;
    justify-content: space-between;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: pink;
        transition: 0.3s background-color;
    }
    background-color: ${props => (props.selected ? props.selected : 'none')};
    transition: 0.3s background-color;
`

const ResultImage = styled.img`
    height: 100%;
    width: auto;
`

export const ResultRow = ({ show, selectedShowId, setShowId }) => {
    let imageUrl = "https://media.comicbook.com/files/img/default-movie.png";
    if (show.image) {
        imageUrl = show.image.medium;
    };
    let year = '';
    if (show.premiered) {
        year = `(` + show.premiered.substring(0, 4) + `)`;
    }
    return (
        <>
            <ResultDiv selected={selectedShowId === show.id ? 'pink' : 'none'} onClick={() => setShowId(show.id)} >
                {
                    console.log(selectedShowId === show.id)
                }
                <ResultImage src={imageUrl}></ResultImage>
                <p>{show.name}</p>
                <p>{year}</p>
            </ResultDiv>
        </>
    )
}