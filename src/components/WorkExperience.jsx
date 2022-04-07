import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { axiosInstance } from "../request";
function WorkExperience() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    previousorganizationdocumnets: "",
    bankstatement: "",
  });
  let identiy = JSON.parse(localStorage.getItem("form"));
  identiy.previousorganizationdocumnets = data.previousorganizationdocumnets;
  identiy.bankstatement = data.bankstatement;
  console.log(identiy);

  let handleSubmit = async () => {
    let formdata = new FormData();
    formdata.append(
      "previousorganizationdocumnets",
      data.previousorganizationdocumnets
    );
    formdata.append("bankstatement",data.bankstatement);


    data.id = sessionStorage.getItem("id");
    let res = await axiosInstance.post("/api/post/workexperience", data);

    if (res.status == 200) {
      navigate("/");
    } else {
      console.log(res.data.message);
    }
  };

  return (
    <div className="wrapper">
      <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
        WorkExperience page{" "}
      </h2>
      <form
        className="Workdetails"
        
        
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label for="pan number"> Previous Organization documents :</label>

          <select
            id="Document"

            required
            onChange={(E) => {
              setData({
                ...data,
                previousorganizationdocumnets: E.target.files[0],
              });
              
            }}
          >
            <option  value="month pay slip">3 Month Pay slip</option>
            <option value="offer letter">offer letter</option>
            <option value="releiving">relieving letter</option>
          </select>
          <br></br>
          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile" />
          <br></br>
        </div>
        <div>
          <label for="Bank Statment"> Bank Statment :</label>

          <select
            id="Document"
            required
            onChange={(E) => {
              setData({
                ...data,
                bankstatement: E.target.files[0],
              });
             console.log(E.target.files); 
            }
          }
          >
            <option value="lest than 6th months">lest than 6th months</option>
            <option value="more than 6th months">more than 6th months</option>
            <option value="freshers">freshers</option>
          </select>
          <br></br>

          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile" />
          <br></br>
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WorkExperience;
