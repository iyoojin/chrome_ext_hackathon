//DISTRACTIFY

/*
1. Replacing all images with OUR images
2. Replacing all text with the text that we want
3. We can store tabs, notes
4. Block certain pages
//social media
//amazon

*/

const memesImages = [
  "https://i.pinimg.com/736x/ac/b7/f9/acb7f99ba0ef473e03ee81e91a6281ee.jpg",
  "https://testbytes.technoallianceindia.com/wp-content/uploads/2019/06/Untitled-53-1-300x300.png",
  "https://i.chzbgr.com/full/9591928832/h8AC54339/laptop-writing-whole-project-as-student-gim-writing-10-lines-code-as-salaried-enough-today",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-1-1-768x537.png",
  "https://pbs.twimg.com/media/EUXOgVHUUAERTe6.jpg",
  "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png",
  "https://cdn-media-1.freecodecamp.org/images/1*1PwX4h0Jd_NRlJU0KwwQNw.jpeg",
  "https://media.makeameme.org/created/there-is-no-9a7w0d.jpg",
  "https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png",
  "https://memegenerator.net/img/instances/76173262.jpg",
];

const imgs = document.querySelectorAll("img");

for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * memesImages.length);
  imgs[i].src = memesImages[randomImg];
}

let currentURL = window.location.href;

if (currentURL === "https://www.sephora.com/") {
  window.location.replace(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
} else if (currentURL === "https://amazon.com/") {
  window.location.replace(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
} else if (currentURL === "https://www.facebook.com/") {
  window.location.replace(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
} else if (currentURL === "https://www.espn.com/") {
  window.location.replace(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
} else if (currentURL === "https://www.playstation.com/en-us/") {
  window.location.replace(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
} else if (currentURL === "https://www.ebay.com/") {
  window.location.replace(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
} else if (currentURL === "https://twitter.com/") {
  window.location.replace(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
} else if (currentURL === "https://www.netflix.com/") {
  window.location.replace(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  );
}
