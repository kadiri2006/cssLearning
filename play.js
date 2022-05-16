let container = document.querySelector(".container");

function display() {
  console.log("start");
  fetch("https://picsum.photos/v2/list")
    .then((x) => x.json())
    .then((x) =>
      x.forEach((element) => {
        let img = document.createElement("img");

        img.classList.add("item");
        img.src = element.download_url;

        container.appendChild(img);
      })
    )
    .catch((x) => console.log(x))
    .finally(() => console.log("End"));
}
