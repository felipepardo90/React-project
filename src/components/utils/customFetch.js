const customFetch = (time, task) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      true ? res(task) : rej("Error");
    }, time);
  });
};
export default customFetch;


// import { useState, useEffect } from "react"

// const customFetch = () =>{
//   const [data, setData] = useState (null)

//   useEffect(() => {
//     fetch ()
//     .then((res) => res.json())
//     .then((data) => setData(data))
//   }, [])
  
//     return [data]
// }

// export default customFetch
