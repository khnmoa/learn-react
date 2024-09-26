

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    balance: 0,
    customerCategoryId: 0,
    imageUrl: "",
  });
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  async function getAllCategories() {
    const result = await axios.get("http://localhost:5000/customerCategories");
    setCategories(result.data);
  }

  useEffect(() => {
    getAllCategories(); // استدعاء الدالة بشكل صحيح
  }, []);

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
    axios.post("http://localhost:5000/Customers", customer);
    navigate("/Customers");
  }

  return (
    <>
      <div className=" bg-primary " style={{ width: 1100, height: 600 }}>
        <h1 className="alert alert-success text-text-center m-3">
          Add customer
        </h1>
        <form className="m-1 col-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-control m-1"
            onChange={handleNameChange}
          />

          <input
            type="text"
            name="email"
            placeholder="email"
            className="form-control m-1"
            onChange={handleEmailChange}
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="imageUrl"
            className="form-control m-1"
            onChange={handleImageUrlChange}
          />

          <input
            type="number"
            name="balance"
            placeholder="balance"
            className="form-control m-1"
            onChange={handleBalanceChange}
          />

          <select
            defaultValue={0}
            className="form-control"
            onChange={handleCustomerCategoryIdChange}
          >
            <option value={0} disabled>
              --select category--
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-success mt-2">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddCustomer;

