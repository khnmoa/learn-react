import { useEffect } from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  useEffect(()=>{console.log("welcome to USeEffect() hook from AboutUs!")},[]);
    
  

  return (
    <>
      <div
        style={{
          backgroundColor: "lightgreen",
          width: 1000,
          height: 600,
          padding: 10,
          margin: 10
        }}
      >
        <h1 className="alert alert-primary text-center">about us .jsx</h1>
        <ul style={{ color: "black" }} className="list-group">
          <li className="list-group-item active">Our Products</li>
          <li className="list-group-item list-group-item-action">LMS</li>
          <li className="list-group-item list-group-item-action">SIS</li>
          <li className="list-group-item list-group-item-action">HIS</li>
          <li className="list-group-item list-group-item-action">ERP</li>
          <li className="list-group-item list-group-item-action">CRM</li>
        </ul>
        <div style={{ textAlign: "left" }}>
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
