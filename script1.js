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

  long1 = obj[`${pos1}`].long;
  lat1 = obj[`${pos1}`].lat;

  let pos2 = cities.get(b);
  long2 = obj[`${pos2}`].long;
  lat2 = obj[`${pos2}`].lat;

  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((long2 - long1) * Math.PI) / 180;

  const af =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(af), Math.sqrt(1 - af));

  const d = R * c;
  console.log(d);
}

function subFunc() {
  event.preventDefault();
  let nodeData = Array.from(document.querySelectorAll("input")).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.value }),
    {}
  );

  myFunction(nodeData["city1"], nodeData["city2"]);
}
