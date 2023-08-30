import React from "react";
import "./Register.css";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";
import { useState } from "react";
import ValidationR from "./ValidationR";
import {useNavigate} from 'react-router-dom'
import{  
InputGroup,
  Box,
  Input,
  Button,
  Spacer,
  Img,
  Select
} from "@chakra-ui/react";

const Register = () => {
  
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
     email: "",
     password: "",
     firstName:"",
     phone:"",
     lastName:""
   });

   async function postData()
    {
      console.log("in post")
      let res = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...values, password: pwd }),
      });
      let data =await res.json();
      console.log(data)
      alert("Signed In")
    }
    function handleChange(e) {
      console.log("asdad");
      setValues({ ...values, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log("run");
      setErrors(ValidationR({ ...values, password: pwd }));
      if (Object.keys(errors).length === 0) {
        console.log("Object");
        {postData();}
      }
    }

    const nav = useNavigate();

  function handleNavigate() {
    nav("/login");
  }

  return (
    <div className="mainDiv">
      <Box className="register" size="40%">
        <Spacer className="bigger">Create account</Spacer>
        <br />
        <Select
          className="selectoption"
          borderRadius="none"
          variant="outline"
          placeholder="CHOOSE A TITLE"

          borderColor="darkblue"
        >
          <option value="MR">MR</option>
          <option value="MRS">MRS</option>
          <option value="MS">MS</option>
          <option value="MISS">MISS</option>
          <option value="DOCTOR">DOCTOR</option>
          <option value="">OTHER</option>
        </Select>
        <form className="form">
          <label style={{ fontSize: "130%", textAlign: "left" }}>
            First name
          </label>
          <Input
            type="text"
            placeholder="First name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.firstName}</p>
          )}

          <label style={{ fontSize: "130%" }}>Last name</label>
          <Input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.lastName}</p>
          )}

          <label style={{ fontSize: "130%" }}>Email Address</label>
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.email}</p>
          )}

          <label style={{ fontSize: "130%" }}>Phone Number</label>
          <Input
            type="number"
            placeholder="Phone number"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          {errors.phone && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.phone}</p>
          )}

          <label style={{ fontSize: "130%" }}>Password</label>
          <br />
          <div className="password">
            <Input
              name="pwd"
              placeholder="Enter Password"
              type={isRevealPwd ? "text" : "password"}
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value), (onchange = { handleChange });
              }}
            />
            <Img
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? showPwdImg : hidePwdImg}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
              style={{ width: "30px", height: "30px", marginTop: "2%" }}
            />
          </div>
          {errors.password && (
            <p style={{ color: "red", fontSize: "10px" }}>{errors.password}</p>
          )}
          <br></br>
          <Button
            className="button"
            color="white"
            colorScheme="facebook"
            size="md"
            variant="solid"
            w="100%"
            borderRadius="none"
            onClick={handleSubmit}
          >
            Sign IN
          </Button>
        </form>
      </Box>
      <Box className="tologin">
        <p className="bigger">
          <i>Have an Account?</i>
        </p>
        <br />
        <Button
          className="button"
          color="white"
          colorScheme="facebook"
          size="md"
          variant="solid"
          w="90%"
          borderRadius="none"
          justifyContent="center"
          onClick={handleNavigate}
        >
          LOG IN
        </Button>
      </Box>
    </div>
  );
};

export default Register;
