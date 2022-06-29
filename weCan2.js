class Info {
  constructor() {
    this.retrievedObject = JSON.parse(localStorage.getItem("obj")) || {};
    this.clickT = this.retrievedObject.clickT || 0;
    this.clickF = this.retrievedObject.clickF || 0;
    // this.counter = 0;
    // this.counter2 = 0;
    // this.oldValue = this.retrievedObject.clickT || 0;
    // this.oldValue2 = this.retrievedObject.clickF || 0;
    // this.objective = 0;
    // this.objective2 = 0;
  }

  clickIcrT() {
    this.clickT++;
    // this.counter += 1;
    // this.objective = this.counter + this.oldValue;
    // this.clickT = this.objective;
    // this.clickF = this.objective2;

    localStorage.setItem("obj", JSON.stringify(this));
    console.log(this.retrievedObject);
  }
  clickIcrF() {
    this.clickF++;
    // this.counter2 += 1;
    // this.objective2 = this.counter2 + this.oldValue2;
    // this.clickF = this.objective2;
    // this.clickT = this.objective;

    localStorage.setItem("obj", JSON.stringify(this));
    console.log(this.retrievedObject);
  }
}

const me = new Info();
const btnWright = document.getElementById("btn-wright-id");
const btnWrong = document.getElementById("btn-wrong-id");
const btnStat = document.getElementById("btn-stat-id");
const btnClear = document.getElementById("btn-clear-id");

console.log(JSON.parse(localStorage.getItem("obj")));

btnWright.onclick = () => {
  me.clickIcrT();
};

btnWrong.onclick = () => {
  me.clickIcrF();
};

btnStat.onclick = () => {
  let allStats = JSON.parse(localStorage.getItem("obj")) || me;
  let el = document.createElement("p");
  let el2 = document.createElement("p");
  el.innerHTML = `Wright answers: ${allStats.clickT}`;
  el2.innerHTML = `Wrong answers: ${allStats.clickF}`;
  document.body.append(el);
  document.body.append(el2);
};

btnClear.onclick = () => {
  localStorage.clear();
};
