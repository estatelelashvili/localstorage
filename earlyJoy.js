// clickCounter();

class Info {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.clickT = 0;
    this.clickF = 0;
    this.counter = 0;
    localStorage.setItem("me", JSON.stringify(this));
  }

  incrementT(value = 0) {
    this.clickT += 1;
    this.clickT += value;
  }
}

const me = new Info("saba", "chaba");

let oldValue = 0;
let objective = 0;

const btnWright = document.getElementById("btn-wright-id");
btnWright.onclick = () => {
  me.incrementT(7);
  localStorage.setItem("me", JSON.stringify(me));
  //   me.counter += 1;
  //   objective = me.counter + oldValue;
  //   me.clickT = objective;
  //   localStorage.setItem("me", JSON.stringify(me));
};

let retrievedObject = JSON.parse(localStorage.getItem("me"));
console.log("retrievedObject: ", retrievedObject);

const btnClear = document.getElementById("btn-clear-id");
btnClear.onclick = () => {
  localStorage.clear();
};
