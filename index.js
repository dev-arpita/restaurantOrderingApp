import { menuArray } from "./data.js"

const menuList = document.getElementById("menu-list")
const orderList = document.getElementById("order-list")
document.addEventListener("click", function(e){
    if(e.target.dataset.add) {
       addToCart(e.target.dataset.add)
    }
    else  if(e.target.dataset.remove) {
       removeItemFromCart(e.target.dataset.remove)
    }
    else if(e.target.id === "complete-btn") {
        ProceedPayment()
    }
    else if(e.target.id === "payment-form") {
        e.preventDefault()
    }
    else if(e.target.id === "close-modal") {
        closeModal()
    }
})

function ProceedPayment() {
    setTimeout(function(){
    document.getElementById("modal-container").style.display ="inline"
    }, 1500)
}
function closeModal() {
    document.getElementById("modal-container").style.display ="none"
}
function removeItemFromCart(itemId){
      const targetEachItem = menuArray.filter(function(item){
        return item.id == itemId
    })[0]
    console.log(targetEachItem)
}
function addToCart(itemId) {
    const targetEachItem = menuArray.filter(function(item){
        return item.id == itemId
    })[0]
 console.log(targetEachItem)
  }

function totalItemPrice(itemId) {
  const targetEachItem = menuArray.filter(function(item){
        return item.id == itemId
    })[0]
    console.log(targetEachItem.price)
}
// console.log(totalItemPrice())

function getItems() {
     let menuItem = ""
for(let item of menuArray) {
    menuItem +=
     `
    <div class="lists">
        <div class="list-item">
            <span class="item-pic">${item.emoji}</span>
            <div class="item-details">
                <h2 class="item-name">${item.name}</h2>
                <p class="ingredients">${item.ingredients}</p>
                <p class="price">$${item.price}</p>
            </div>
        </div>
         <span class="icon-container">
                <i class="fa-solid fa-plus plus-icon" data-add="${item.id}"></i>
        </span>
    </div>
        <div class="divider"></div>
    `
}
   return menuItem
}

function getOrderList() {

    let orderList =``

    let totalPrice= ``
    menuArray.forEach( function(item) {

    totalPrice +=
    `
     <div id="total">
            <h2 class="total-price-text">Total Price:</h2>
            <p class="price order-price">$${item.price}</p>
        </div>
    `
    })

    orderList +=
        `
        <div class="order-items">
            <div class="order-item">
                <h2 class="item-name">${item.name}</h2>
                <button id="remove-btn-${item.id}" data-remove="${item.id}">remove</button>
            </div>
            <p class="price order-price">$${item.price}</p>
        </div>
        ${totalPrice}
        `
    return orderList
}

function thanksMsg() {
    let msg =
    `<p class="message">
    Thanks, James! Your order is on it's way!
    </p>
    `
    return msg
}

function renderItems(){
    menuList.innerHTML = getItems()
    orderList.innerHTML = getOrderList()
    document.getElementById("msg-section").innerHTML = thanksMsg()
}
renderItems()


