import { menuArray } from "./data.js"

const menuList = document.getElementById("menu-list")

function getItems() {
     let menuItem = ""
for(let item of menuArray) {
    menuItem +=
     `
    <div class="list-item">
        <span class="item-pic">${item.emoji}</span>
        <div class="item-details">
            <h2 class="item-name">${item.name}</h2>
            <p class="handle">${item.ingredients}</p>
            <p class="tweet-text">${item.price}</p>
        </div>
    </div>
    `
}
   return menuItem
}


function renderItems(){
    menuList.innerHTML = getItems()
}
renderItems()
