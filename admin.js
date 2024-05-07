
const productParam = new URLSearchParams(location.search).get('id')
const title = document.querySelector('.js-title')
const asideLeft = document.querySelector('.aside-left')
const rating = document.querySelector('.js-rating')
const price = document.querySelector('.js-price')
const description = document.querySelector('.js-description')
const quantityValue = document.querySelector('.js-select')
const calculatedPrice  = document.querySelector('.quantity-price')
const addCartButton = document.querySelector('.js-button')

export let cart =  JSON.parse(localStorage.getItem('cart'))


fetch(`https://fakestoreapi.com/products/${productParam}`)
.then((res) => res.json())
.then((data) => productData(data))
.catch((err) => console.log(err))

function productData (product){
let quantity;
let productPrice = ''
let quantityPrice = ''

  const img = document.createElement('img')
   img.className = "aside-image js-asideimage"
   img.src = product.image
  title.innerText = product.title
  asideLeft.append(img)
  price.innerText  =`$${product.price}` 
  description.innerText = product.description
  productPrice = product.price
  console.log(product.id)


  quantityValue.addEventListener('change', (e) =>{
    quantity =Number(e.target.value)
    quantityPrice = productPrice * quantity
    console.log(quantityPrice)
    calculatedPrice.innerText =`$${quantityPrice}` 
  })
  
  addCartButton.addEventListener('click', () => {
    const id = cart.map((p)=> p.id)
    if(!cart[0] || !id.includes(product.id) ){
      cart.push({
        id : product.id,
        price : quantityPrice,
        quantity: quantity,
        name : product.title,
        eachPrice :  product.price
      })
  }else{
   const index = id.indexOf(product.id)
   cart[index].quantity += quantity
   cart[index].price += quantityPrice  
  }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    const cartElement = document.querySelector('.anchora')
    const span = document.createElement('span')
    span.className = 'cartSpan'
    span.textContent = cart.length?`${cart.length}`: ''
    cartElement.append(span)

    
  })
 

}
