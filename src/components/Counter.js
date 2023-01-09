import React from 'react'

function Counter() {
    let product = {
        name : "Iphone 13 pro ",
        color : "silver",
        price : 3299,
       }
       function tlAlghoritms(p){
          return p.price + ' TL'
       }
  return (
    <div>
        <ul>
          <li>name : {product.name ? product.name : 'no name'}</li>
          <li>color : {product.color}</li>
          <li>price : {tlAlghoritms(product)}</li>
        </ul>
    </div>
    
  )
}

export default Counter