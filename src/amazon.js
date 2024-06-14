import { cart } from "./data/cart-oop.js"
import {cartState} from "./utility/cartState.js"
import { getProducts, products } from "./data/product-oop.js"
import { productSlider } from "./utility/productSlider.js"
  
getProducts(renderAmazon)


//for image slider in first section

function renderAmazon(){

const open = document.querySelector('#js-open')
const close = document.querySelector('#js-close')
const opened = document.querySelector('#js-opened')
const cartElement = document.querySelector('#anchora')

open.addEventListener('click', () => {
 // opened.classList.remove('hidden')
 opened.classList.remove('translate-x-[100%]')
})
close.addEventListener('click', () => {
  opened.classList.add('translate-x-[100%]')
})

productSlider(products)


const inputElement = document.querySelector('#input')

  getData(products)

  function getData(products){
  let input = ''
  let data = products.filter((product) => product.title.toLowerCase().includes(input.toLowerCase()))
  inputElement.addEventListener('keydown', (e)=>{
   input = e.target.value
   data = products.filter((product) => product.title.toLowerCase().includes(input.toLowerCase()))
   displayData(data)
})
 
displayData(data)
}  

function displayData(data){
  let productsHtml ='';
  data.map((product)=>{
    const html = `
    <div  class=" group font-medium text-black border-none w-72 h-[410px] bg-white flex flex-col cursor-pointer rounded-md shadow-2xl gap-y-4" id = "${product.id}" >
    <span class=" h-8 text-sm pt-3 pl-[20px] mb-3 ">${product.title}</span>
    <div class=" group-hover:border-solid group-hover:border group-hover:border-orange-500 overflow-hidden w-64 h-[300px] border-solid rounded-ss rounded-se duration-100 mx-auto"><img class=" object-cover " src="${product.image}">
      </div>
      <div class="flex justify-between w-[262px] mx-auto h-[45px] align-middle">
      <span class="text-[19px] font-extralight pl-1">Price:${product.price}</span>
    <a  class=" p-1" href ='./product.html?id=${product.id}' >Add to Cart </a>
    </div>
  </div>`
  
  productsHtml += html
  })
  
  document.querySelector('#cardContainer').innerHTML = productsHtml; 

 
  cartState(cart)
 }

}