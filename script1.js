window.onload = async function () {
  await fetch("http://api.citybik.es/v2/networks")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data.networks);
      createList(data);
    });
};

function createList(data) {
  const output1 = document.querySelector(".values");

  for (let i = 0; i < data.networks.length; i++) {
    let out = document.createElement("div");
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    para.innerHTML = "Company-Name: " + data.networks[i].name;
    para1.innerHTML = "Company-id: " + data.networks[i].id;
    para2.innerHTML = "Company-city: " + data.networks[i].location.city;
    out.append(para);
    out.append(para1);
    out.append(para2);

    output1.append(out);
    out.setAttribute("class", "box-value");
  }
}
