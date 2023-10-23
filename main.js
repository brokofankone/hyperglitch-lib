import { Album } from './album.js';
import { Library } from './library.js';

const library = new Library();

const albumsData = [
  { artist: 'Artist Name', title: 'Super Cool Album 1', year: 2010, link: '#' },
  { artist: 'Artist Name', title: 'Super Cool Album 2', year: 2015, link: '#' },
  // ... other albums
];

albumsData.forEach(data => {
  const album = new Album(data.artist, data.title, data.year, data.link);
  library.addAlbum(album);
});

library.render();
