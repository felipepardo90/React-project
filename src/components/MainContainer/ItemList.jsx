import React from "react"
import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"

export default function ItemList() {

    return(
        <>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_838997-MLA42766305706_072020-O.webp/100px180" />
  <Card.Body>
    <Card.Title> Cerveza Heineken</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <ItemCount stock={5} initial={1} />
  </Card.Body>
</Card>
        </>
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


