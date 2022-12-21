import { menuArray } from "./data.js"

console.log('menuArray', menuArray);


// window.onload = function() {
//     function testFunc() {
//         console.log('test');
//     }
// }
const getItems = () => {

    document.getElementById("menu-list").innerHTML = menuArray.map( item => {

        return `
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
                    <i class="fa-solid fa-plus plus-icon" onclick="addToCart(${item.id})"></i>
            </span>
        </div>
        <div class="divider"></div>
        `
    }).join('');

}

getItems()
