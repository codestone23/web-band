
const btnClose = document.querySelector(".modal-close")
const btnClick = document.querySelectorAll(".js-button")
const modalJs = document.querySelector(".modal")
const modalContainer = document.querySelector(".modal-container")

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
