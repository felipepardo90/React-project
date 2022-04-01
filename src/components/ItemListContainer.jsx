import { Container } from 'react-bootstrap'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {


    return(

        <>
        <Container>

    <ItemCount stock={5} initial={1}></ItemCount>
    <ItemList></ItemList>

        </Container>
      </>

    )
}

export default ItemListContainer
