import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { First } from "react-bootstrap/esm/PageItem";
import { axiosInstance } from "../request";
import { useNavigate } from "react-router-dom";
import Identity from "../components/Identity";

let formstage = "personaldetails";

function Personaldetails() {
  let navigate = useNavigate();
  let [Name, setName] = useState("");
  let [DOB, setDOB] = useState("");
  let [ContractNumber, setContractNumber] = useState("");
  let [AlternateNumber, setAlternateNumber] = useState("");
  let [Permanentaddress, setPermanentaddress] = useState("");
  let [temporaryaddress, settemporaryaddress] = useState("");
  let role = 2;

  let handleSubmit = async () => {
    localStorage.setItem(
      "form",
      JSON.stringify({
        name: Name,
        DOB: DOB,
        ContractNumber,
        AlternateNumber,
        Permanentaddress,
        temporaryaddress,
        role,
      })
    );
    let formdata= new FormData()
    formdata.append("name", Name);
    formdata.append("DOB", DOB);
    formdata.append("ContractNumber", ContractNumber);
    formdata.append("AlternateNumber", AlternateNumber);
    formdata.append("Permanentaddress", Permanentaddress);
    formdata.append("temporaryaddress", temporaryaddress);
    console.log(formdata)
    let res = await axiosInstance.post(
      "/api/post/personaldetails",
     formdata
    );
    if(res.status == "200") {
      sessionStorage.setItem("id", res.data.data._id)
      navigate("/identity");
    }
  };
  return (
    <div className="wrapper">
      <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
        PersonalDetails page{" "}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Name:</label>
            <input
              type="Name"
              class="form-control"
              id="inputEmail4"
              required
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <br></br>
          <div class="form-group col-md-6">
            <label for="inputPassword4">DOB:</label>
            <input
              type="date"
              class="form-control"
              id="dob"
              required
              placeholder="DOB"
              onChange={(e) => {
                setDOB(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <br></br>
          <div class="form-group col-md-6">
            <label for="inputAddress">Contract Number:</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              required
              placeholder="contract number"
              onChange={(e) => {
                setContractNumber(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <br></br>
          <div class="form-group col-md-6">
            <label for="inputAddress">Alternative Number:</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              required
              placeholder="nuber"
              onChange={(e) => {
                setAlternateNumber(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <br></br>
          <div class="form-group col-md-6">
            <label for="inputAddress2">Permanentaddress:</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              required
              placeholder="Apartment, studio, or floor"
              onChange={(e) => {
                setPermanentaddress(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress2">Tempory address:</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              required
              placeholder="Apartment, studio, or floor"
              onChange={(e) => {
                settemporaryaddress(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit"onClick={handleSubmit}>Next</button>

      </form>
    </div>
  );
}

export default Personaldetails;
