useEffect(() => {

    const pago = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('50')

            reject(null)

        }, 3000)
        //reject(null)
    })

    console.log(pago);

    pago.then((res) => {
        console.log('gracias por pagar ' + res)
    })
    
    console.log(pago)

    //sigue....


}, [])
