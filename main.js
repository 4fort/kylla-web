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
let currentLetter = 0;
let currentProposal = 0;

const qtLineOne = `
  <p class="one">One day,</p>
  <p class="two">I'm gonna have what I prayed for...</p>
  <br/>
  <p class="three">Now I do, her name is Allyssa</p>`;

// const letters = [
//   `
// <p>
//   The third most beautiful woman I know and my everything,
// </p>

// <p>
//   I just want to say that I'm so happy to meet and know you.
//   Ever since we met my life has been very different, and I like this way
//   better.
// </p>
//   `, //^ 0
//   `
//   <p>
//   I'm not really good in writing letters, and thinking of something
//   to start this took me a long time.
// </p>
// <p>
//   I usually get annoyed when someone talks too much but I never got
//   annoyed not even once when u do.
// </p>
// <p>
//   You are the person that no one would really hate; There is
//   literally nothing to hate about you. You deserve pure love and
//   mwahmwah hahah.
// </p>
//   `, //^ 1
//   `
//   <p>
//   Your laugh is a music to my ears. You don't know how much I really
//   wanted to take a video of you every time you laugh, I just
//   couldn't take my phone out and ruin the pure genuine moment.
// </p>
// <p>Even though we never said it to each other, we knew</p>
// <p>
//   I have so many other things to say but I'm gonna save it for next
//   time.
// </p>
//   `, //^ 2
//   `<p>last letter</P`, //^ 3
// ];

const letters = [
  `
  <p>
    I'm not really good in writing letters, and thinking of something to start this took me a long time.
  </p>
  <p>
    So I hope you understand the imperfections 🥹.
  </p>
  `,
  `
  <p>
    The third most beautiful woman I know and my everything,
  </p>
  <p>
    When you see this you're probably my girlfriend already 😁. If not then you will be mwehehe.
  </p>
  <p>
    I just want to say that I'm so happy to meet and know you.
    Ever since we met my life has been very different, and I like this way
    better.
  </p>
  `,
  `
  <p>
    <em>Your laugh is a music to my ears. </em>
  </p>
  <p>
    You don't know how much I really wanted to take a video of you every time you laugh, I just couldn't take my phone out and ruin the pure genuine moment.
  </p>
  `,
  `
  <div class="image">
    <div>
      <img src="assets/anart.jpg" alt="unique">
    </div>
    <h3>
      An Art Gallery Could Never Be As Unique As You
    </h3>
  </div>
  <p class='lyrics'>
    So darling, darling, don't be scared<br/>
    'Cause <span>even if I look everywhere</span><br/>
    Your <span>colors caught my eye</span><br/>
    And <span>you're my favorite sight to see</span><br/>
  </p>
  `,
  `
  <p>
  If reincarnation is real; I want every lover of my reincarnation be your reincarnation.
  </p
  `,
  `
  <p>
    If you had a twin, I would still choose you.
  </p>
  `,
  `
  <p>
    You are a person of light.
  <p>
  <p>
    You light up my world in all times. 
  </p>
  `,
  `
  <div class="post-it">
    <p class="note">
      If you ever think I'm gonna leave you, always remember you are worth everything to me.
    </p>
    <p class="post-it">
      And I could never afford to lose you
    </p>
  </div>
  `,
  `
  <p>
    I have so many other things to say but I'm gonna save it for a different one. 😉
  </p>
  `,
];

const quotes = [qtLineOne];

const qtFirst = `
  <div class="quotes first fade">
    ${quotes[page]}
  </div>`;

const loveLetter = `
<div class="letter">
  <h1>Dearest Allyssa,</h1>
  <div class="body"></div>
  <div class="page-indicator"></div>
</div>
`;

const proposals = [
  `
  <p>
    Today is the month of love.
  </p>
  `,
  `
    <h1>Allyssa...</h1>
  `,
  `
    <h5>my pookie wookie cutie patootie sweetiepie with cherry on top</h5>
  `,
];

const proposalIntro = `<div class="fade proposal-intro"></div>`;

const pageComponents = [
  heroText,
  qtFirst,
  loveLetter,
  `
  <div class="pahabol">
    <img src="assets/kiss.gif" alt="cutieallyssa">
    <p> 
    I continued this today (Feb. 7, 2024)
    </p>
    <p>
      As I'm writing this today I know you're probably upset or something kay wako ka reply nimo ganiha.

    </p>
    <p>Baby im sorryyyy i really need to finish this so I can show you this tomorrow. Kay I want to see your reaction of this in person huhu</p>
    <p>Anyways, see you tomorrow baby!!!!!! I CANT WAIT!!!!!</p>
  </div>
`,
  proposalIntro,
  "",
];

const updateNavIndicator = () => {
  navIndicatorTabs.innerHTML = pageComponents
    .map((_, i) => {
      if (page == i) {
        //   if (i === 2)
        //     return `<div class="subNav">
        //   ${letters
        //     .map((_, i) => {
        //       if (currentLetter === i) return '<div class="active"></div>';
        //       return '<div class=""></div>';
        //     })
        //     .join("")}
        // </div>`;
        return '<div class="active"></div>';
      }

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

const updatePage = () => {
  console.log("page", page);
  updateNavIndicator();

  if (page === 2) {
    sectionFirst.innerHTML = pageComponents[page];
    showLetter(2000);
  } else if (page === 4) {
    sectionFirst.innerHTML = pageComponents[page];
    showProposalIntro();
  } else if (page === pageComponents.length - 1) {
    sectionFirst.innerHTML = pageComponents[page];
    showProposal();
  } else {
    sectionFirst.innerHTML = pageComponents[page];
  }
};

navLeft.addEventListener("click", () => {
  if (page === 2 && isClickable) {
    if (currentLetter === 0) navigateLeft();
    else if (currentLetter <= letters.length) {
      currentLetter--;
      showLetter();
    }
  }
  if (page === 4 && isClickable) {
    console.log("here");
    if (currentProposal === 0) navigateLeft();
    else if (currentProposal <= proposals.length) {
      currentProposal--;
      console.log("currentProposal", currentProposal);
      showProposalIntro();
    }
  }
  navigateLeft();
});
const navigateLeft = () => {
  if (isClickable) {
    isClickable = false;
    if (page > 0) {
      page--;
      updatePage();
    }
    setTimeout(() => {
      isClickable = true;
    }, 300);
  }
};

navRight.addEventListener("click", () => {
  if (page === 2 && isClickable) {
    if (currentLetter === letters.length - 1) navigateRight();
    else if (currentLetter < letters.length) {
      currentLetter++;
      showLetter();
    }
  }
  if (page === 4 && isClickable) {
    if (currentProposal < proposals.length - 1) {
      currentProposal++;
      console.log("currentProposal", currentProposal);
      showProposalIntro();
    }
  }
  navigateRight();
});
const navigateRight = () => {
  if (isClickable) {
    isClickable = false;
    if (page < pageComponents.length - 1) {
      page++;
      updatePage();
    }
    setTimeout(() => {
      isClickable = true;
    }, 300);
  }
};

window.addEventListener("keydown", (e) => {
  if (e.key == 37 || e.key == "ArrowLeft") {
    navigateLeft();
  } else if (e.key == 39 || e.key == "ArrowRight") {
    navigateRight();
  }
});

const showLetter = (delay = 0) => {
  const letter = document.querySelector(".letter");
  const letterBody = document.querySelector(".letter .body");
  const letterPageIndicator = document.querySelector(".letter .page-indicator");

  isClickable = false;

  setTimeout(() => {
    letterBody.innerHTML = letters[currentLetter];
    letterBody.style = "animation: fade 1.5s;";
    letter.style = `
    max-height: ${letterBody.offsetHeight}px; 
    `;
    letterPageIndicator.innerHTML = `Page ${currentLetter + 1} of ${
      letters.length
    }`;
    isClickable = true;
  }, delay);
};

const showProposalIntro = (delay = 0) => {
  const proposalOne = document.querySelector(".proposal-intro");
  const text = "Allyssa...";

  isClickable = false;

  setTimeout(() => {
    proposalOne.innerHTML = proposals[currentProposal];
    proposalOne.style = "animation: fade 1.5s;";
    isClickable = true;
  }, delay);
  // if (currentProposal === 1) {
  //   isClickable = false;
  //   setTimeout(() => {
  //     for (let i = 0; i < text.length; i++) {
  //       setTimeout(() => {
  //         proposalOne.innerText += text[i];
  //       }, 100 * i);
  //     }
  //     isClickable = true;
  //   }, 500);
  // }
};

const showProposal = () => {
  window.location.href = "proposal.html";
};
