import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



function DeleteCustomer(){
    const[customer, setCustomer]= useState({id:0, name:'', email:'', balance:0, customerCategoryId:0, imageUrl:''});
    let{id}=useParams();
    const[custCat, setCustCat]=useState({id:0, name:'', description:''});
    const navigate= useNavigate();

    async function getCustCat(custCatId){
       let result = await axios.get(
         `http://localhost:5000/customerCategories/${custCatId}`
       );
       setCustCat(result.data); 
    }
 async function getCustomer() {
   let result = await axios.get(
     `http://localhost:5000/Customers/${id}`);
   
console.log(result.data)
setCustomer(result.data)
getCustCat(result.data.customerCategoryId)
 }


 function deleteCustomer (event) {
   event.preventDefault();
   axios.delete(`http://localhost:5000/Customers/${id}`);
   navigate("/Customers");
 }

useEffect(()=>{getCustomer()},[]);
return(
    <>
    <div style={{width:1100, height:600, backgroundColor:"lightskyblue"}}>
        <h1 className="alert alert-danger text-center m-3">
            Are you sure you want to delete {customer.name}
        </h1>
        <table className="table table-border table-hover">
            <tbody>
            <tr><th>Id</th><td>{customer.id}</td></tr>
            <tr><th>Name</th><td>{customer.name}</td></tr>
            <tr><th>Email</th><td>{customer.email}</td></tr>
            <tr><th>Balance</th><td>{customer.balance}</td></tr>
            <tr><th>Image</th><td><img src={customer.imageUrl} alt={customer.name} style={{width:100}}/></td></tr>
            <tr><th>Category</th><td>{custCat.name}</td></tr>
        </tbody>
        </table>
        <button onClick={deleteCustomer} className="btn btn-danger col-3 m-1">Delete</button>
    <Link to="/Customers" className="btn btn-primary col-3 m-1"> Back to list</Link>
    </div>
    
    </>
)

}
export default DeleteCustomer;