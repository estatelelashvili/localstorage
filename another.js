// clickCounter();

class Info {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.clickT = 0;
    this.clickF = 0;
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
localStorage.setItem("obj", JSON.stringify(me));
const dataTuta = JSON.parse(localStorage.getItem("me"));
const btn2 = document.getElementById("btn-id");
btn2.onclick = () => {
  me.wrightClickCount();
  // alert(me.clickT);
  // alert(me.getFinal().clicks);

  // alert(dataTuta.name);
  dataTuta.clickT += me.clickT;
  // alert(me.getFinal().clicks);
  localStorage.setItem("me", JSON.stringify(me));
};
const retrievedObject = localStorage.getItem("me");
console.log("retrievedObject: ", JSON.parse(retrievedObject));
// console.log(me.get());
// alert(me.name);
// alert(retrievedObject.name);

// function clickCounter() {
//   if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount) + 1;
//   } else {
//     localStorage.clickcount = 1;
//   }
//   document.getElementById("demo").innerHTML = localStorage.clickcount;
// }

// var testObject = { one: 1, two: 2, three: 3 };
// alert(testObject.one);

// for (let b of testObject) {
//   alert(testObject.b);
// }

// Put the object into storage
// localStorage.setItem("testObject", JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem("testObject");

// console.log("retrievedObject: ", JSON.parse(retrievedObject));
