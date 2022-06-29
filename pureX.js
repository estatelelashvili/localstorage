// clickCounter();

class Info {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.wrightAnswers = 0;
    this.clickWrong = 0;
    this.counter = 0;

    this.retrievedObject = JSON.parse(localStorage.getItem("obj"));
    // this.oldValue = 0;
    this.oldValue = this.retrievedObject.wrightAnswers || 0;

    this.newValue = 0;
  }

  wrightPlus() {
    this.counter += 1;
    this.newValue = this.counter + this.oldValue;
    this.wrightAnswers = this.newValue;
    localStorage.setItem("obj", JSON.stringify(this));
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
// let retrievedObject = JSON.parse(localStorage.getItem("me"));
// let oldValue = retrievedObject.clickT;
// let objective = 0;

btnWright.onclick = () => {
  me.wrightPlus();
};
console.log("final ker: ", JSON.parse(localStorage.getItem("obj")));

btnStat.onclick = () => {
  let el = document.createElement("p");
  el.innerHTML = me.clickT;
  document.body.append(el);
};
