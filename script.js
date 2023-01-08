const toggleSwitch = document.getElementById("toggle");

toggleSwitch.addEventListener("click", () => {
  const topBG = document.getElementById("top-bg");
  const brandName = document.getElementById("brand-name");
  const cardSection = document.querySelectorAll("#card-section");
  const followerNum = document.querySelectorAll("#foll-num");
  const card = document.querySelectorAll("#card");
  const responseNum = document.querySelectorAll("#response-num");

  document.body.classList.toggle("dark-bg");
  topBG.classList.toggle("dark-top-bg");
  brandName.classList.toggle("dark-light-text");
  cardSection.forEach((el) => {
    el.classList.toggle("dark-card");
  });
  card.forEach((el) => {
    el.classList.toggle("dark-card");
  });
  followerNum.forEach((el) => {
    el.classList.toggle("dark-light-text");
  });
  responseNum.forEach((el) => {
    el.classList.toggle("dark-light-text");
  });
});
