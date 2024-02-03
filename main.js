// let hoverCounter = 0;
// let clickCounter = 0;

// const title = document.querySelector(".title");
// const counter = document.querySelector(".counter");
// const yesButton = document.querySelector(".yes");
// const noButton = document.querySelector(".no");

// let x;
// let y;

// noButton.addEventListener("click", () => {
//   hoverCounter++;
//   // counter.innerHTML = hoverCounter;

//   if (hoverCounter == 5) {
//     title.innerHTML = "Are you sure you want to do that?";
//   } else if (hoverCounter == 10) {
//     title.innerHTML = "Think again Kylla!";
//   } else if (hoverCounter == 15) {
//     title.innerHTML = "No, don't do that!";
//   } else if (hoverCounter == 20) {
//     title.innerHTML = "Please don't!";
//   } else if (hoverCounter == 25) {
//     title.innerHTML = "This is your last chance :(((";
//   } else if (hoverCounter >= 30) {
//     if (hoverCounter == 30) {
//       title.innerHTML = "fine...";
//     }

//     noButton.addEventListener("click", () => {
//       title.innerHTML = "Really, baby?";
//       clickCounter++;
//       if (clickCounter == 1) {
//         title.innerHTML = "I'm sure you are.";
//       } else if (clickCounter == 2) {
//         yesButton.style.transform = "scale(2)";
//         noButton.style.transform = `${noButton.style.transform} scale(.8)`;
//       }
//     });
//   }

//   if (hoverCounter <= 30) {
//     moveButton();
//   }
// });

// const moveButton = () => {
//   const w = window.innerWidth - 90;
//   const h = window.innerHeight - 90;

//   x = Math.random() * (w - noButton.offsetWidth);
//   y = Math.random() * (h - noButton.offsetHeight);
//   // noButton.style.left = x + "px";
//   // noButton.style.top = y + "px";
//   noButton.style.transform = `translate(${x}px, ${y}px)`;
// };

const wrapper = document.querySelector(".wrapper");
const sectionFirst = document.querySelector(".section-first");
const openingText = document.querySelector(".opening-text");
const mainText = document.querySelector(".text");
let isClickable = false;
let page = 0;

const qtLineOne = `
  <p class="one">One day,</p>
  <p class="two">I'm gonna have what I prayed for.</p>
  <p class="three">Now I do.</p>`;

// const qtLineTwo = `
//   <p class="one">Your laugh is a music to my ears.</p>
//   <p class="two">You don't know how much I really wanted</p>
//   <p class="two">to take a video of you every time you genuinely laugh,</p>
//   <p class="two">I just couldn't,</p>
//   <p class="three">taking out my phone will ruin the moment.</p>
// `;

const quotes = [qtLineOne];

const qtFirst = `
  <div class="quotes first fade">
    ${quotes[page]}
  </div>`;

setTimeout(() => {
  openingText.style = "transform: scale(.9);";
  mainText.style = "transform: scale(1.2);";
  isClickable = true;
}, 2000);

wrapper.addEventListener("click", () => {
  console.log("clicked");
  if (isClickable) {
    isClickable = false;
    sectionFirst.innerHTML = qtFirst;

    setTimeout(() => {
      document.querySelector(".quotes").style = "transform: scale(1.08);";
      isClickable = true;
    }, 1500);
  }
});
