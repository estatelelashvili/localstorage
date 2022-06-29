// clickCounter();

class Info {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.clickT = 0;
    this.clickF = 0;
    this.counter = 0;
  }

  wrongClickCount() {
    return this.clickF++;
  }

  wrightClickCount() {
    return this.clickT++;
  }

  getFinal() {
    return {
      name: this.name,
      clicks: this.clickF,
    };
  }

  // get() {
  //   return this;
  // }
}

const me = new Info("saba", "chaba");
const btnWright = document.getElementById("btn-wright-id");
const btnWrong = document.getElementById("btn-wrong-id");
const btnStat = document.getElementById("btn-stat-id");
let retrievedObject = JSON.parse(localStorage.getItem("me"));
let oldValue = retrievedObject.clickT;
let objective = 0;
console.log(oldValue);
btnWright.onclick = () => {
  // me.wrightClickCount();
  me.counter += 1;
  objective = me.counter + oldValue;
  me.clickT = objective;
  // oldValue++;
  alert(
    `me.clickT: ${me.clickT} objective: ${objective} oldValue: ${oldValue}`
  );
  // alert(me.clickT);
  // me.clickT = newValue;
  localStorage.setItem("me", JSON.stringify(me));
};
console.log("retrievedObject: ", retrievedObject);
// console.log("retrievedObject: ", JSON.parse(retrievedObject));

btnStat.onclick = () => {
  let el = document.createElement("p");
  el.innerHTML = me.clickT;
  document.body.append(el);
};
