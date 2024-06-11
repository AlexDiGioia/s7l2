const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");
const nameInput = document.getElementById("name");
const nameList = document.getElementById("nameList");
const timer=document.getElementById("timer");
let names=[];

const saveName = function (event) {
  if (nameInput.value !== "") {
    localStorage.setItem("savedName", nameInput.value);
    checkSaved();
  }
};
const removeName = function (event) {
  localStorage.removeItem("savedName");
  checkSaved();
};
const checkSaved = function () {
   names = localStorage.getItem("savedName");
  while (nameList.firstChild) {
    nameList.removeChild(nameList.firstChild);
  }
  if (names != null) {
    const newLi = document.createElement("li");
    newLi.textContent = `${names}`;
    nameList.appendChild(newLi);
  }
};

saveBtn.onclick = saveName;
removeBtn.onclick = removeName;

const timeCount = function () {
    
  let seconds = sessionStorage.getItem("savedSeconds");
  console.log(seconds)

  if (seconds === null) {
    seconds = 1;
  } else {
    seconds ++;
  }
  sessionStorage.setItem("savedSeconds", seconds);
  timer.textContent=seconds;
};

setInterval(timeCount, 1000);


