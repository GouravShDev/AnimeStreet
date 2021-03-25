API = "https://api.jikan.moe/v3"

function getAsync(url, callbackFinish, callbackFail) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callbackFinish(xhr.responseText);
            } else {
                callbackFail(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        callbackFail(xhr.statusText);
    };
    xhr.send(null);
};

function getPopularAnime(type, page, subtype, callbackFinish, callbackFail) {
    // type anime, manga, people, char
    // search page
    // subtype (optional) Anime: airing upcoming tv movie ova special Manga: manga novels oneshots doujin manhwa manhua Both: bypopularity favorite
    getAsync(API+"/top/" + String(type) + "/" + String(page) + "/" + String(subtype), callbackFinish, callbackFail);
};
function callback(s) {
    var obj = JSON.parse(s);
    console.log(s);
};
getPopularAnime("anime", "1", "airing", callback, callback);