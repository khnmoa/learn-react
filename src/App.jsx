import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./contactUs";
import TopNav from "./TopNav";
import HookTest from "./HookTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./Customers";
import CustomerDetails from "./CustomerDetails";
import AddCustomer from "./AddCustomer";
// import EditCustomers from "./EditCustomers";
import EditCustomers from "./EditCustomers";
import PageNotFound from "./PageNotFound";
import DeleteCustomer from "./DeleteCustomer";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          backgroundColor: "beige",
          width: 1200,
          height: 800,
          padding: 30,
        }}
      >
        <h1 className="text-primary text-center">App.jsx</h1>
        <BrowserRouter>
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/hook" element={<HookTest />} />
            <Route path="/Customers" element={<Customers />} />
            <Route
              path="/customers/details/:id"
              element={<CustomerDetails />}
            />
            <Route path="/customer/Add" element={<AddCustomer />} />
            {/* <Route path="/customers/edit/:id" element={<EditCustomers />} /> */}
            <Route path="/customers/edit/:id" element={<EditCustomers />} />
            <Route path="/customers/delete/:id" element={<DeleteCustomer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
