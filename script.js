//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.innerHTML = `${episodeList.length} episode(s)`;


episodeList.forEach((episodeList) =>{
let container = document.createElement("div");
container.className = "column";
rootElem.appendChild(container);
let name = episodeList.name;
let number = ` - S${episodeList.season < 10 ? "0" + episodeList.season : episodeList.season }E${episodeList.number < 10 ? "0" + episodeList.number : episodeList.number }`;
let image = episodeList.image.medium;
let summary = episodeList.summary;

let h1El = document.createElement("h1");
container.appendChild(h1El);
h1El.textContent = name + number;


let elementImg = document.createElement("img");
container.appendChild(elementImg);
elementImg.src = image;

let elementSummary = document.createElement("p");
container.appendChild(elementSummary)
elementSummary.innerHTML = summary;


});

}
window.onload = setup;

function myFunction(episodeList) {
  var input, filter, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
 
  for (i = 0; i < episodeList.length; i++) {
      a = episodeList[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          episodeList[i].style.display = "";
      } else {
          episodeList[i].style.display = "none";
      }
  }
}





