const genreCards = [
  {
    id: 525,
    albumArtwork:
      "https://t2.genius.com/unsafe/600x0/https%3A%2F%2Fimages.genius.com%2Fb9d6cf24ceb76fa5d8ebf02569e16e2f.1000x1000x1.png",
  },
  {
    id: 32167,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.rapgenius.com%2Fe09e829807ee4c2d198736a4d89f0d34.1000x1000x1.jpg",
  },
  {
    id: 71255,
    albumArtwork:
      "https://t2.genius.com/unsafe/1344x0/https%3A%2F%2Fimages.genius.com%2Fc89a94b56463722c378a5f00df97ea6b.1000x1000x1.jpg",
  },
  {
    id: 2916544,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F7aa3bebecdfc0a7f9140c479bcb52182.1000x1000x1.png",
  },
  {
    id: 2263723,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2Ff3be0158d3a067a81b075686a3a2e63d.1000x1000x1.png",
  },
  {
    id: 2171,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Fd2fa9ea19155e704d0300ff0d29e78a3.953x953x1.jpg",
  },
  {
    id: 359249,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.rapgenius.com%2F0b6e38cbdcd8d33ce9d81b023dd87009.600x600x1.jpg",
  },
  {
    id: 2450584,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F5c886671ed0b5bb515ef546e396ef528.1000x1000x1.png",
  },
  {
    id: 3021,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Fbb694d2329470f0f08852feacfb5a02a.600x600x1.jpg",
  },
  {
    id: 4249139,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F4535b464eefdbf847ffc1da7eff2a255.1000x1000x1.png",
  },
  {
    // Beck - Loser
    id: 4905,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F2616b5713a51eb3db18c625c1542b9e5.500x501x1.jpg",
  },
  {
    // Salt N Pepa - Push it
    id: 56902,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F4ef12d48c4a618a18e5f8467023ff9ec.600x600x1.jpg",
  },
  {
    // Frank Ocean - Siegfried
    id: 2842086,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F626ddf4c88de200d9487bb42449d1ae3.1000x1000x1.png",
  },
  {
    // James Blake - Can't Believe the Way We Flow
    id: 4201753,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F469d08bb4989f5ff4ef6e6d0005443cf.1000x1000x1.png",
  },
  {
    // Jay Z & Justin Timberlake - Holy Grail
    id: 177832,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F2da322648704159878b73c5cfc9c7dc5.1000x1000x1.png",
  },
  {
    // Gorillaz - Clint Eastwood
    id: 1698,
    albumArtwork:
      "https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F454a09a0a3aebd22bc05a6106fb6dfde.1000x1000x1.jpg",
  },
  {
    // Jay Z & Kanye West - No Church In The Wild
    id: 382113,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Ff4264b720b7352a2ffac3c36fa1fd5cf.880x880x1.png",
  },
  {
    // Phantogram - Cruel World
    id: 2831911,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F5c18b25246c2d8b42ed8b8dffab8a2e4.745x745x1.jpg",
  },
  {
    // Frank Ocean & Earl Sweatshirt - Super Rich Kids
    id: 78960,
    albumArtwork:
      "https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F5c8f128494b2bd41a18ebccad7e760cc.1000x1000x1.png",
  },
  {
    // Pet Shop Boys - My October Symphony
    id: 1183842,
    albumArtwork:
      "https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F4aebc17bcd83a7774ad3ae9bd9fce7b6.1000x1000x1.png",
  },
  {
    // Kelis - Trick Me
    id: 382113,
    albumArtwork:
      "https://t2.genius.com/unsafe/600x0/https%3A%2F%2Fimages.genius.com%2F142fe36b4329bf1fd87eece659a58759.1000x1000x1.jpg",
  },
];

let finalSliderSongArray = [];

const swiperWrapper = $(".swiper-wrapper");

function randomSliderSongGenerator() {
  let randomSongIndex =
    genreCards[Math.floor(Math.random() * genreCards.length)];

  console.log(randomSongIndex);
  return randomSongIndex;
}
for (let i = 0; i < 9; i++) {
  let randomSliderSongs = randomSliderSongGenerator();
  if (!finalSliderSongArray.includes(randomSliderSongs)) {
    finalSliderSongArray.push(randomSliderSongs);
  }

  console.log(randomSliderSongs);
}

// for (let i = 0; i < finalSliderSongArray.length; i++) {
// let data = finalSliderSongArray[i];
//   console.log(data.albumArtwork);
// }

const renderSliderCard = (finalSliderSongArray) => {
  console.log(swiperWrapper);

  const card = `<div class="swiper-slide artworkClick" data-geniusid="${finalSliderSongArray.id}" style= "background-image:url('${finalSliderSongArray.albumArtwork}')" >`;
  swiperWrapper.append(card);
  return swiperWrapper;
};

const renderSliderCards = () => {
  const swiperWrapper = $(".swiper-wrapper");
  $(document).ready(function () {
    $(".swiper-slide").click(function () {
      $(".swiper-container").hide();
      console.log(youtubeApiKey);
      console.log($(this).data("geniusid"));
      const geniusSongID = $(this).data("geniusid");
      fetchGeniusIDData(geniusSongID);
    });
  });
  console.log(swiperWrapper);

  swiperWrapper.empty();

  finalSliderSongArray.forEach(renderSliderCard);

  return swiperWrapper;

  // return randomArtworks;
  // genreCards.push(randomSliderSongObject);
  // console.log(randomSliderSongObject);
};
