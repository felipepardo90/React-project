import React, {useState, useEffect} from "react"
import { Container } from 'react-bootstrap'
import ItemList from './ItemList'
import customFetch from "../utils/customFetch"
import productsJson from '../utils/products.json'
import s from './ItemListContainer.module.css'
import { useParams } from "react-router-dom"

export default function ItemListContainer() {

    const [postres, setPostres] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams()

    console.log(category)

    useEffect(()=>{
      customFetch (2000, productsJson, 'C', category)
      .then(res => setPostres(res))
      .catch(error => console.log(error))
      .finally(()=>{
        setLoading(false)
      })
    }, [category])



    return(

<>

{ loading ? (<h1>CARGANDO ELEMENTOS...</h1>) : 
(<Container className={s.mainContainer}>

  <ItemList products={postres} />
  
    
  </Container>)}
  
  </>

    )
}

