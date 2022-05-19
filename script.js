//DISTRACTIFY

/*
1. Replacing all images with OUR images
2. Replacing all text with the text that we want
3. We can store tabs, notes
4. Block certain pages


*/

const memesImages = [
  "https://pbs.twimg.com/media/EUXOgVHUUAERTe6.jpg",
  "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png",
  "https://cdn-media-1.freecodecamp.org/images/1*1PwX4h0Jd_NRlJU0KwwQNw.jpeg",
  "https://media.makeameme.org/created/there-is-no-9a7w0d.jpg",
];

const imgs = document.querySelectorAll("img");

for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * memesImages.length);
  imgs[i].src = memesImages[randomImg];
}
