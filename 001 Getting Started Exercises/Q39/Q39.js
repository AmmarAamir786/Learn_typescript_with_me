"use strict";
// Album
function make_album(Artist, title, tracks) {
    let albums = { Artist, title };
    if (tracks) {
        albums.tracks = tracks;
    }
    return albums;
}
console.log(make_album("Pink Floyd", "The Dark Side of the Moon"));
console.log(make_album("Led Zeppelin", "IV"));
console.log(make_album("The Beatles", "Abbey Road", 17));
