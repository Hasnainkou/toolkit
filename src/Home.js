import React from 'react'

const Home = () => {
    const arrayOfObjects = "jo"
    return (
        <div>

            <h2>Map</h2>
            <code> {`
                   <>
                   {arrayOfObjects.map((e, id) => (
                      <p key={id}> {e.rname}  <br/> {e.price}  </p>
                    ))}
                  </>
            `}
            </code>
            <h2>Filter</h2>
            <code> {`
                 let updatedCart = arry1.filter( 
                    (curItem) => curItem.id == id
                  );
            `}
            </code>
            <h2>SUM of arry </h2>
            <code> {`
                  
const [price, setPrice] = useState(0);  
const arry = [100, 500, 900]   
const total = () => {
    let price = 0;
    arry.map((ele) => {
        price = ele + price
    });
    setPrice(price);
};
console.log(price);

We can also use for array of Object
            `}
            </code>
         


            <h2>TODO simple </h2>
            <code> {`
import React, { useState } from "react";
import "./App.css";

function Test() {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const onchangehan = (e) => setInputData(e.target.value);

  const onsubmithand = (event) => {
    event.preventDefault();
    setItems([...items, inputdata]);

    setInputData("");
  };

  return (
    <div>
      <form onSubmit={onsubmithand}>
        <input type="text" value={inputdata} id="demo" onChange={onchangehan} />
      </form>
      {items.map((curElm) => (
        <h2>{curElm}</h2>
      ))}
    </div>
  );
}
export default Test;

            `}
            </code>


            <h2>Child to Perent props </h2>
            <img src="childtoparant.png" alt="" style={{ width: "800px" }} />
         











            <a href="HKstore.zip" download>
                <div > 
               Download HKStore</div>
            </a>




        </div>
    )
}

export default Home;