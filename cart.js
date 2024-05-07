import { cart } from "./admin.js"


const cartContainer = document.querySelector('.js-container')
const cartFooter = document.querySelector('.footer')
const cartHeader = document.querySelector('.header')

let amount = ''
function displayCart(){
  let carts = ''
 
cart.forEach((bill, i) => {
    const cartHtml = `  <div class="main">
<span class="productNo">${i +1}</span>
<span class="pName">${bill.name}</span>
<input type="number" min="0" max="10" step="1" value=${bill.quantity} class='pQuantity' >
<span class="pPrice">$${bill.price}</span>
<span class="js-button"><i class="fa-solid fa-xmark" style="color: #df1111;"></i></span>
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
    totalAmount()
    displayCart()
  
  })
})


}

displayCart() 
totalAmount()


function totalAmount(){
  if(cart[0]){
    amount = cart.map((pd) => pd.price).reduce((total, price ) => total += price, 0)
    cartFooter.innerHTML = `<span>Total Amount : </span>
                      <span>$${Number(amount).toFixed(2)}</span>`
    
                      const inputQuantity = document.querySelectorAll('.pQuantity')
                      inputQuantity.forEach((button, i)=>{
                        button.addEventListener('click', (e) =>{
                         
                          cart[i].quantity = e.target.value
                          if(cart[i].quantity === '0'){
                            if(confirm('Do you want to delete this product')) {
                              cart.splice(i, 1)
                              localStorage.setItem('cart',JSON.stringify(cart))
                              displayCart()
                          totalAmount()
                            }
                          }else{
                          cart[i].price = (e.target.value) * cart[i].eachPrice
                          localStorage.setItem('cart',JSON.stringify(cart))
                          console.log(cart)
                          displayCart()
                          totalAmount()
                          }
                        })
                      })
    
  }else{
   // cartHeader.remove()
    cartFooter.remove()
    cartContainer.innerHTML = `<h2 class = "js-h2">No Orber Placed Yet !<br>
    <i class="fa-solid fa-circle-exclamation"></i> </h2>`
  }
}

