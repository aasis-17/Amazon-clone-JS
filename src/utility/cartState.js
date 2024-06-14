const cartElement = document.querySelector('#anchora')

export  function cartState  (cart) {
 
  if(cart[0]){
  const span = document.createElement('span')
  span.id = 'cartSpan'
  span.className = 'cartSpan px-[5px] outline outline-2 outline-white  bg-red-600 rounded-full hidden'
  span.textContent = cart.length
  cartElement.append(span)
 
  validateState(cart)

  }
   
  }

  function validateState(cart){
    const span = document.querySelector('#cartSpan')
    span.classList.remove('hidden')
    span.textContent = cart.length
  }
  