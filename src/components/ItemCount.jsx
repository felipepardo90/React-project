import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

const [x, SetX] = useState (initial)

const sumarNum = () =>{
    SetX(x + 1)
}

const restarNum = () =>{
    SetX(x - 1)
}

const reset = () =>{
    SetX(x * 0)
}


    return(
        
        <>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="secondary" onClick={sumarNum}>+</Button>{' '}
      <p>Cliqueaste el botón {x} veces</p>
      <Button variant="secondary" onClick={restarNum}>-</Button>{' '}
      <Button variant="secondary" onClick={reset}>Agregar al carrito</Button>{' '}
    </ButtonGroup>
    
  </ButtonToolbar>
        </>
    )
}

export default ItemCount



