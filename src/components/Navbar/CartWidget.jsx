import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import s from './CartWidget.module.css'

export default function CartWidget () {

    return (
<>

<FontAwesomeIcon icon={faCartShopping} className={s.colorIcon} />

</>

)

}


