//format: /search/shows?q=:query

const searchUrl = "http://api.tvmaze.com/search/shows?q=";

const showUrl = "";

function to_url_format(query) {
    let lowercase = query.toLowerCase().trim(); //to lowercase and eliminating trailing whitespace
    return lowercase.split(' ').join('-');
}


export async function searchShow(query) {
    const formattedQuery = to_url_format(query)
    let result = await fetch(`${searchUrl}${formattedQuery}`).then(response => {
        return response.json();
    })
    return result;
}


//With data from http://api.tvmaze.com/shows/{show_id}/episodes

function minutes_watched_minutes_left(data) {

}

function percentage_watched(data) {

}

//I have an idea of this data structure
//{SeasonNumber: [[EpisodeTitle, Runtime]...]}} //Episode title might not be useful,
//But I figure the episode number is implicity from the list
//Example:
//{1: [[Ep1Name, 47], [Ep2Name, 51], [Ep3Name: 46]...], 2: [youGetTheIdea]..., ...}
//I considered doing something like 
//{1: {Ep1Name: 47, Ep2Name: 51, Ep3Name: 46...}, 2: {youGetTheIdea}...}
//But I was concered the map indexes don't work the same way 
function to_episodes_map(data) {
    let results = {};
    for (let i = 0; i < data.length; i++) {
        let episode = data[i];
        let season = episode["season"];
        let title = episode["name"];
        let runtime = episode["runtime"];
        if (!(season in results)) {
            results[season] = [[title, runtime]];
        }
        else {
            results[season].push([title, runtime]);
        }


    }
}






    
