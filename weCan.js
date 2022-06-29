class Info {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.clickT = 0;
    this.clickF = 0;
    this.counter = 0;
    this.counter2 = 0;
    this.retrievedObject = JSON.parse(localStorage.getItem("obj")) || {};
    this.oldValue = this.retrievedObject.clickT || 0;
    this.oldValue2 = this.retrievedObject.clickF || 0;
    this.objective = 0;
    this.objective2 = 0;
  }

  clickIcrT() {
    this.counter += 1;
    this.objective = this.counter + this.oldValue;
    this.clickT = this.objective;
    localStorage.setItem("obj", JSON.stringify(this));
    console.log(this.retrievedObject);
  }
  clickIcrF() {
    this.counter2 += 1;
    this.objective2 = this.counter2 + this.oldValue2;
    this.clickF = this.objective2;
    localStorage.setItem("obj", JSON.stringify(this));
    console.log(this.retrievedObject);
  }
}

const me = new Info("saba", "chaba");
const btnWright = document.getElementById("btn-wright-id");
const btnWrong = document.getElementById("btn-wrong-id");
const btnStat = document.getElementById("btn-stat-id");
const btnClear = document.getElementById("btn-clear-id");

btnWright.onclick = () => {
  me.clickIcrT();
};

btnWrong.onclick = () => {
  me.clickIcrF();
};

btnStat.onclick = () => {
  let allStats = JSON.parse(localStorage.getItem("obj")) || me;
  let el = document.createElement("p");
  el.innerHTML = allStats.clickT;
  document.body.append(el);
};

btnClear.onclick = () => {
  localStorage.clear();
};
