// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// function Customers() {
//   const [Customers, setCustomers] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   //asynchronous programming -> async & await
//   async function getAllCustomers() {
//     const result = await axios.get("http://localhost:50000/Customers");
//     setCustomers(result.data);
//   }
//   useEffect(() => {
//     getAllCustomers();

   
    
//     function handleSearchChange(event) {
//       setSearchText(event.target.value);
//     }

//     async function search() {
//       let searchResult = await axios.get(
//         `http:localhost:5000/Customers?q=${searchText}` );
//      setCustomers(searchResult.data)

//     }

    
      
      
//   }, []);
//   function showCustomersTable() {
//     if (Customers.length > 0) {
//       return (
//         <div>
//           <Link className="btn btn-success" to="/customer/Add">
//             add customer
//           </Link>

//           <table className="table table-bordered table-hover">
//             <caption className=" caption-top text-center fw-bold fs-1">
//               Employee
//             </caption>
//             <thead>
//               <tr>
//                 <th>Full Name</th>
//                 <th>Position</th>
//                 <th>salary</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Customers.map((cust) => (
//                 <tr key={cust.id}>
//                   <td>{cust.name}</td>
//                   <td>{cust.email}</td>
//                   <td>{cust.balance}</td>
//                   <td>
//                     <Link
//                       to={`/Customers/details/${cust.id}`}
//                       title="Details"
//                       className="btn btn-outline-primary m-1"
//                     >
//                       <i className="bi bi-list-ul"></i>
//                     </Link>
//                     <Link
//                       to={`./customers/edit/${cust.id}`}
//                       title="Edit"
//                       className=" btn btn-outline-secondary m1"
//                     >
//                       <i className="bi bi-pencil-square"></i>
//                     </Link>
//                     <Link
//                       to={`/customers/delete/${cust.id}`}
//                       title="Delete"
//                       className="btn btn-outline-danger m-1"
//                     >
//                       <i class="bi bi-trash"></i>
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="row m-3">
//             {Customers.map((Cust) => (
//               <div
//                 className="card col-3 m-1 text-center border-success  bg-transparent"
//                 key={Cust.id}
//               >
//                 <div className="card-header  fw-bold border-success bg-transparent">
//                   {Cust.name}
//                 </div>
//                 <div className="card-body border-success bg-transparent ">
//                   <img
//                     src={Cust.imageUrl}
//                     alt={Cust.name}
//                     style={{ width: "50%", objectFit: "fill" }}
//                   />
//                   <p>{Cust.email}</p>
//                 </div>
//                 <div className="card-footer  fw-bold  border-success bg-transparent">
//                   {Cust.balance}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     } else {
//       return <h1 className="alert alert-danger">there is no data</h1>;
//     }
//   }

//   return (
//     <>
//       <div style={{ width: 1000, height: 500, backgroundColor: "skyblue" }}>
//         <div className="input-group col-4 ">
//           <input
//             type="text"
//             className="form-control"
//             onChange={handleSearchChange}
//           ></input>
//           <button onClick={search}>
//             <i className="bi bi-search"></i>
//           </button>
//         </div>
//         {showCustomersTable()}
//       </div>
//     </>
//   );
// }
// export default Customers;



import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Customers() {
  const [Customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Asynchronous function to get all customers
  async function getAllCustomers() {
    const result = await axios.get("http://localhost:5000/Customers");
    setCustomers(result.data);
  }
  // Fetch customers on component mount
  useEffect(() => {
    getAllCustomers();
  }, []);

  // Handle search input change
  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  // Search customers
  async function search() {
    let searchResult = await axios.get(
      `http://localhost:5000/Customers?q=${searchText}`
    );
    setCustomers(searchResult.data);
  }
  // Function to display the customers table
  function showCustomersTable() {
    if (Customers.length > 0) {
      return (
        <div>
          <Link className="btn btn-success" to="/customer/Add">
            Add customer
          </Link>

          <table className="table table-bordered table-hover">
            <caption className="caption-top text-center fw-bold fs-1">
              Customers
            </caption>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Customers.map((cust) => (
                <tr key={cust.id}>
                  <td>{cust.name}</td>
                  <td>{cust.email}</td>
                  <td>{cust.balance}</td>
                  <td>
                    <Link
                      to={`/Customers/details/${cust.id}`}
                      title="Details"
                      className="btn btn-outline-primary m-1"
                    >
                      <i className="bi bi-list-ul"></i>
                    </Link>
                    <Link
                      to={`/customers/edit/${cust.id}`}
                      title="Edit"
                      className="btn btn-outline-secondary m-1"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <Link
                      to={`/customers/delete/${cust.id}`}
                      title="Delete"
                      className="btn btn-outline-danger m-1"
                    >
                      <i className="bi bi-trash"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="row m-3">
            {Customers.map((Cust) => (
              <div
                className="card col-3 m-1 text-center border-success bg-transparent"
                key={Cust.id}
              >
                <div className="card-header fw-bold border-success bg-transparent">
                  {Cust.name}
                </div>
                <div className="card-body border-success bg-transparent">
                  <img
                    src={Cust.imageUrl}
                    alt={Cust.name}
                    style={{ width: "50%", objectFit: "fill" }}
                  />
                  <p>{Cust.email}</p>
                </div>
                <div className="card-footer fw-bold border-success bg-transparent">
                  {Cust.balance}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <h1 className="alert alert-danger">There is no data</h1>;
    }
  }
  return (
    <>
      <div style={{ width: 1000, height: 800, backgroundColor: "skyblue" }}>
        <div className="input-group col-4">
          <input
            type="text"
            className="form-control"
            onChange={handleSearchChange}
            placeholder="Search customers"
          />
          <button onClick={search} className="btn btn-primary">
            <i className="bi bi-search"></i> Search
          </button>
        </div>
        {showCustomersTable()}
      </div>
    </>
  );
}

export default Customers;
