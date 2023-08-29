import React, { useState, useEffect } from "react";
import "./Login.css";
import Validation from "./Validation";
import { Box, Button, Card, Input, Spacer } from "@chakra-ui/react";
import { EmailIcon, CheckIcon, SpinnerIcon } from "@chakra-ui/icons";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  
  const [data,setData]=useState([])

  async function fetchData()
  {
    let res = await fetch("http://localhost:3000/user");
    let loginarr = await res.json()
    setData(loginarr)
  }
  
  fetchData();

  function handlechange(e) {
    console.log("asdad");
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("run");
    setErrors(Validation(values));
  }

  useEffect(() => {
    if (
      Object.keys(errors).length == 0 &&
      values.email !== "" &&
      values.password !== ""
    ) {
      data.forEach((el)=>{
        if(el.email===values.email && el.password===values.password)
        {
          alert("Submitted");
        }
        else if(el.email===values.email && el.password !== values.password)
        {
          alert("Wrong password")
        }
        else
        {
          alert("Email is not registered,you can create a new")
        }
      })
      console.log(errors);
    }
  }, [errors]);
  return (
    <div className="outerBox">
      <Box className="outerBoxs" width="100%">
        <Card className="loginBox">
          <p>My Account</p>
          <form className="form">
            <label style={{ textAlign: "left" }}>Email</label>
            <br />
            <Input
              type="email"
              focusBorderColor="darkblue"
              placeholder="Email"
              name="email"
              borderRadius="none"
              value={values.email}
              onChange={handlechange}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "10px" }}>{errors.email}</p>
            )}
            <br></br>
            <label style={{ textAlign: "initial" }}>Password</label>
            <br />
            <Input
              type="password"
              focusBorderColor="darkblue"
              placeholder="Password"
              borderRadius="none"
              value={values.password}
              name="password"
              onChange={handlechange}
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "10px" }}>
                {errors.password}
              </p>
            )}
            <br />
            <a href="#">ForgetPassword?</a>
            <br />
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
              LOG IN
            </Button>
            <span>New here?</span>
            <br />
            <a href="#">Create an account</a>
          </form>
        </Card>
        <Box className="register"padding="15px" w="30%">
          <b>New customers</b>
          <p>Set up an account with us and you will be able to:</p>
          <br />
          <Box>
            <CheckIcon w={6} h={6} />
            <span> Check order status</span>
          </Box>
          <br />
          <Box>
            <EmailIcon w={6} h={6} />
            <span> Save multiple addresses to your address book</span>
          </Box>
          <br />
          <Box>
            <SpinnerIcon w={6} h={6} />
            <span> Set your size and monogramming preferences</span>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;