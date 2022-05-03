import { collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'

const SendOrder = () => {

  const {cart, buy} = useContext(CartContext)

const order = {
    buyer:{name, phone, email},
    items:cart, 
    total: 200
}

const db = getFirestore()
const ordersCollection = collection(db, "orders")
 addDoc(ordersCollection, order).then(({id})=>setOrderId(id))


  return (
    <div>sendOrder</div>
  )
}

export default SendOrder