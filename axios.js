// api
const API_KEY = "3f0ec6c5d4d84e88a5e1b24efad834d8";
const HEADLINES_NEWS =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=3f0ec6c5d4d84e88a5e1b24efad834d8";
const SEARCH_NEWS =
  "https://newsapi.org/v2/everything?country=id&apiKey=3f0ec6c5d4d84e88a5e1b24efad834d8";

window.onload = function () {
  newsType.innerHTML = "<h5>Headlines</h5>";
};

const btn = document.getElementById("data");
let search = "";
const url =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=3f0ec6c5d4d84e88a5e1b24efad834d8";

axios
  .get(url)
  .then(function (response) {
    render(response.data);
  })
  .catch(function (error) {
    console.log(response.status, response.statusText);
    data.innerHTML = "<h5> data not found </h5>";
    return;
  });

function dat() {
  search = document.getElementById("input-search").value;
}
function render(response) {
  let btn = "";
  response.articles.forEach((data) => {
    btn += `<div class="container bg-dark ">
                    <div class="img"><img src="${data.urlToImage}"/></div><br>
                    <div class="title text-white"><u><i>${data.title}</i></u></div><br>
                    <div class="publishedAt text-white">${data.publishedAt}</div><br>
                    <div class="description text-white">${data.description}</div><br>'
                  </div>`;
  });
  return btn;
}
