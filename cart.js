const cartItems = [];
const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕",
        quantity: +1
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1,
        quantity: 1
    },
    {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2,
        quantity: 1
    }
]

function addToCart(itemId) {
    // console.log('beforecheckcartItems', cartItems);
     cartItems.filter(item => {
        console.log('item id', item.id)
        return item.id === itemId
    });
    // console.log("cartItems",cartItems)
    if(cartItems.filter(item => item.id === itemId).length > 0) {
        return;
    }
  cartItems.push(menuArray[itemId])
    // console.log('cartItems', cartItems);
    renderOrderList(cartItems);
}
function removeFromCart(itemId) {
    cartItems.splice(itemId, 1)
    renderOrderList(cartItems);
}
function addQuantity(itemId) {
    console.log('addQuantity', itemId);
    const cartItem = cartItems.filter(item => item.id === itemId)
     console.log('cartItem', cartItem);
    cartItem[0].quantity =  cartItem[0].quantity +1;
    renderOrderList(cartItems);

}
function removeQuantity(itemId) {
    const cartItem = cartItems.filter(item => item.id === itemId)

    console.log('removeQuantity', cartItem[0].quantity);
    if (cartItem[0].quantity - 1 === 0) {
        const pos = cartItems.map(e => e.id).indexOf(itemId);
        console.log(pos);
        cartItems.splice(pos, 1)
        // return;
    }
    cartItem[0].quantity =  cartItem[0].quantity - 1;
    renderOrderList(cartItems);
}

function renderOrderList(cartItems) {
        let totalPrice = 0;
        let orderList =``
        let totalPriceList = ``
        let renderOrderSection =``
        cartItems.forEach(function(item, index){

            totalPrice = totalPrice + (item.price * item.quantity)
            console.log(' item.quantity',  item.quantity)


            orderList += `
                <div class="order-items">
                    <div class="each-item">
                        <div class="order-item">
                            <h2 class="item-name">${item.name}</h2>
                            <button class="remove-btn" onclick="removeFromCart(${index})">remove</button>
                            <button class="addtoitem-btn" onclick="addQuantity(${item.id})">+1</button>
                            <button class="addtoitem-btn" onclick="removeQuantity(${item.id})">-1</button>
                        </div>

                    <p class="price order-price">$${(item.price * item.quantity)}</p>

                    </div>

                </div>
                `

        });
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

   document.getElementById("order-section").innerHTML = renderOrderSection
}

