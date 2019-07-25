const display = document.querySelector(".dev");
const button = document.querySelector(".picker");

const devs = [
  "Aiden",
  "Carl",
  "Gabriel",
  "Liam",
  "Patrick",
  "Toosdai",
  "Brandon"
];

display.textContent = "press the button to pick a dev";

button.addEventListener("click", () => {
  devs.sort(() => Math.random() - 0.5);
  display.textContent = devs[0] == display.textContent ? devs[1] : devs[0];
});
