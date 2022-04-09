import React from "react"
import Item from './Item'

export default function ItemList({products}) {

    return(
        products.map(p =>(
          
          <Item 

          {...p}

          />
        ))
    )
     

}

// useEffect(() => {

//     const pago = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('50')

//             reject(null)

//         }, 3000)
//         //reject(null)
//     })

//     console.log(pago);

//     pago.then((res) => {
//         console.log('gracias por pagar ' + res)
//     })
    
//     console.log(pago)

//     //sigue....


// }, [])


