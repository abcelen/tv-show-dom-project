//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //adds search box
  let searchDiv = document.createElement("div");
  searchDiv.className = "myInput";
  rootElem.appendChild(searchDiv);
  let searchLabel = document.createElement("label");
  let searchBox = document.createElement("input");
  searchBox.setAttribute("type", "text");
  searchDiv.appendChild(searchBox);
  searchDiv.appendChild(searchLabel);
  searchLabel.innerHTML = `<p class = "label">    Displaying ${episodeList.length}/${episodeList.length} episode(s)</p>`;

  episodeList.forEach((episodeList) => {
    let container = document.createElement("div");
    container.className = "column";
    rootElem.appendChild(container);
    let name = episodeList.name;
    let number = ` - S${
      episodeList.season < 10 ? "0" + episodeList.season : episodeList.season
    }E${
      episodeList.number < 10 ? "0" + episodeList.number : episodeList.number
    }`;
    let image = episodeList.image.medium;
    let summary = episodeList.summary;

    let h1El = document.createElement("h1");
    container.appendChild(h1El);
    h1El.textContent = name + number;

    let elementImg = document.createElement("img");
    container.appendChild(elementImg);
    elementImg.src = image;

    let elementSummary = document.createElement("p");
    container.appendChild(elementSummary);
    elementSummary.innerHTML = summary;

    searchBox.addEventListener(`keyup`, (x) => {
      let searchValue = x.target.value.toLowerCase();
      let searchItems = document.getElementsByClassName(`column`);
      Array.from(searchItems).forEach((element) => {
        let title = element.textContent;
        if (title.toLowerCase().indexOf(searchValue) != -1) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    });
  });
}
window.onload = setup;
