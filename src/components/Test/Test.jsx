import React from 'react'
import TestContainer from './TestContainer'

export default function Test({universidades}) {

    

  return (
    <>

    {universidades.length>1?universidades.map(item => <p>{item.name+" "+item.country}</p>):<></>}
    
    </>
  )
}
