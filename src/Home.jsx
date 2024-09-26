import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "aqua",
          color: "brown",
          width: 1000,
          height: 600,
          padding: 10,
          margin: 10,
          textAlign: "center"
        }}
      >
        <h1 className="alert alert-success text-center">
          welcome to Bright stars
        </h1>
        <h2 className="text-center ">(Home.jsx)</h2>
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Home;
