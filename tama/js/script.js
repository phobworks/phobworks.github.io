/* Navbar  */
const nav = document.querySelector(".navlinks");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

nav.querySelectorAll("li a").forEach((navLink) => {
  navLink.addEventListener("click", closeNav);
});

/* =====Music Player */

let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
  {
    img: "./images/AUD-1.jpg",
    name: "Escape",
    artist: "Tama Nisa",
    music: "./music/01-TAMA-NISA_ESCAPE-prod.TUNEZFAKTORY.mp3",
  },
  {
    img: "./images/AUD-2.jpg",
    name: "Burning",
    artist: "Tama Nisa",
    music: "./music/02-Tama-Nisa-Burning.mp3-prod.Atta-Otigba.mp3",
  },
  {
    img: "./images/AUD-3.jpg",
    name: "Forever Love",
    artist: "Tama Nisa",
    music:
      "./music/03-Tama-Nisa-Forever-Love-ft-Nicodemus-Tomiti-produced-by-Kunle-Ayo-and-Kimosabe.mp3",
  },
  {
    img: "./images/AUD-5.jpg",
    name: "Go Carry Am",
    artist: "Tama Nisa",
    music: "./music/04-Tama-Nisa-Go-Carry-Am-Prod.mp3",
  },
  {
    img: "./images/AUD-4.jpg",
    name: "Lonely Path",
    artist: "Tama Nisa",
    music: "./music/05-Tama-Nisa-Lonely-Path-produced-by-Oz-dbeat.mp3",
  },
  {
    img: "./images/AUD-6.jpg",
    name: "Stronger",
    artist: "Tama Nisa",
    music: "./music/06-Tama-Nisa-Stronger.mp3 _ Prod. Kimosabe.mp3",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  now_playing.textContent =
    "Playing music" + (track_index + 1) + " of " + music_list.length;
  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
  isRandom = true;
  randomIcon.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
}
function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekTo = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekTo;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );

    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const newsContainer = document.getElementById("news-container");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const itemsPerPage = 3;
  let currentPage = 1;
  let newsData = [];

  fetch("./js/news.json")
    .then((response) => response.json())
    .then((data) => {
      newsData = data;
      displayNews();
    });

  const displayNews = () => {
    newsContainer.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentNews = newsData.slice(start, end);

    currentNews.forEach((news) => {
      const newsContent = document.createElement("div");
      newsContent.classList.add("news__contents");
      newsContent.innerHTML = `
              <div class="news__topic">
                  <p>${news.topic}</p>
                  <a href=""><h6>${news.content}</h6></a>
              </div>
              <div class="news__img">
                  <img src="${news.image}" alt="">
              </div>
              <div class="date__author">
                  <div><p>${news.date}</p></div>
                  <div><p>${news.author}</p></div> 
              </div>
            
          `;
      newsContainer.appendChild(newsContent);
    });

    prevButton.disabled = currentPage === 1;
    nextButton.disabled =
      currentPage === Math.ceil(newsData.length / itemsPerPage);
  };

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayNews();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(newsData.length / itemsPerPage)) {
      currentPage++;
      displayNews();
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

// Initial zoom-out animation on page load
gsap.fromTo(".banner__image img", { scale: 0 }, { scale: 1, duration: 5 });

// Scroll-triggered zoom-in animation
gsap.fromTo(
  ".banner__image img",
  { scale: 1 },
  {
    scale: 0,
    scrollTrigger: {
      trigger: ".banner__image",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner__herotag");

  // Slide in on page load
  gsap.fromTo(
    banner,
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 3, ease: "power2.out" }
  );

  // Slide out on scroll out of the section

  ScrollTrigger.create({
    trigger: banner,
    start: "top center", // When the top of the section hits the middle of the viewport
    end: "bottom top", // When the bottom of the section leaves the top of the viewport
    onLeave: () => gsap.to(banner, { x: "-100%", opacity: 0, duration: 2 }),
    onEnterBack: () => gsap.to(banner, { x: "0%", opacity: 1, duration: 2 }),
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const player = document.querySelector(".player__slider-in");

  // Slide in from the right on page load
  gsap.fromTo(
    player,
    { x: "100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 3, ease: "power2.out" }
  );

  // Slide out on scroll out of the section
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: player,
    start: "top center", // Start animation when the section enters the viewport
    end: "bottom top", // End animation when the section leaves the viewport
    onLeave: () => gsap.to(player, { x: "100%", opacity: 0, duration: 2 }),
    onEnterBack: () => gsap.to(player, { x: "0%", opacity: 1, duration: 2 }),
  });
});

function initializeForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous error messages
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.style.display = "none"));

    // Get form values
    const textarea = document.getElementById("textarea").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validation flags
    let isValid = true;

    // Validate message
    if (textarea === "") {
      document.getElementById("textareaError").innerText =
        "Message is required.";
      document.getElementById("textareaError").style.display = "block";
      isValid = false;
    }

    // Validate name
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required.";
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText =
        "Enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // Send form data using AJAX
      const formData = new FormData();
      formData.append("textarea", textarea);
      formData.append("name", name);
      formData.append("email", email);

      fetch("contact.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Message sent successfully!");
            form.reset();
          } else {
            alert("There was an error sending your message. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong. Please try again later.");
        });
    }
  });
}

// Fetch and include the form in the desired element
document.addEventListener("DOMContentLoaded", () => {
  fetch("form.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("formContainer").innerHTML = html;
      initializeForm(); // Call the initialization function for validation
    });
});
