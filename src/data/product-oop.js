
class Product{
    id;
    title;
    image;
    price;
    description;

    constructor(productDetails){
        this.id = productDetails.id
        this.title = productDetails.title
        this.image = productDetails.image
        this.price = productDetails.price
        this.description = productDetails.description
    }
}


export let products=[]

export async function getProducts(fun){
        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            products = data.map((productDetails) => new Product(productDetails))
            console.log(products)
            fun()
        } catch(error){
            console.log(`there is error ${error}`)
        }
      
    }


    

   

    
    
    