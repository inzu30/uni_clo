import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
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
      Object.keys(errors).length === 0 &&
      values.email !== "" &&
      values.password !== ""
    ) {
      const user = data.find((el) => el.email === values.email);

      if (user) {
        if (user.password === values.password) {
          alert("Submitted");
        } else {
          alert("Wrong password");
        }
      } else {
        alert("Email is not registered, you can create a new");
      }
    }
  }, [errors]);

  const nav = useNavigate();

  function handleNavigate() {
    nav("/register");
  };
  function handleNavigatetoAdmin()
  {
    nav("/admin");
  }


  return (
    <div className="outerBox">
      <Button alignSelf="self-start" onClick={handleNavigatetoAdmin}>Admin LOG IN</Button>
      <Box className="outerBoxs">
        <Card className="loginBox">
          <h2>My Account</h2>
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
            <h4>New here?</h4>
            <br />
            <a href="#">Create an account</a>
          </form>
        </Card>
                
        <Box className="register" padding="15px" w="30%">
          <Box className="text">
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
          <Button
            className="buttonR"
            color="white"
            colorScheme="facebook"
            size="md"
            variant="solid"
            borderRadius="none"
            onClick={handleNavigate}
          >
            CREATE AN ACCOUNT NOW
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;