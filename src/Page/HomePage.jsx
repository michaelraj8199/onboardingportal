import axios from "axios";
import { Link } from "react-router-dom";
import { axiosInstance } from "../request";


const HomePage = () => {
  let res = axiosInstance.get("/api/get/");


  return (
    <div className="logo">
      {/* <h1>Theecode</h1> */}
      <img src="https://www.theecode.xyz/assets/slices/logo.png" alt="logo" />
      <Link to={"/personaldetails"}>Click Me</Link>
    </div>
  );
};

export default HomePage;
