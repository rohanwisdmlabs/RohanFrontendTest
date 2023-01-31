// window.onload = async function () {
//   await fetch("http://api.citybik.es/v2/networks")
//     .then((response) => response.json())
//     .then(function (data) {
//       console.log(data.networks);
//       createList(data);
//     });
// };

// function createList(data) {
//   const output1 = document.querySelector(".values");

//   for (let i = 0; i < data.networks.length; i++) {
//     let out = document.createElement("div");
//     const para = document.createElement("p");
//     const para1 = document.createElement("p");
//     const para2 = document.createElement("p");
//     para.innerHTML = "Company-Name: " + data.networks[i].name;
//     para1.innerHTML = "Company-id: " + data.networks[i].id;
//     para2.innerHTML = "Company-city: " + data.networks[i].location.city;
//     out.append(para);
//     out.append(para1);
//     out.append(para2);

//     output1.append(out);
//     out.setAttribute("class", "box-value");
//   }
// }

const cities = new Map([
  ["Delhi", 0],
  ["Mumbai", 1],
  ["Kolkata", 2],
  ["Bangalore", 3],
  ["Chennai", 4],
  ["Hyderabad", 5],
  ["Pune", 6],
  ["Ahmedabad", 7],
  ["Surat", 8],
  ["Lucknow", 9],
  ["Jaipur", 10],
  ["Mirzapur", 11],
  ["Nagpur", 12],
  ["Ghaziabad", 13],
]);

var obj1, obj2, long1, long2, lat1, lat2;

async function myFunction(a, b) {
  const value = await fetch("data.json");

  let obj = await value.json();

  let pos1 = cities.get(a);
  let long1;
  long1 = obj[`${pos1}`].long;
  let long2;
  let pos2 = cities.get(b);
  long2 = obj[`${pos2}`].long;

  console.log(long1);
  console.log(long2);
}

myFunction("Delhi", "Mumbai");
