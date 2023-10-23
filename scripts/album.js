export class Album {
    constructor(artist, title, year, link) {
      this.artist = artist;
      this.title = title;
      this.year = year;
      this.link = link;
    }
  
    render() {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <a href="${this.link}" target="_blank">
          <img src="https://f4.bcbits.com/img/a1770171322_10.jpg" alt="${this.title}">
          <h2>${this.artist} - ${this.title} (${this.year})</h2>
        </a>
      `;
      return card;
    }
  }
  