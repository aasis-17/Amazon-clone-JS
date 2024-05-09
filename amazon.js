//fetching data from api
import {cart} from "./admin.js"
async function getProducts(){
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  getData(data)
  productSlider(data)
  }
  getProducts().catch((err)=>{
    console.log(`there is error ${err}`)
  })

//for image slider in first section


const leftBtn = document.querySelector('.js-left');
const rightBtn = document.querySelector('.js-right');
const imgSlider = document.querySelector('.js-slider');


function productSlider (product){
 

  product.forEach((product) => { 
  const a = document.createElement('a')
  a.className = 'product-slider'
  a.innerHTML = `<div class= "sizing">
                     <img src=${product.image}  class="image1 js-image">
                     <p class="paragraph">${product.description}</p>
                   <div>`
  imgSlider.append(a)
})
const image = document.querySelectorAll('.product-slider');
let slideNo = 1;
const goNext=()=>{
  imgSlider.style.transform = `translateX(-${slideNo * 100}%)`;
  slideNo++;
}
const goPrev=()=>{
  imgSlider.style.transform = `translateX(${(2 - slideNo) * 100}%)`;
  slideNo--;
}

rightBtn.addEventListener('click',()=>{
  if(slideNo < image.length){ 
    goNext();
    imgSlider.style.transition = `1s`;
   }else{
     imgSlider.style.transform = `translateX(${(image.length - slideNo) * 100}%)`;
     imgSlider.style.transition = `none`;
     slideNo = 1;
}
});

leftBtn.addEventListener('click',()=>{
  if(slideNo > 1){
    goPrev();
    imgSlider.style.transition = `1s`;
  }else{
    imgSlider.style.transform = `translateX(${-(image.length - slideNo) * 100}%)`;
    slideNo=image.length;
    imgSlider.style.transition = `none`;
  }
  
});
}

  

const inputElement = document.querySelector('.input')

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
    <div  class="card" id = "${product.id}" >
    <span class="cardTop">${product.title}</span>
    <div class="emage"><img class="cardImg" src="${product.image}">
      </div>
      <div class="cardBottom">
      <span class="price">Price:${product.price}</span>
    <a  class="link" href = '/product.html?id=${product.id}' >Add to Cart </a>
    </div>
  </div>`
  
  productsHtml += html
  })
  
  document.querySelector('.cardContainer').innerHTML = productsHtml; 

  if(cart[0]){
  const cartElement = document.querySelector('.anchora')
  const span = document.createElement('span')
  span.className = 'cartSpan'
  span.textContent = cart.length
  cartElement.append(span)
  }  


 }