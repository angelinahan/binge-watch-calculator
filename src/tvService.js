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

const episodesPrefix = "http://api.tvmaze.com/shows/"
const episodesSuffix = "/episodes"

//With data from http://api.tvmaze.com/shows/{show_id}/episodes
export async function showInfo(ID) {
    var idString = ID + ''
    console.log(ID);
    console.log(idString);
    let url = episodesPrefix + ID + episodesSuffix + ``;
    let result = await fetch(url).then(response => {
        return response.json();
    })
    return result;
}




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
//But I was concered the map indexes don't work the same way, and then the episode
// number wouldn't be implicit from the data
export function to_episodes_map(data) {
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
    return results;
}

function getAllEps(startSeason, startEpisode, endSeason, endEpisode, showEpisodes) {
    startEpisode = startEpisode - 1;
    endEpisode = endEpisode - 1;
    let totalEpisodes = 0;
    let startLength = showEpisodes[startSeason].length - startEpisode;
    for (let i = startSeason + 1; i < endSeason; i++) {
        console.log(showEpisodes[i]);
        totalEpisodes += showEpisodes[i].length;
    }
    let endLength = endEpisode;
    totalEpisodes += startLength;
    totalEpisodes += endLength;
    totalEpisodes *= 1.0;
    return totalEpisodes;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

export function find_end_date(startSeason, startEpisode, endSeason, endEpisode, numPerDay, showEpisodes) {
    let totalEps = getAllEps(startSeason, startEpisode, endSeason, endEpisode, showEpisodes);
    let days = Math.ceil(totalEps / numPerDay);
    let today = new Date();
    return addDays(today, days);
}


export function episodesPerDay(startSeason, startEpisode, endSeason, endEpisode, endDate, showEpisodes) {
    console.log(showEpisodes);
    let totalEpisodes = getAllEps(startSeason, startEpisode, endSeason, endEpisode, showEpisodes);
    let today = new Date();
    let end = new Date(endDate);
    let timeFrame = end.getTime() - today.getTime();
    let rate = totalEpisodes / timeFrame
    return rate;
}





    
