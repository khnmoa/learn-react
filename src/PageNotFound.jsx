function PageNotFound() {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgray",
          width: 1000,
          height: 500,
          padding: 10,
          margin: 10,
        }}
      >
        <h1
          className=" display-1 alert 
        alert-danger text-center m-5"
        >
          page not found{" "}
        </h1>
      </div>
    </>
  );
}
export default PageNotFound;
