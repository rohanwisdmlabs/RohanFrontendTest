$(document).ready(function () {
  $(".card-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    variableWidth: true,
  });

  $(".company-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    variableWidth: true,
  });
});

let city = "";
let nameOfCompany = "";

function getCity() {
  fetch("http://api.citybik.es/v2/networks")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
