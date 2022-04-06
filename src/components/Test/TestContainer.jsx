import React, {useEffect, useState} from 'react'
import Test from './Test'

export default function TestContainer() {

    const [universidades, setUniversidades] = useState([])

    useEffect(() => {

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://universities.hipolabs.com/search?country=United+States&cant=100", requestOptions)
            .then(response => response.json())
            .then(result => {
                //se ejecutan si salio todo bien
                console.log(result)
                setUniversidades(result)
            })
            .catch(error => {
                //si hubo un error
                console.log('error', error)
            });

        
    }, [])

    return (
<></>
        // <Test universidades={universidades}/>
    )
}
