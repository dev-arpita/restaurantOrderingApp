
import { menuArray } from "./data.js"
console.log("menu", menuArray)
const orderItems = []

const paymentForm = document.getElementById("payment-form")

document.addEventListener("click", function(e){
    if(e.target.dataset.add) {
       addToCart(e.target.dataset.add)
    }
    else if(e.target.dataset.remove) {
       removeItemFromCart(e.target.dataset.remove)
    }

    else if(e.target.id === "complete-btn") {
        ProceedPayment()
    }

})

/*Proceed payment*/

function ProceedPayment() {
    setTimeout(function(){
    document.getElementById("modal-container").style.display ="inline"
    }, 1500)
}
/*Thanks Giving message */
paymentForm.addEventListener("submit", function(e) {
   e.preventDefault()
    const thanksMsg = document.getElementById("msg-section")
    const paymentFormData = new FormData(paymentForm)

    const userName = paymentFormData.get('user-name')

    setTimeout(function(){

      thanksMsg.innerHTML =
    `<p class="message">
    Thanks, ${userName}! Your order is on it's way!
    </p>
    `
    }, 1000)
      thanksMsg.style.display = "block"
     document.getElementById("order-section").style.display ="none"
     document.getElementById("modal-container").style.display ="none"

})

/*Add items*/

function addToCart(itemId) {
   const cartItem =  orderItems.filter(item =>  item.id == itemId)
     if(cartItem.length > 0) {
        return;
    }
    orderItems.push(menuArray[itemId])
    renderOrderList(orderItems)

 }


/*Remove items from cart */

function removeItemFromCart(itemId){
    console.log( orderItems.splice(itemId, 1))
    renderOrderList(orderItems)

}


/*Render oreder item*/

function renderOrderList(orderItems) {
    let totalPrice = 0;
        let orderList =``
        let totalPriceList = ``
        let renderOrderSection =``
    orderItems.forEach((item, index) => {
        totalPrice = totalPrice + item.price


        orderList += `
            <div class="order-items">
                <div class="each-item">
                    <div class="order-item">
                        <h2 class="item-name">${item.name}</h2>
                        <button class="remove-btn" id="remove-btn-${item.id}"
                         data-remove="${index}">remove</button>

                    </div>

                <p class="price order-price">$${item.price}</p>

                </div>

            </div>
            `
        totalPriceList = `
                 <div class="divider"></div>
                <div id="total">
                    <p class="total-price-text">Total Price:</p>
                    <p class="price order-price" id="order-price">$${totalPrice}</p>
                </div>
            `

 renderOrderSection = `
        <h2 class="your-order">Your order</h2>
            <div id="order-list">
                <div>${orderList}</div>
                <div>${totalPriceList}</div>
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
                <i class="fa-solid fa-plus plus-icon" id="add-btn-${item.id}" data-add="${item.id}"></i>
        </span>
    </div>
        <div class="divider"></div>
    `
    })

     document.getElementById("menu-list").innerHTML =  menuItem
}
getItems()
renderOrderList(orderItems)


