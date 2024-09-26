

import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditCustomers() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    balance: 0,
    customerCategoryId: 0,
    imageUrl: "",
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCustomer();
    getAllCategories();
  }, []);

  async function getAllCategories() {
    try {
      const result = await axios.get(
        "http://localhost:5000/customerCategories"
      ); // تصحيح عنوان URL
      setCategories(result.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  }

  async function getCustomer() {
    try {
      const result = await axios.get(`http://localhost:5000/Customers/${id}`);
      setCustomer(result.data);
    } catch (error) {
      console.error("Failed to fetch customer:", error);
    }
  }

  function handleNameChange(event) {
    setCustomer({ ...customer, name: event.target.value });
  }

  function handleEmailChange(event) {
    setCustomer({ ...customer, email: event.target.value });
  }

  function handleBalanceChange(event) {
    setCustomer({ ...customer, balance: parseFloat(event.target.value) });
  }

  function handleCustomerCategoryIdChange(event) {
    setCustomer({
      ...customer,
      customerCategoryId: parseInt(event.target.value),
    });
  }

  function handleImageUrlChange(event) {
    setCustomer({ ...customer, imageUrl: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/Customers/${id}`, customer)
      .then(() => navigate("/Customers"))
      .catch((error) => console.error("Failed to update customer:", error));
  }

  return (
    <div className="bg-primary" style={{ width: 1100, height: 600 }}>
      <h1 className="alert alert-info m-3">Edit Customer (id: {id})</h1>

      <form className="m-1 col-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={customer.name}
          className="form-control m-1"
          onChange={handleNameChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={customer.email}
          className="form-control m-1"
          onChange={handleEmailChange}
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={customer.imageUrl}
          className="form-control m-1"
          onChange={handleImageUrlChange}
        />

        <input
          type="number"
          name="balance"
          placeholder="Balance"
          value={customer.balance}
          className="form-control m-1"
          onChange={handleBalanceChange}
        />

        <select
          value={customer.customerCategoryId}
          className="form-control"
          onChange={handleCustomerCategoryIdChange}
        >
          <option value={0} disabled>
            Select category
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button type="submit" className="btn btn-success mt-2">
          Edit
        </button>
      </form>

      <Link to={`/Customers`}>Back to list</Link>
    </div>
  );
}

export default EditCustomers;
