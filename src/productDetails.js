import { cartState } from "./utility/cartState.js"
import { loadProductDetails, cart } from "./data/cart-oop.js"
const title = document.querySelector('#js-title')
const asideLeft = document.querySelector('#aside-left')
const rating = document.querySelector('.js-rating')
const price = document.querySelector('#js-price')
const description = document.querySelector('#js-description')
const calculatedPrice  = document.querySelector('#quantity-price')






loadProductDetails(renderProductData)

 function renderProductData (product){

   const img = document.createElement('img')
    img.className = "aside-image js-asideimage h-full object-contain hover:scale-110 transition-all "
    img.src = product.image
    title.innerText = product.title
    asideLeft.append(img)

   price.innerText  =`$${product.price }` 
   description.innerText = product.description

   calculatedPrice.innerText =`$0`


   cartState(cart)

 }