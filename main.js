// console.log("Welcome to Search App Application");

let iFrames = document.getElementsByTagName("iframe");
let listItems = document.getElementsByTagName("li");

displaySrchRsltTab(undefined);
document.getElementById("searchBtn").addEventListener("click", searchResults);

function searchResults(e) {
  // console.log(e);

  let searchInputVal = document.getElementById("searchText").value;
  console.log(`${searchInputVal}`);

  for (let i = 0; i < iFrames.length - 1; i++) {
    if (i !== 1) {
      iFrames[i].src = `${iFrames[i].getAttribute(
        "data-src"
      )}${searchInputVal}`;
    } else {
      iFrames[i].src = `${iFrames[i].getAttribute(
        "data-src"
      )}${searchInputVal}&btnG=Search`;
    }

    iFrames[i].classList.add("hidden");
  }
  displaySrchRsltTab("1");
}

function displaySrchRsltTab(id) {
  for (let i = 0; i < iFrames.length; i++) {
    iFrames[i].classList.add("hidden");
    listItems[i].classList.remove("active");
  }

  if (id !== undefined) {
    listItems[id - 1].classList.add("active");
    iFrames[id - 1].classList.remove("hidden");
    iFrames[id - 1].classList.add("show");
    iFrames[iFrames.length].classList.add("hidden");
  } else {
    iFrames[iFrames.length - 1].classList.remove("hidden");
    iFrames[iFrames.length - 1].classList.add("show");
  }
}
