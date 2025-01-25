import { useEffect, useState } from "react";

function Tooted() {

    const[tooted, setTooted] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res=> res.json())
        .then(json=> setTooted(json.products))
    }, []);
  return (
    <div>
        {tooted.map(toode=>
        <div key={toode.description}>
            <div>{toode.title}</div>
            <div>{toode.price}</div>
            <img src={toode.thumbnail} alt="" />
            </div>)}
    </div>
  )
}

export default Tooted