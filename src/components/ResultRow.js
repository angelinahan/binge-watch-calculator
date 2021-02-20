import styled from 'styled-components';

const ResultDiv = styled.div`
    border: 1px solid white;
    height: 50px;
    display: flex;

`

export const ResultRow = ({ show }) => {
    let imageUrl = "https://media.comicbook.com/files/img/default-movie.png";
    if (show.image) {
        imageUrl = show.image.medium;
    };
    // let year = show.premiered.slice(4);
    return (
        <>
            <ResultDiv>
                <img src={imageUrl}></img>
                <p>{show.name}</p>
                <p>{show.premiered}</p>
            </ResultDiv>
        </>
    )
}