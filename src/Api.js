import React from 'react'

const Api = () => {
  return (
    <div>
           <h1>API</h1>
            <h2>fetch Simple</h2>
            <img src="fetchsimple.jpg" alt="" style={{ width: "600px" }} />
            <h2>fetch axios</h2>
            <img src="getaxios.jpg" alt="" style={{ width: "600px" }} />
            <h2>OR</h2>
            <img src="getaxios2.jpg" alt="" style={{ width: "600px" }} />
            <h2>POST axios</h2>
            <img src="POSTsimple.jpg" alt="" style={{ width: "600px" }} />

            <h2>POST axios </h2>
            <code> {`
             import axios from 'axios';
             import React, { useState } from 'react';
             
             const FormSubmit = () => {
                 const [datastore, setDats] = useState([]);
             
                 const handlesubs = (e) => {
                     e.preventDefault();
                     const firstname = e.target.fname.value ;
                     const lastname = e.target.lname.value ;
                     const dat = {firstname, lastname}
             setDats(  [...datastore, {firstname, lastname}])
             axios.post('https://jsonplaceholder.typicode.com/posts', dat)
             .then((respos)=>{ console.log(respos)})
             .then((error)=>{console.log(error)})
             
             e.target.reset()
                 }
             
                 return (
                     <div>
                         <form onSubmit={handlesubs}>
                             <input type="text" name='fname' placeholder='Fname'/>
                             <input type="text" name='lname' placeholder='LName'/>
                             <input type="submit" />
                         </form>
             {datastore.map((ev)=>{  return <p>{ev.firstname} {ev.lastname}</p> })}
                     </div>
                 )
             }
             
             export default FormSubmit;
            `}
            </code>
    </div>
  )
}

export default Api;