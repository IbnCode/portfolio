import { useState, useEffect } from "react"

const useFetch = (link) => {
  const [imageData, setImageData] = useState('');
  useEffect(() =>{
      fetch(link)
          .then(response => response.blob())
          .then(image => {
              const localUrl = URL.createObjectURL(image);
              setImageData(localUrl);
          });
  }, []);
  return(imageData)
}
       
 
export default useFetch;