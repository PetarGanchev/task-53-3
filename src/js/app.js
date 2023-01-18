import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var elements = document.getElementsByClassName('product')
  let price = document.getElementsByClassName('price')
  for (let i=0; elements.length>i; i++) {
    elements[i].setAttribute('data-price',price[i].innerHTML)
    console.log(price[i].innerHTML)
  }
});
