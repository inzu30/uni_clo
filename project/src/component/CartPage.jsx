import React, { useState, useEffect } from "react";
import '../component/CartPage.css'
import {Card, Box,Image,Button} from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);
  console.log(cartItems)

//   const removeItem = (itemId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//   };

const removeItem = (itemId) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

  // Update state and local storage after filtering
  setCartItems(updatedCartItems);
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};


const calculateTotal = () => {
    // return cartItems.reduce((total, item) => total + item.price, 0)
      return cartItems.reduce(
        (total, item) => total + parseFloat(item.price),
        0
      );
    };

    const nav = useNavigate();

  function handleNavigate() {
    nav("/");
  }

  function handleNavigatetopayment()
  {
    nav("/payment")
  }

  return (
    <div>
        <Button alignSelf="flex-start" onClick={handleNavigate}>HOME</Button>
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
            <b>Your cart is empty.</b>
            ) : (
                cartItems.map((item) => (
                    <Card key={item.id} className="cart-item">
            <Image src={item.image} alt={item.id} />
              <span className="item-name">{item.title}</span>
              <span className="item-price">${item.price}</span>
              <Button
                className="remove-button"
                onClick={() => removeItem(item.id)}
                >
                Remove
              </Button>
            </Card>
          ))
          )}
      </div>
      {cartItems.length > 0 && (
          <Box className="cart-total">
          <Button
            className="button"
            color="white"
            colorScheme="facebook"
            size="md"
            variant="solid"
            w="100%"
            borderRadius="none"
            onClick={handleNavigatetopayment}>Total: ${calculateTotal()}</Button>
        </Box>
      )}
     
    </div>
      </div>
  );
}

export default CartPage;
