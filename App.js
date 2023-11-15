//DECLARING AND EXTRACTING

const API =
  "https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews";
let nametext = document.querySelectorAll(".nametext");
let category = document.querySelectorAll(".category-text");
let content = document.querySelectorAll(".content");
let readmore = document.querySelectorAll(".readmore");
let anc = document.querySelectorAll(".ancread");
let selectbutton = document.querySelector(".selectcategory");
let allbtn = document.querySelector(".allbtn");
let mynewsfeed = document.querySelectorAll(".newsfeed");
let newsdiv3 = document.querySelector(".newsdiv3");
let newsdiv2 = document.querySelector(".newsdiv-2");
let newnewsbtn3 = document.querySelector(".newnewsbtn-3");
let btnselect = document.querySelectorAll(".btnselect");
let savedbtn = document.querySelector(".savedbtn-2");
let cont3 = document.querySelector(".containerthree");

// FUNCTION TO FETCH DATA FROM API

async function fetchdata() {
  const data = await fetch(API);
  const jsondata = await data.json();
  return jsondata;
}

//FUNCTION For BY-DEFAULT SHOWING 2 NEWS

async function showdefaultdata(x, y, a, b) {
  let favicon = document.querySelectorAll(".fav-icon");

  // SHOWING AUTHOR
  const data = await fetchdata();
  let text = `${data[a][" author"]}`;
  let text2 = `${data[b][" author"]}`;
  nametext[x].innerText = text.toUpperCase();
  nametext[y].innerText = text2.toUpperCase();

  let text3 = `${data[1][" author"]}`;
  let text4 = `${data[4][" author"]}`;
  nametext[2].innerText = text3.toUpperCase();
  nametext[3].innerText = text4.toUpperCase();

  console.log("called");
  // SHOWING CATEGORY
  let cat1 = `${data[a][" category"]}`;
  let cat2 = `${data[b][" category"]}`;
  category[x].innerText = cat1.toUpperCase();
  category[y].innerText = cat2.toUpperCase();

  let cat3 = `${data[1][" category"]}`;
  let cat4 = `${data[4][" category"]}`;
  category[2].innerText = cat3.toUpperCase();
  category[3].innerText = cat4.toUpperCase();

  // SHOWING CONTENT
  content[x].innerText = `${data[a].content}  `;
  content[y].innerText = `${data[b].content}`;

  content[2].innerText = `${data[1].content}  `;
  content[3].innerText = `${data[4].content}`;

  // ADDING READMORE FUNCTIONALITY
  readmore[x].addEventListener("click", () => {
    anc[x].setAttribute("href", `${data[a].url}`);
  });
  readmore[y].addEventListener("click", () => {
    anc[y].setAttribute("href", `${data[b].url}`);
  });

  readmore[2].addEventListener("click", () => {
    anc[2].setAttribute("href", `${data[1].url}`);
  });
  readmore[3].addEventListener("click", () => {
    anc[3].setAttribute("href", `${data[4].url}`);
  });
  faviconfunc();
}

// DISPLAYING SELECT BUTTON OPTIONS WHEN CLICKED ON SELECT CATEGORY

selectbutton.addEventListener("click", () => {
  document.querySelector(".selectbuttons").classList.toggle("display");
});

// DISPLAYING ALL NEWS WHEN ALL BUTTON IS CLICKED

allbtn.addEventListener("click", async () => {
  let data = await fetchdata();

  newsdiv3.innerHTML = "";
  data.forEach((e) => {
    let html = ` <div class="newsdiv">
                <div class="name-category">
                    <p class="name">BY: <b class="nametext">${e[
                      " author"
                    ].toUpperCase()}</b></p>
                    <p class="category">CATEGORY: <b class="category-text">${e[
                      " category"
                    ].toUpperCase()}</b></p>
                </div>
                <div>
                    <span class="content">${e.content}</span>
                    <button class="readmore"><a href="${
                      e.url
                    }" class="ancread" target="_blank">READ MORE</a></button>
                </div>
                <div class="icon">
                    <i id="${
                      e[" category"]
                    }" class="fa-sharp fa-regular fa-heart fa-2xl fav-icon"></i>
                </div>
            </div>`;
    newsdiv3.innerHTML += html;
  });
  faviconfunc();
});

// HANDLING THE CLICK OF MY NEWSFEED BUTTON

for (let i = 0; i <= 1; i++) {
  mynewsfeed[i].addEventListener("click", async () => {
    let data = await fetchdata();

    if (i == 0) {
      cont3.classList.remove("display");
      newsdiv2.innerHTML = "";
      data.forEach((e) => {
        if (e[" category"] === "world") {
          displayingnewscont2(e, "world");
        }
        if (e[" category"] === "politics") {
          displayingnewscont2(e, "politics");
        }
      });
    } else {
      newsdiv3.innerHTML = "";
      data.forEach((e) => {
        if (e[" category"] === "world") {
          displayingnews(e, "world");
        }
        if (e[" category"] === "hatke") {
          displayingnews(e, "hatke");
        }
      });
    }
    faviconfunc();
  });
}

//DISPLAYING NEW ON CLICKING MYFEED BUTTON

function displayingnewscont2(e, val) {
  console.log("hons");
  let html = ` <div class="newsdiv">
                <div class="name-category">
                    <p class="name">BY: <b class="nametext">${e[
                      " author"
                    ].toUpperCase()}</b></p>
                    <p class="category">CATEGORY: <b class="category-text">${e[
                      " category"
                    ].toUpperCase()}</b></p>
                </div>
                <div>
                    <span class="content">${e.content}</span>
                    <button class="readmore"><a href="${
                      e.url
                    }" class="ancread" target="_blank">READ MORE</a></button>
                </div>
                <div class="icon">
                    <i  id="${
                      e[" category"]
                    }"class="fa-sharp  fa-regular fa-heart fa-2xl fav-icon"></i>
                </div>
            </div>`;
  newsdiv2.innerHTML += html;
}
// HANDLING THE CLICK OF NEW NEWS BUTTON

newnewsbtn3.addEventListener("click", newnewsfunc);
async function newnewsfunc() {
  cont3.classList.remove("display");
  let data = await fetchdata();
  newsdiv3.innerHTML = "";
  data.forEach((e) => {
    if (e[" category"] === "business") {
      displayingnews(e, "business");
    }
    if (e[" category"] === "science") {
      displayingnews(e, "science");
    }
    if (e[" category"] === "politics") {
      displayingnews(e, "politics");
    }
  });
  faviconfunc();
}
// HANDLING THE CLICK OF DIFFERENT CATEGOTY BUTTON

for (let i of btnselect) {
  i.addEventListener("click", async () => {
    console.log(i.value);

    let data = await fetchdata();

    data.forEach((e) => {
      if (e[" category"] === i.value) {
        newsdiv3.innerHTML = "";
        displayingnews(e, i.value);
      }
    });
    faviconfunc();
  });
}

// HANDLING THE CLICK OF SAVED BUTTON
savedbtn.addEventListener("click", savedfunc);

async function savedfunc() {
  let items = JSON.parse(localStorage.getItem("card"));
  console.log(items);
  let data = await fetchdata();
  newsdiv2.innerHTML = "";
  cont3.classList.add("display");
  items.forEach((e) => {
    console.log("knbg");
    data.forEach((ed) => {
      if (ed[" category"] === e) {
        displayingnews2(ed, e);
      }
    });
  });
  faviconfunc();
}

//DISPLAYING SAVED NEWS IN CONTAINER 2

function displayingnews2(e, val) {
  console.log("hons");
  let html = ` <div class="newsdiv">
                <div class="name-category">
                    <p class="name">BY: <b class="nametext">${e[
                      " author"
                    ].toUpperCase()}</b></p>
                    <p class="category">CATEGORY: <b class="category-text">${e[
                      " category"
                    ].toUpperCase()}</b></p>
                </div>
                <div>
                    <span class="content">${e.content}</span>
                    <button class="readmore"><a href="${
                      e.url
                    }" class="ancread" target="_blank">READ MORE</a></button>
                </div>
                <div class="icon">
                    <i  id="${
                      e[" category"]
                    }"class="fa-solid  fa-regular fa-heart fa-2xl fav-icon"></i>
                </div>
            </div>`;
  newsdiv2.innerHTML += html;
}

// DISPLAYING NEWS IN THE CONTAINER 3

function displayingnews(e, val) {
  console.log("hons");
  let html = ` <div class="newsdiv">
                <div class="name-category">
                    <p class="name">BY: <b class="nametext">${e[
                      " author"
                    ].toUpperCase()}</b></p>
                    <p class="category">CATEGORY: <b class="category-text">${e[
                      " category"
                    ].toUpperCase()}</b></p>
                </div>
                <div>
                    <span class="content">${e.content}</span>
                    <button class="readmore"><a href="${
                      e.url
                    }" class="ancread" target="_blank">READ MORE</a></button>
                </div>
                <div class="icon">
                    <i  id="${
                      e[" category"]
                    }"class="fa-sharp  fa-regular fa-heart fa-2xl fav-icon"></i>
                </div>
            </div>`;
  newsdiv3.innerHTML += html;
}

// Marking as favourite

function faviconfunc() {
  let favicon = document.querySelectorAll(".fav-icon");
  for (let i of favicon) {
    i.addEventListener("click", (e) => {
      // e.target.classList.toggle("fa-solid")
      console.log(e.target);
      console.log(e.target.id);
      const { id } = e.target;
      console.log(id);
      if (e.target.classList.contains("fa-solid")) {
        e.target.classList.remove("fa-solid");
        removefromls(id);
      } else {
        e.target.classList.add("fa-solid");
        addtols(id);
      }
    });
  }
}

// EXTRACTING DATA FROM LOCAL STORAGE

function getfromls() {
  let items = JSON.parse(localStorage.getItem("card"));
  console.log(items);
  return items == null ? [] : items;
}

// ADDING TO LOCAL STORAGE IF WISHLIST IS CLICKED

function addtols(catname) {
  let card = getfromls();
  if (card == null) {
    localStorage.setItem("card", JSON.stringify(catname));
  } else {
    localStorage.setItem("card", JSON.stringify([...card, catname]));
  }
}

// DELETING FROM LOCAL STORAGE IF WISHLIST IS CLICKED AGAIN

function removefromls(catname) {
  let card = getfromls();
  let newcard = card.filter((catnewname) => {
    return catnewname != catname;
  });
  localStorage.setItem("card", JSON.stringify(newcard));
}

showdefaultdata(0, 1, 2, 3);