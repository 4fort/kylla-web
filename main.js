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

const heroText = `
<div class="opening-text fade">
            <div class="qt-open">“</div>
            <div class="text">
              <h1>Hello,</h1>
              <h1>Allyssa</h1>
            </div>
            <div class="qt-close">”</div>
          </div>`;

const navigator = document.querySelector(".navigator");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");
const navIndicator = document.querySelector(".nav-indicator");
const navIndicatorTabs = document.querySelector(".indicator");

const wrapper = document.querySelector(".wrapper");
const sectionFirst = document.querySelector(".section-first");
sectionFirst.innerHTML = heroText;
const openingText = document.querySelector(".opening-text");
const mainText = document.querySelector(".text");

let isClickable = false;
let page = 0;

const qtLineOne = `
  <p class="one">One day,</p>
  <p class="two">I'm gonna have what I prayed for...</p>
  <p class="three">Now I do.</p>`;

const letters = [
  `
  <p>
  I'm not really good in writing letters and thinking of something
  to start this took me a long time.
</p>
<p>
  I usually get annoyed when someone talks too much but I never got
  annoyed not even once when u do.
</p>
<p>
  You are the person that no one would really hate; There is
  literally nothing to hate about you. You deserve pure love and
  mwahmwah hahah.
</p>
<p>
  I just want to say that I'm so happy to meet and know you.
  Ever since we met my life has been very different; I like this way
  better.
</p>
  `,
  `
  <p>
  Your laugh is a music to my ears. You don't know how much I really
  wanted to take a video of you every time you laugh, I just
  couldn't take my phone out and ruin the pure genuine moment.
</p>
<p>Even though we never said it to each other, we knew</p>
<p>
  I have so many other things to say but I'm gonna save it for next
  time.
</p>
  `,
];

const quotes = [qtLineOne];

const qtFirst = `
  <div class="quotes first fade">
    ${quotes[page]}
  </div>`;

const loveLetter = `
<div class="letter fade">
  <h1>Dearest Allyssa,</h1>
  <div class="body"></div>
</div>
`;

const pageComponents = [heroText, qtFirst, loveLetter];

const updateNavIndicator = () => {
  navIndicatorTabs.innerHTML = pageComponents
    .map((_, i) => {
      if (page == i) return '<div class="active"></div>';
      return '<div class=""></div>';
    })
    .join("");
};

setTimeout(() => {
  openingText.style = "transform: scale(.9);";
  mainText.style = "transform: scale(1.2);";
  navIndicator.style = "animation: fade 1s;";

  updateNavIndicator();

  isClickable = true;
}, 2000);

// wrapper.addEventListener("click", () => {
//   console.log("clicked");
//   if (isClickable) {
//     isClickable = false;

//     if (page == 0) {
//       sectionFirst.innerHTML = qtFirst;
//       page++;
//     } else if (page == 1) {
//       sectionFirst.innerHTML = loveLetter;
//     }

//     setTimeout(() => {
//       if (page == 0)
//         document.querySelector(".quotes").style = "transform: scale(1.08);";
//       isClickable = true;
//     }, 2000);
//   }
// });

const updatePage = () => {
  console.log(page);
  updateNavIndicator();

  switch (page) {
    case 0:
      sectionFirst.innerHTML = heroText;
      break;
    case 1:
      sectionFirst.innerHTML = qtFirst;
      break;
    case 2:
      sectionFirst.innerHTML = loveLetter;
      showLetter();
      break;
  }
};

navLeft.addEventListener("click", () => {
  if (isClickable) {
    isClickable = false;
    if (page <= pageComponents.length - 1 && page > 0) page--;
    updatePage();
    setTimeout(() => {
      isClickable = true;
    }, 2000);
  }
});

navRight.addEventListener("click", () => {
  if (isClickable) {
    isClickable = false;
    if (page < pageComponents.length - 1) page++;
    updatePage();
    setTimeout(() => {
      isClickable = true;
    }, 2000);
  }
});

const showLetter = () => {
  const letter = document.querySelector(".letter");
  const letterBody = document.querySelector(".letter .body");

  setTimeout(() => {
    letterBody.innerHTML = letters[0];
    letterBody.style = "animation: fade 1.5s;";
    letter.style = `
      max-height: ${letterBody.offsetHeight}px; 
      `;
  }, 2000);
};
