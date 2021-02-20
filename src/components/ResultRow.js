import styled from 'styled-components';

const ResultDiv = styled.div`
    border: 1px solid white;
    height: 50px;
    padding: 10px;
    display: flex;
    overflow: ...;
    justify-content: space-between;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: pink;
        transition: 0.3s background-color;
    }
`

const ResultImage = styled.img`
    height: 100%;
    width: auto;
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
                <ResultImage src={imageUrl}></ResultImage>
                <p>{show.name}</p>
                <p>{show.premiered}</p>
            </ResultDiv>
        </>
    )
}