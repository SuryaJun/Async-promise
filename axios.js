// api
const API_KEY = "3f0ec6c5d4d84e88a5e1b24efad834d8";
const HEADLINES_NEWS = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`;

window.onload = function () {
  let newsType = document.getElementById("newsType");
  newsType.innerHTML = "<h5>Headlines</h5>";
  dat();
};

function dat() {
  search = document.getElementById("input-search").value;
  let newsType = document.getElementById("newsType");
  if (search) {
    newsType.innerHTML = "<h5>Search Result</h5>";
  } else {
    newsType.innerHTML = "<h5>Headlines</h5>";
  }
  const url = HEADLINES_NEWS + `&q=${search}`;
  axios
    .get(url)
    .then(function (response) {
      render(response.data);
    })
    .catch(function (error) {
      console.log(error);
      let news = document.getElementById("newsdetails");
      news.innerHTML = "<h5> data not found </h5>";
      // return;
    });
}
function render(response) {
  let news = document.getElementById("newsdetails");
  let btn = "";

  response.articles.forEach((data) => {
    btn += `<div class="card" style="width: 15rem; margin: 15px; box-shadow: 0px 0px 5px; border-radius: 20px;">
              <img class="card-img-top" src="${data.urlToImage}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title" src="${data.title}"></h5>
                  <p class="card-text">${data.publishedAt}</p>
                  <p class="card-text">${data.description}</p>
                  <a href="${data.url}" class="btn btn-primary">selengkapnya</a>
                </div>
              </div>
            </div>`;
  });
  // return btn;
  news.innerHTML = btn;
}
