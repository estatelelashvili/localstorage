var localstor = {
  clicks: 100,
};

//Put the localstor object into the cache
localStorage.setItem("obj", JSON.stringify(localstor));

//Retrieve the object
localstor = JSON.parse(localStorage.getItem("obj"));
console.log(localstor.clicks);
//Change the username property

let btn2 = document.getElementById("btn-id");
btn2.onclick = () => {
  localstor.clicks = 101;
  // And put the editted object back to cache
  localStorage.setItem("obj", JSON.stringify(localstor));
  alert(localstor.clicks);
  console.log(JSON.parse(localStorage.getItem("obj")));
};
