import { menuArray } from "./data.js"

document.addEventListener("click" , function(e){
    if(e.target.dataset.add) {
    console.log (addItemsToOrderList(e.target.dataset.add))
    }
})

/*render menuItem */
function renderItem() {
    let menuItem =``
    menuArray.forEach(function(item) {
        return menuItem += `
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
        <div class="divider"></div>`
        })
        return menuItem
}
 document.getElementById("menu-list").innerHTML = renderItem()

/*Render oreder item*/

function addItemsToOrderList(itemId) {
    const selectedItem =  menuArray.filter(function(item){
        return item.id == itemId
    })[0]

   return selectedItem
}
function getItems(){
 let orderItems =[]
  orderItems.push(addItemsToOrderList())
    let orderlist = ``
    orderItems.forEach(function(item) {
        return orderlist += `
        <div class="order-items">
            <div class="order-item">
                <h2 class="item-name">${item.name}</h2>
                <button id="remove-btn-${item.id}" data-remove="${item.id}">remove</button>
            </div>
            <p class="price order-price">$${item.price}</p>
        </div>
        ${totalPrice}
        `
    })
    return document.getElementById("order-list").innerHTML = orderlist
}
console.log(getItems())
/*Render oreder list*/

// function render(){
//     document.getElementById("order-list").innerHTML = getItems()
// }
// render()
