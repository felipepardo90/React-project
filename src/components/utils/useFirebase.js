// const customFetch = (time, task, type, IDcode) => {
//   return new Promise((res, rej) => {

//     const filter = type === 'C' ? task.filter(p=>p.category === IDcode) : task.find(p => p.id === parseInt(IDcode))
//     setTimeout(() => {
//         IDcode ? res(filter) : res(task)
//     }, time);
//   });
// };
// export default customFetch;

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import  { useEffect, useState } from "react";

export const useFirebase = () => {
  const [category, setCategory] = useState([""]);
  const db = getFirestore();

  useEffect(() => {
    getCategory();
    console.log(getCategory())
  }, [category]);

  const getCategory = async () => {
    try {
      const categoryRef = collection(db, "products")
      const q = query(categoryRef, where("category", "==", category))
      const querySnapshot = await getDocs(q);
      const dataCategory = querySnapshot.docs.map((doc) => doc.data());
      setCategory(dataCategory);
    } catch (error) {
      console.log(error);
    }
  };

  return { category };

  
};
