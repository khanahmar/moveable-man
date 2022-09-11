const man = document.getElementById("man");
let leftSide = 0;
let topSide = 0;

window.addEventListener("keydown", (e) => {
  console.log(e.key);

  //   switch (e.key) {
  //     case "ArrowRight":
  //       leftSide = leftSide + 10;
  //       man.style.left = `${leftSide}px`;
  //       break;

  //     case "ArrowLeft":
  //       leftSide = leftSide - 10;
  //       man.style.left = `${leftSide}px`;
  //       break;

  //     case "ArrowUp":
  //       topSide = topSide - 10;
  //       man.style.top = `${topSide}px`;
  //       break;

  //     case "ArrowDown":
  //       topSide = topSide + 10;
  //       man.style.top = `${topSide}px`;
  //       break;

  //     default:
  //       alert("can't move the man You have pressed the wrong key");
  //       break;
  //   }

  if (e.key === "ArrowRight") {
    leftSide = leftSide + 10;
    man.style.left = `${leftSide}px`;
  } else if (e.key === "ArrowLeft") {
    leftSide = leftSide - 10;
    man.style.left = `${leftSide}px`;
  } else if (e.key === "ArrowUp") {
    topSide = topSide - 10;
    man.style.top = `${topSide}px`;
  } else if (e.key === "ArrowDown") {
    topSide = topSide + 10;
    man.style.top = `${topSide}px`;
  } else [console.log("invalid key")];
});
