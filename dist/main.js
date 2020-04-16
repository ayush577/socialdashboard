let status = document.querySelector("input[name=checkbox]");
const themeSwitcher = document.querySelector("body");
const text = document.querySelector("#anually");

status.addEventListener("change", (event) => {
  event.preventDefault();
  if (status.checked) {
    themeSwitcher.className = "theme-dark";
    text.innerHTML = "Light Mode";
  } else if (!status.checked) {
    themeSwitcher.className = "theme-light";
    text.innerHTML = "Dark Mode";
  }
});
