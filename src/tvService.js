//format: /search/shows?q=:query

const searchUrl = " http://api.tvmaze.com/search/shows?q=";

const showUrl = "";

function to_url_format(query) {
    let lowercase = query.toLowerCase().trim(); //to lowercase and eliminating trailing whitespace
    return lowercase.split(' ').join('-');
}

export const searchShow = (query) => {
    const formattedQuery = to_url_format(query);
    return fetch(`${searchUrl}${formattedQuery}`)
    .then((result) => result.json())
    .then((data) => {
        return data;
    })

    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", to_url_format(query), false ); // false for synchronous request
    // xmlHttp.send( null );
    // return xmlHttp.responseText;
}



    
