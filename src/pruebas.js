

const getData = async () => {
    const data = await fetch ("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const dolar = await data.json()
    
console.log (dolar)
}




