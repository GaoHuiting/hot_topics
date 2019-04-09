const container = document.querySelector("main .container");
const navItems = document.querySelectorAll(".main-navigation li a");



let url = "http://localhost:8888/final-loadContentByAjax/content/home.html";

//handling clicking
function handleClick(ev){
    ev.preventDefault();
    let url = ev.target.href;
    
    handleAjax(url);
}


//handling fetching
function handleAjax(urlValue){
    fetch(urlValue)
    .then(function(rsp){
        return rsp.text();
    })
    .then(function(data){
        container.innerHTML = data;
    })
}

handleAjax(url);

navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);