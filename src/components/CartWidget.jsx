import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import s from './CartWidget.module.css'

const CartWidget = () => {

    return (
<>

<FontAwesomeIcon icon={faCartShopping} className={s.colorIcon} />

</>

)

}

export default CartWidget

