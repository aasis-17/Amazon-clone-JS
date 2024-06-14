import { cart } from "./data/cart-oop.js";
const cartContainer = document.querySelector('#js-container')
const cartFooter = document.querySelector('#footer')
const edit = document.querySelector('#editButton')
const cartHeader = document.querySelector('#header')


renderCart()

function renderCart(){
 let amount;

 if(cart[0]){
   cartHeader.classList.remove('hidden')
   renderFooter(amount)
   displayCart(amount)

 }else{

   cartHeader.classList.add('hidden')
   cartFooter.remove()
   cartContainer.innerHTML = `<h2 id="js-h2" class= "text-center text-2xl pt-[100px] ">No Orber Placed Yet !<br>
   <i class="fa-solid fa-circle-exclamation"></i> </h2>`
 }
}

function displayCart(amount){
  let carthtml = ''
  cart.forEach((product, i) => {
    const html = `<div class="main my-3 grid grid-cols-[100px,1fr,200px,200px,50px]  text-xl">
  <span class="productNo max-w-[100px]">${i + 1}</span>
  <span class="pName auto-cols-max">${product.name}</span>
  <input  type="number" min="0" max="10" step="1" value=${product.quantity} id="pQuantity" class=' outline-none max-w-[100px] border-orange-200' readonly  >
  <span id="js-price" class="pPrice max-w-[200px]">$${product.calculatedPrice}</span>
  <span id="js-button" class="hidden max-w-5 cursor-pointer"><i class="fa-solid fa-xmark" style="color: #df1111;"></i></span>
  </div>`

  carthtml += html
  })
    cartContainer.innerHTML = carthtml;

    const inputQuantity = document.querySelectorAll('#pQuantity')
    const buttons = document.querySelectorAll('#js-button')

    console.log(buttons)

    quantityChange(inputQuantity, amount, buttons)
    
  }

  function calculateAmount(){
   return cart.map((product) => product.calculatedPrice).reduce((total, calculatedPrice ) => total += calculatedPrice, 0)
  }


  function quantityChange(inputElement, amount, buttons){
 
 inputElement.forEach((input, i)=>{
  console.log(input, i)

        input.addEventListener('click', (e) =>{
        console.log(i)
        cart[i].quantity = e.target.value;
        
        if(cart[i].quantity === '0'){
          const ask = confirm('Do you want to delete this product')
          console.log(ask)
    
          if(ask) {
            cart.splice(i, 1)
            localStorage.setItem('cart',JSON.stringify(cart))
            renderCart()
            
           }else{
            cart[i].quantity = '1'
            displayCart()   
          }
        }
        else{
        cart[i].calculatedPrice = cart[i].quantity * cart[i].price
        localStorage.setItem('cart',JSON.stringify(cart))
        console.log(cart)

          const changedPrice = document.querySelectorAll('#js-price')
          changedPrice[i].textContent = `$${cart[i].calculatedPrice}` 

          renderFooter(amount)
    
        }
      })
    })

    edit.addEventListener('click', () => {
      console.log(inputElement, buttons)
      buttons.forEach((button) =>{
        button.classList.toggle('hidden')
    
      })
       
      inputElement.forEach((input) => {
          console.log(input)
          input.toggleAttribute('readonly')
          input.classList.toggle('border')
        
      })
    
      buttons.forEach((button, i) => {
      console.log(button, i)
      button.addEventListener('click', ()=>{
        cart.splice(i, 1)
        localStorage.setItem('cart',JSON.stringify(cart))
        renderCart()
        
      })
    })
     })

    }
    
   
    
function renderFooter(amount){
  amount = calculateAmount()
  cartFooter.innerHTML = `<span>Total Amount : </span>
                    <span>$${Number(amount).toFixed(2)}</span>`
}