var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
 printPlaylists : function () {

  for(var key in this.playlists){
    var list = this.playlists[key]

    console.log(list.id +": "+list.name+" - "+list.tracks.length+" tracks")
}
},

 printTracks : function () {

  for(var key in this.tracks){
    var list = this.tracks[key]
    console.log(list.id+": "+list.name+" by "+list.artist+" ("+list.album+")")
}
},

 printPlaylist : function (playlistId) {
  //console.log(library.playlists[playlistId])
  for(var key in this.playlists[playlistId]){
    var list = this.playlists[playlistId].tracks
    var shortPlay = this.playlists[playlistId]
  }
  console.log(shortPlay.id+": "+shortPlay.name+" - "+shortPlay.tracks.length+" tracks")
    for(var i=0; i < list.length; i ++){
      var activeTrack=list[i]
      var shortList = this.tracks[activeTrack]
  console.log(shortList.id+": "+shortList.name+" by "+shortList.artist+" ("+shortList.album+")")
  }
},

 addTrackToPlaylist : function (trackId, playlistId) {
  var playListToModify = this.playlists[playlistId].tracks
  console.log(playListToModify)
  //console.log(playListToModify)
  var trackToAdd = this.tracks[trackId].id
  console.log(trackToAdd)
  playListToModify.push(trackToAdd)
  console.log(playListToModify)

},

 uid : function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
 addTrack : function (name, artist, album) {
  var userID = this.uid();
    this.tracks[userID] = { id : userID, name: name, artist: artist, album: album};
  console.log(this.tracks);
},

 addPlaylist : function (name) {
    var userID = this.uid();
    this.playlists[userID] = { id: userID, name: name}
    console.log(library.playlists);
},

}

library.printPlaylists();
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

library.printPlaylist('p01');
// adds an existing track to an existing playlist

library.addTrackToPlaylist('t01','p02');
// generates a unique id
// (use this for addTrack and addPlaylist)

library.addTrack ("Jimmy", "Dr.Hook", "Dunno");
// adds a playlist to the library

library.addPlaylist("p03");
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

//var printSearchResults = function(query) {

//}