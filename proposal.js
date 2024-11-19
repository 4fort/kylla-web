let hoverCounter = 0;
let clickCounter = 0;

const title = document.querySelector(".title");
const image = document.querySelector(".image");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");

let x;
let y;

yesButton.addEventListener("click", () => {
  title.innerText = "Yayyyy!!!💖💖💖";
  image.innerHTML = `<img src="assets/catyes.jpeg" alt="cutieallyssa" />`;
  yesButton.style = "display: none";
  noButton.style = "display: none";
  setTimeout(() => {
    document.write(`
      <img src="assets/catprop.jpg" alt="cutieallyssa" height="300px" />
      <h1>Naa koy e ingon</h1>
    `);
  }, 2000);
});

noButton.addEventListener("click", () => {
  hoverCounter++;

  switch (hoverCounter) {
    case 3:
      noButton.innerText = "Are you sure?";
      image.innerHTML = `<img src="assets/cat2.jpg" alt="cutieallyssa" />`;
      break;
    case 5:
      noButton.innerText = "Baby please";
      image.innerHTML = `<img src="assets/cat3.jpg" alt="cutieallyssa" />`;

      break;
    case 6:
      noButton.innerText = "Don't do this to me :(";
      image.innerHTML = `<img src="assets/cat4.jpg" alt="cutieallyssa" />`;

      break;
    case 7:
      noButton.innerText = "You're going to break my heart";
      image.innerHTML = `<img src="assets/cat5.jpg" alt="cutieallyssa" />`;

      break;
    case 8:
      noButton.innerText = "This is your last chance";
      break;
    case 15:
  }
  moveButton();

  // if (hoverCounter == 5) {
  //   title.innerHTML = "Are you sure you want to do that?";
  // } else if (hoverCounter == 10) {
  //   title.innerHTML = "Think again Kylla!";
  // } else if (hoverCounter == 15) {
  //   title.innerHTML = "No, don't do that!";
  // } else if (hoverCounter == 20) {
  //   title.innerHTML = "Please don't!";
  // } else if (hoverCounter == 25) {
  //   title.innerHTML = "This is your last chance :(((";
  // } else if (hoverCounter >= 30) {
  //   if (hoverCounter == 30) {
  //     title.innerHTML = "fine...";
  //   }

  //   noButton.addEventListener("click", () => {
  //     title.innerHTML = "Really, baby?";
  //     clickCounter++;
  //     if (clickCounter == 1) {
  //       title.innerHTML = "I'm sure you are.";
  //     } else if (clickCounter == 2) {
  //       yesButton.style.transform = "scale(2)";
  //       noButton.style.transform = `${noButton.style.transform} scale(.8)`;
  //     }
  //   });
  // }

  // if (hoverCounter <= 30) {
  //   moveButton();
  // }

  moveButton();
});

const moveButton = () => {
  const w = window.innerWidth - 90;
  const h = window.innerHeight - 90;

  x = Math.random() * noButton.offsetWidth;
  y = Math.random() * noButton.offsetHeight;
  // noButton.style.left = x + "px";
  // noButton.style.top = y + "px";
  if (hoverCounter < 3) {
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  } else if (hoverCounter >= 3) {
    yesButton.style.transform = `scale(${hoverCounter - 2 / 1.1})`;
    noButton.style.transform = `${noButton.style.transform} scale(.98)`;
  }
};
