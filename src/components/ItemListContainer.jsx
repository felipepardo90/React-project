import { Container } from 'react-bootstrap'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {


    return(

        <>
        <main>
          
        <Container>

    <ItemCount stock={5} initial={1}></ItemCount>
    <ItemList></ItemList>

        </Container>

        </main>
      </>

    )
}

export default ItemListContainer
