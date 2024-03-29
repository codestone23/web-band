
const btnClose = document.querySelector(".modal-close")
const btnClick = document.querySelectorAll(".js-button")
const modalJs = document.querySelector(".modal")
const modalContainer = document.querySelector(".modal-container")
let header = document.getElementById("header")
let mobileMenu = document.getElementById("mobile-menu")
let headerHeight = header.clientHeight;

function showBuyTickets(){
    modalJs.classList.add("active")
}
function hideBuyTickets(){
    modalJs.classList.remove("active")
}
for(const btn of btnClick){
    btn.addEventListener('click',showBuyTickets)
}
btnClose.addEventListener('click',hideBuyTickets)
modalJs.addEventListener("click",hideBuyTickets)
modalContainer.addEventListener("click",function(e){
    e.stopPropagation();
})

mobileMenu.onclick = () =>{
    var isClosed = header.clientHeight === headerHeight;
    if(isClosed){
        header.style.height = 'auto'
    }else{
        header.style.height = null
    }
}
var menuItems = document.querySelectorAll("#nav li a[href*='#']")
for(var i of menuItems){
    i.onclick = function(e){
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        console.log(isParentMenu)
        if(!isParentMenu){
            header.style.height = null
        }else{
            e.preventDefault();
        }
       
    }
}


