

export function productSlider(products){
    
const leftBtn = document.querySelector('#js-left');
const rightBtn = document.querySelector('#js-right');
const imgSlider = document.querySelector('#js-slider')

    products.forEach((product) => { 
    const a = document.createElement('a')
    a.id = "product-slider"
    a.className = "text-black h-[50%] "
    a.innerHTML = `<div class= " flex items-center justify-around w-[100vw] h-full ">
                       <img src=${product.image} id="js-image" class=" max-w-72 object-contain h-60  ">
                       <p class=" max-w-96">${product.description}</p>
                     <div>`
    imgSlider.append(a)
  })
  const image = document.querySelectorAll('#product-slider');
  let slideNo = 1;
  const goNext = () => {
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
  