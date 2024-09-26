
import { useEffect, useState } from "react";


function HookTest(){
  useEffect(()=>{console.log("welcome to USeEffect() hook from AboutUs!")},[]);
    
//   let city='Alexandria';
  
//   function setCity(newCity){
//     city = newCity
//    console.log("city: "+city)
//   }
let [city,setCity]=useState("Alexandria")

    return(
        <>
        <div className=" bg-info" style={{width:1000, height:500}}>
           
           <h1  >Hook Test</h1>
        <div style={{backgroundColor:"gold",width:200, height:100,
         fontSize:"36"}}>{city}</div>
        <button onClick={()=>{setCity("cairo")}}>set city</button>
        
        </div>
        
        </>
    );


}
export default HookTest;