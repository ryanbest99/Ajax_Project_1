const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  console.log("HELLO");
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      console.log(data.value);
      content.textContent = data.value;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
