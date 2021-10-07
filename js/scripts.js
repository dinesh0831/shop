/*!
* Start Bootstrap - Shop Homepage v5.0.3 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function addcart(item) {
  
    let additem = document.querySelector(".badge");
    additem.innerHTML = parseInt(additem.innerHTML) + 1;

    let option = document.querySelector(`.${item}`);
    option.innerHTML=""
    option.setAttribute("class","disabled")
  
    

}

