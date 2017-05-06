function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = [];
  this.totalDuration = [];
}

function Track(title, rating, length) {
  if (Number.isInteger(rating) && Number.isInteger(length) && rating > 0 && rating < 6) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  } else {
    throw new Error('Rating(1-5) & Length(in sec) both should be of type integer');
  }
}

Library.prototype.addPlayList = function (newPlaylist) {
  this.playlists.push(newPlaylist);
};

Playlist.prototype.addTrack = function (newTrack) {
  this.tracks.push(newTrack);
};

Playlist.prototype.findRating = function () {
  let sum = 0;
  for (let i = 0; i < this.tracks.length; i += 1) {
    sum += (this.tracks[i].rating);
  }
  this.overallRating.push(sum / this.tracks.length);
};

Playlist.prototype.findDuration = function () {
  let sum = 0;
  for (let i = 0; i < this.tracks.length; i += 1) {
    sum += (this.tracks[i].length);
  }
  this.totalDuration.push(sum);
};

const musicLibrary = new Library('summer-time', 'Dj-Fayez');
const p1 = new Playlist('In Serach of Sunrise');
const p2 = new Playlist('Tiesto_Classic');
const t1 = new Track('ISOS1', 4, 300);
const t2 = new Track('ISOS2', 5, 400);
const t3 = new Track('ISOS3', 2, 300);
const t4 = new Track('Ayla', 5, 500);
const t5 = new Track('MoonLight', 3, 100);

p1.addTrack(t1);
p1.addTrack(t2);
p1.addTrack(t3);
p2.addTrack(t4);
p2.addTrack(t5);
p1.findRating();
p2.findRating();
p1.findDuration();
p2.findDuration();
musicLibrary.addPlayList(p1);
musicLibrary.addPlayList(p2);

