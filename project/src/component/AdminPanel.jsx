import React, { useState, useEffect } from "react";
import {
  Stack,
  Box,
  Heading,
  Flex,
  CardBody,
  Text,
  Card,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {

  const [product, setProduct] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  async function fetchData() {
    let res = await fetch("http://localhost:3000/user");
    let data = await res.json();
    setProduct(data);
  }

  const handleLogin = () => {
    if (email === "inzamamulh759@gmail.com" && password === "123456789") {
      setLoggedIn(true);
      fetchData();
    } else {
      alert("Incorrect email or password");
    }
  };

  const nav = useNavigate();

  function handlehome() {
    nav("/");
  }
  function handlelogin() {
    nav("/login");
  }
  function handlecart() {
    nav("/cart");
  }
  function handleregister() {
    nav("/register");
  }

 return (
  <>
  <Flex>
   <Box p={4}>
     <Heading as="h1" size="xl" mb={4}>
       My Account
     </Heading>
     <Flex flexDirection="column" alignItems="center">
       {!loggedIn ? (
         <Box>
           <Input
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             mb={2}
           />
           <Input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             mb={2}
           />
           <Button colorScheme="blue" onClick={handleLogin}>
             check In
           </Button>
         </Box>
       ) : (
         <Box
           width="100%"
           maxWidth="800px"
           mb={4}
           p={4}
           borderWidth="1px"
           borderRadius="md"
           backgroundColor="white"
         >
           <Heading as="h2" size="lg" mb={2}>
             User List
           </Heading>
           <Box>
             {product.map((el) => (
              
               <div className="userdiv">
                 <Card className="card" maxW="xs">
                   <p> User id : {el.id}</p>
                   <CardBody>
                     <Stack mt="6" spacing="3">
                       <Heading size="md">
                         <b>
                           {el.firstName} {el.lastName}
                         </b>
                       </Heading>
                       <Text color="blue.600" fontSize="2xl">
                         email : {el.email};<br />
                         Password : {el.password} <br></br>
                         Phone number :{el.phone}
                         <br />
                       </Text>
                     </Stack>
                   </CardBody>
                 </Card>
               </div>
             ))}
           </Box>
         </Box>
       )}
     </Flex>
     <Button onClick={handlelogin}>LOGIN</Button>
     
   </Box>
   <Box>
   <h1>New customers</h1>
   <Text textAlign="initial"textColor={"blue"}>
* Set up an accont with us and you will be able to:
<br/>
* Check order status
<br/>
* Save multiple addresses to your address book
<br/>
* Set your size and monogramming preferences</Text>
   <Button onClick={handleregister}>REGISTER</Button>
   </Box>
   </Flex>
   </>
 );
};

  

export default AdminPanel;
