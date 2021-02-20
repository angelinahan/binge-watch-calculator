//format: /search/shows?q=:query

const searchUrl = " http://api.tvmaze.com/search/shows?q=";

const showUrl = "";

function to_url_format(query) {
    let lowercase = query.toLowerCase().trim(); //to lowercase and eliminating trailing whitespace
    return lowercase.split(' ').join('-');
}


export async function searchShow(query) {
    let result = await fetch(`https://api.tvmaze.com/search/shows?q=girls`).then(response => {
        return response.json();
    })
    return result;
}

// export const searchShow = (query) => {
//     const formattedQuery = to_url_format(query);
//     let promise = fetch(`https://api.tvmaze.com/search/shows?q=girls`).then((result) => result.json())
//     return promise
//     }

//     // var xmlHttp = new XMLHttpRequest();
//     // xmlHttp.open( "GET", `https://api.tvmaze.com/search/shows?q=girls`, true ); // false for synchronous request
//     // xmlHttp.send( null );
//     // xmlHttp.then()
//     // return xmlHttp.responseText;
// }



    
