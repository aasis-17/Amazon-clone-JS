import { cartState } from "../utility/cartState.js";
export let cart =  JSON.parse(localStorage.getItem('cart')) || []
const productParam = new URLSearchParams(location.search).get('id')
console.log(cart)
class ProductDetails{
    id;
    price;
    quantity;
    name;
    calculatedPrice;

    constructor(data, quantity){
        
        this.id = data.id;
        this.price = data.price;
        this.quantity = quantity
        this.name = data.title;
        this.calculatedPrice = this.calculatePrice()   
    }

    calculatePrice(){
       return this.calculatedPrice = this.price * this.quantity
    }

}

let products;
let productsData;
let quantity = 0;
//export let productDetails;
export function loadProductDetails(fun){
    fetch(`https://fakestoreapi.com/products/${productParam}`)
    .then((res) => res.json())
    .then((data) =>{ 
        productsData = data
        products =  new ProductDetails(productsData, quantity) 
        console.log(products)
        fun(productsData)
    }) 
    .catch((err) => console.log(err))

    const calculatedPrice  = document.querySelector('#quantity-price')
    const quantityValue = document.querySelector('#js-select')
    quantityValue.addEventListener('change', (e)=> {
    quantity = Number(e.target.value) 
     products = new ProductDetails(productsData, quantity)
     calculatedPrice.innerText =`$${products.calculatedPrice}`
     console.log(products)
         })

    const addCartButton = document.querySelector('#js-button')     
    addCartButton.addEventListener('click', () => {
    if(quantity){
    const cartId = cart.map((p)=> p.id)
    if(!cart[0] || !cartId.includes(products.id) ){
      cart.push(

        products
        
      )
      console.log(cart)
       
    }
  else{
    
   const index = cartId.indexOf(products.id)
   cart[index].quantity = Number(cart[index].quantity) + quantity
   cart[index].calculatedPrice += products.calculatePrice(); 
  }
  localStorage.setItem('cart', JSON.stringify(cart))
   cartState(cart)
  
}
console.log(cart)
  })
}
    
 
