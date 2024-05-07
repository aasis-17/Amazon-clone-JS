import { cart } from "./admin.js"

const inputQuantity = document.querySelector('.pQuantity')
const cartContainer = document.querySelector('.js-container')

console.log(cart)
function displayCart(){
  let carts = ''
cart.forEach((bill, i) => {
    const cartHtml = `  <div class="main">
<span class="productNo">${i +1}</span>
<span class="pName">${bill.name}</span>
<input type="number" min="0" max="10" step="1" value=${bill.quantity} class='pQuantity' readonly  >
<span class="pPrice">$${bill.price}</span>
<button class="js-button">Delete</button>
</div>`
carts += cartHtml
})
    cartContainer.innerHTML = carts



const buttons = document.querySelectorAll('.js-button')
buttons.forEach((button, i) => {
  console.log(button, i)
  button.addEventListener('click', ()=>{
    cart.splice(i, 1)
    localStorage.setItem('cart',JSON.stringify(cart))
    displayCart()
  })
})

}

displayCart() 
