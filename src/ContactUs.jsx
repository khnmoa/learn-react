import { Link } from "react-router-dom";
import "./ContactUs.css";
function ContactUs() {
  return (
    <>
      <div id="div1">
        <h1 className="alert alert-primary text-center">contact us.jsx</h1>
        <ul className="text-left" id="ulContact">
          <li>
            <i className="bi bi-house"></i>: 17 orbi st.
          </li>
          <li>
            <i className="bi bi-envelope"></i>: info@bright-stars.com
          </li>
          <li>
            <i className="bi bi-telephone"></i>
            :0099887766
          </li>
        </ul>
        <div className="text-left">
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
