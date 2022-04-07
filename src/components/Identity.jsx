import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { axiosInstance } from "../request";
import { useNavigate } from "react-router-dom";

function Identity() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    aadharNumber: "",
    panNumber: "",
    image: "",
    image1: "",
    bloodgroup: "",
    educationaldetails1: "",
    educationaldetails2: "",
    educationaldetails3: "",
    educationaldetails4: "",
    image2: "",
  });

  let handleSubmit = async () => {
    let formdata = new FormData();
    formdata.append("aadharNumber", data.aadharNumber);
    formdata.append("panNumber", data.panNumber);
    formdata.append("file", data.image);
    formdata.append("file", data.image1);
    formdata.append("bloodgroup", data.bloodgroup);
    formdata.append("educationaldetails1", data.educationaldetails1);
    formdata.append("educationaldetails2", data.educationaldetails2);
    formdata.append("educationaldetails3", data.educationaldetails3);
    formdata.append("educationaldetails4", data.educationaldetails4);
    formdata.append("file", data.image2);





    formdata.id = sessionStorage.getItem("id");
    let res = await axiosInstance.post("/api/post/identity", data);

    if (res.status == 200) {
      navigate("/workexperience");
    } else {
      console.log(res.data.message);
    }

  };

  return (
    <div className="wrapper">
      <h2 style={{ textAlign: "center", paddingTop: "5px" }}>Identity page </h2>
      <form
        class="form-row"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div class="form-group col-md-6">
          <label for="pan number"> Enter Aadhar card:</label>
          <input
            type="text"
            id=" number"
            required
            name="Aadharnumber"
            onChange={(E) => {
              setData({
                ...data,
                aadharNumber: E.target.value,
              });
              console.log(E.target.value);
            }}
          ></input>
          <label for="myfile">Select a file:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(E) => {
              setData({
                ...data,
                image: E.target.files[0],
              });
              
            }}
          ></input>
          <br></br>
        </div>
        <br></br>
        <div>
          <label for="pan number"> Enter pan Number:</label>
          <input
            type="text"
            id="pan number"
            required
            name="pan number"
            onChange={(E) => {
              setData({
                ...data,
                panNumber: E.target.value,
              });
              console.log(E.target.value);
            }}
          ></input>
          <label for="myfile">Select a file:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(E) => {
              setData({
                ...data,
                image1: E.target.files[0],
              });
              
            }}
          />
          <br></br>
        </div>
        <br></br>
        <div>
          <label for="Blood Group">Blood Group:</label>

          <select
            id="Blood Group"
            required
            onChange={(E) => {
              setData({
                ...data,
                bloodgroup: E.target.value,
              });
              console.log(E.target.value);
              console.log(E);
            }}
          >
            <option selected value="">
              Please Select A Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="o+">O+</option>
            <option value="B+">B+</option>
            <option value="AB">AB+</option>
            <option value="A-">A-</option>
            <option value="O-">O-</option>
            <option value="B-">B-</option>
            <option value="AB">AB-</option>
          </select>
        </div>
        <div>
          <label for="Educational Details">Educational Details:</label>
          <select
            id="Educational Details"
            required
            onChange={(E) => {
              setData({
                ...data,
                educationaldetails1: E.target.value,
              });
              console.log("e1",E.target.value);
            }}
          >
            <option value="select">Select</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
          <label for="myfile">Select a file:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(E) => {
              setData({
                ...data,
                image2: E.target.files[0],
              });
             
            }}
          />
        </div>
        <div>
          <label for="Educational Details">Educational Details:</label>

          <select
            id="Educational Details"
            required
            onChange={(E) => {
              setData({
                ...data,
                educationaldetails2: E.target.value,
              });
              console.log("e2",E.target.value);
            }}
          >
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
          <label for="myfile">Select a file:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(E) => {
              setData({
                ...data,
                image2: E.target.files[0],
              });
            }}
          />
        </div>
        <div>
          <label for="Educational Details">Educational Details:</label>

          <select
            id="Educational Details"
            required
            onChange={(E) => {
              setData({
                ...data,
                educationaldetails3: E.target.value,
              });
              console.log("e3",E.target.value);
            }}
          >
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
          <label for="myfile">Select a file:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(E) => {
              setData({
                ...data,
                image2: E.target.files[0],
              });
            }}
          />
        </div>
        <div>
          <label for="Educational Details">Educational Details:</label>

          <select
            id="Educational Details"
            required
            onChange={(E) => {
              setData({
                ...data,
                educationaldetails4: E.target.value,
              });
              console.log("e4",E.target.value);
            }}
          >
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
          <label for="myfile">Select a file:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(E) => {
              setData({
                ...data,
                image2: E.target.files[0],
              });
            }}
          />
        </div>
        <button type="submit">next</button>
      </form>
    </div>
  );
}

export default Identity;
