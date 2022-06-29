class YesArr {
  constructor() {
    this.wrightA = 0;
    // localStorage.setItem("yesArray", JSON.stringify(this));
  }
}

var objArr = new YesArr();

// let oldValueArray = JSON.parse(localStorage.getItem("yesArray"));
// yesArray = JSON.parse(localStorage.getItem("yesArray"));
// console.log("old value: " + oldValueArray.wrightA);
let oldValueArray = JSON.parse(localStorage.getItem("yesArray")) || {};
let newValue = 0;
console.log("new value: " + newValue);
let oldValue = oldValueArray.wrightA || 0;
console.log("old value: " + oldValue);
const btnWright = document.getElementById("btn-wright-id");
btnWright.onclick = () => {
  objArr.wrightA += 1;
  newValue = objArr.wrightA + oldValue;
  // console.log("new Value: " + newValue);
  objArr.wrightA = newValue;
  console.log("objArr.wrightA: " + objArr.wrightA);
  localStorage.setItem("yesArray", JSON.stringify(objArr));
  console.log(JSON.parse(localStorage.getItem("yesArray")));
};

const btnClear = document.getElementById("btn-clear-id");
btnClear.onclick = () => {
  localStorage.clear();
};
