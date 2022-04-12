import React, {useState, useEffect} from "react"
import { Container } from 'react-bootstrap'
import ItemList from './ItemList'
import customFetch from "../utils/customFetch"
import productsJson from '../utils/products.json'
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {

    const [postres, setPostres] = useState([])

    useEffect(()=>{
      customFetch (2000, productsJson)
      .then(resultado => setPostres(resultado))
      .catch(error => console.log(error))
      
    }, [])



    return(

<Container className={s.mainContainer}>

  <ItemList products={postres} />
  
</Container>

    )
}

