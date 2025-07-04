document.addEventListener("DOMContentLoaded", () => {
  const door = document.querySelector(".welcome-door");

  setTimeout(() => {
    door.classList.add("open");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const covers = document.querySelectorAll(".cover");
  const clickSound = document.getElementById("clickSound");
  const pansee = document.querySelector(".pansee");
  const card_1 = document.getElementById("card1");
  const card_2 = document.getElementById("card2");
  const card_3 = document.getElementById("card3");
  const card_4 = document.getElementById("card4");
  const thuytien = document.querySelector(".thuytien");
  const bbay = document.querySelector(".bbay");

  covers.forEach((cover) => {
    cover.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
      cover.style.opacity = "0";
      cover.style.pointerEvents = "none";
    });
  });
  card_1.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    pansee.classList.add("move-left");
  });
  card_2.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    bbay.classList.add("move-top");
  });
  card_4.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    thuytien.classList.add("move-right");
  });

  document.addEventListener("click", (e) => {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    flower.style.left = `${e.clientX - 30}px`;
    flower.style.top = `${e.clientY - 30}px`;

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 800);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");

  const allowPlay = () => {
    audio.play().catch((e) => {
      console.log("Autoplay bị chặn:", e);
    });
    document.removeEventListener("click", allowPlay);
  };

  document.addEventListener("click", allowPlay);
});
