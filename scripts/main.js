import { Album } from './album.js';
import { Library } from './library.js';

const library = new Library();

const albumsData = [
  { artist: 'Artist Name', title: 'Super Cool Album 1', year: 2010, link: '#' },
  { artist: 'Artist Name', title: 'Super Cool Album 2', year: 2015, link: '#' },
  { artist: 'Name of Artist', title: 'Nice and Cool Album 66', year: 1999, link: '#' },
  { artist: 'Artist Name', title: 'Super Cool Album 5', year: 2012, link: '#' },
  { artist: 'Artist Name', title: 'Super Cool Album 7', year: 2022, link: '#' },
  { artist: 'Name of Artist', title: 'Nice and Cool Album 70', year: 2023, link: '#' },
  { artist: 'Artist Name', title: 'Song 1', year: 2018, link: '#' },
  { artist: 'Artist Name', title: 'Song 2', year: 2015, link: '#' },
  { artist: 'Name of Artist', title: 'Bad song 3', year: 1999, link: '#' },
  { artist: 'Artist Name', title: 'hehe', year: 2012, link: '#' },
  { artist: 'Artist Name', title: 'haha', year: 2022, link: '#' },
  { artist: 'Somedude', title: 'Someguy', year: 2023, link: '#' },
];

albumsData.forEach(data => {
  const album = new Album(data.artist, data.title, data.year, data.link);
  library.addAlbum(album);
});

document.getElementById('artistName').addEventListener('click', () => {
  library.sortByArtist();
});

document.getElementById('releaseYear').addEventListener('click', () => {
  library.sortByYear();
});

library.render();
