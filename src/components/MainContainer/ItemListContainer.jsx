import React from "react"
import { Container } from 'react-bootstrap'
import ItemList from './ItemList'
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {

    // const [products, setProduct] = useState([])

    // useEffect()


    return(

        <>
        <main>
          
        <Container className={s.itemList}>
<div>

<ItemList />

</div>
    

        </Container>

        </main>
      </>

    )
}

