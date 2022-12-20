
import { menuArray } from "./data.js"

const menuList = document.getElementById("menu-list")

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

})

/*Proceed payment*/

function ProceedPayment() {
    setTimeout(function(){
    document.getElementById("modal-container").style.display ="inline"
    }, 1500)
}

/*Remove items from cart */
let orderArray = []
const priceArray = []
let price = []
let isSelected= false

function removeItemFromCart(itemId){
        const targetEachItem = menuArray.filter(function(item){
            return item.id == itemId
        })[0]
    orderArray.slice(targetEachItem.id)
     if(!isSelected) {
        if(orderArray.includes(targetEachItem)){
            const indexItem = orderArray.indexOf(targetEachItem)
             orderArray.splice(indexItem)
             priceArray.push(targetEachItem.price)
            price = totalAmountReduce(priceArray)
        }
        return renderOrderList()
    }
}
function totalAmountReduce(item) {
        return item.reduce((total, num) => {return num - total} )
}

/*Add items*/

function addToCart(itemId) {
    const targetEachItem = menuArray.filter(function(item){
        return item.id == itemId
    })[0]

     if(!isSelected) {
        orderArray.push(targetEachItem)
        priceArray.push(targetEachItem.price)
        price = totalAmountAdd(priceArray)
        }
        renderOrderList()
     }

function totalAmountAdd(item) {
        return item.reduce((total, num) => {return total+ num} )

}

/*Render oreder item*/

function renderOrderList() {
        let orderList =``
        let totalPriceList = ``
        let renderOrderSection =``
    orderArray.forEach(function(item){

        orderList += `
            <div class="order-items">
                <div class="each-item">
                    <div class="order-item">
                        <h2 class="item-name">${item.name}</h2>
                        <button class="remove-btn
                        "id="remove-btn" data-remove="${item.id}">remove</button>
                    </div>
                    <p class="price order-price">$${item.price}</p>
                </div>
            `

        totalPriceList = `
                 <div class="divider"></div>
                <div id="total">
                    <p class="total-price-text">Total Price:</p>
                    <p class="price order-price" id="order-price">$${price}</p>
                </div>
            `

 renderOrderSection = `
        <h2 class="your-order">Your order</h2>
            <div id="order-list">${orderList}</div>
            <div id="order-list">${totalPriceList}</div>
            <button class="btn" id="complete-btn">Complete Order</button>
            `
    })
   document.getElementById("order-section").innerHTML = renderOrderSection
}

/*Render menu list */

function getItems() {
     let menuItem = ""
menuArray.forEach(function(item){
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
    })

   menuList.innerHTML =  menuItem
}
getItems()

/*Thanks Giving message */

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
// renderItems()


