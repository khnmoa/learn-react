import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
function CustomerDetails() {
  const [customer, setCustomer] = useState({
    id: 0,
    name: "",
    email: "",
    balance: 0,
    position: "",
    customerCategoryId: 0,
    imageUrl: "",
  });

  let { id } = useParams();



  const [castCat, setCustCat] = useState({ id: 0, name: "", description: "" });
  async function getCustCat(custCatId) {
    let result = await axios.get(
      `http://localhost:5000/customerCategories/${custCatId}`
    );
    setCustCat(result.data);
  }



  async function getCustomer() {
    let result = await axios.get(`http://localhost:5000/Customers/${id}`);
    setCustomer(result.data);
    console.log(result.data);
    getCustCat(result.data.customerCategoryId)
  }

  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <>
      {" "}
      <div
        style={{ width: 1100, height: 500, backgroundColor: "lightskyblue" }}
      >
        <h1 className="text-center alert alert-warning m-3">
          {" "}
          {customer.name}Details
        </h1>{" "}
        <table className="table table-bordered table-hover">
          <tbody>
            {" "}
            <tr>
              <th>id</th>

              <td>{customer.id}</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{customer.name}</td>
            </tr>
            <tr>
              <th>email</th>
              <td>{customer.email}</td>
            </tr>
            <tr>
              <th>balance</th>
              <td>{customer.balance}</td>
            </tr>
            <tr>
              <th>image</th>
              <td>
                <img
                  src={customer.imageUrl}
                  alt={customer.name}
                  style={{ width: 100 }}
                />
              </td>
            </tr>
            <tr>
              <th>category id</th>
              <td>{castCat.name}</td>
            </tr>
          </tbody>
        </table>
        <Link to={`/Customers`}>Back to list</Link>
      </div>
    </>
  );
}
export default CustomerDetails;
