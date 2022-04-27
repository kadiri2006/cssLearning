let openBtn = document.getElementsByClassName("open-model")[0];
let closeBtn = document.getElementsByClassName("close-model")[0];
let model = document.getElementById("model");
let formElement = document.getElementById("form");
let formData = new FormData(formElement);

openBtn.addEventListener("click", () => {
  model.showModal();
});

closeBtn.addEventListener("click", (e) => {
  console.log(formData.get("one"));

  e.preventDefault();
  model.close();
});

formElement.addEventListener("submit", () => {
  alert("form submit");
});

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement

// https://codepen.io/kevinpowell/pen/KKyOYvM?editors=1010
