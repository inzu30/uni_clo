import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import Color from "./Color/Color";
import { Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
const ProductCard = () => {
  
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);

  async function fetchData() {
    console.log("fetchdata");
    let res = await fetch(`http://localhost:3000/products/${id}`);
    let data = await res.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const roundedRating = Math.round(parseFloat(product.rating));
  const stars = Array.from({ length: roundedRating }, (_, index) => (
    <span
      key={index}
      className={`star ${index < roundedRating ? "filled" : "empty"}`}
    >
      ⭐
    </span>
  ));

  const [colorList, setColorList] = useState([
    { name: "crimson", isSelected: false },
    { name: "grey", isSelected: false },
    { name: "green", isSelected: false },
    { name: "black", isSelected: false },
    { name: "teal", isSelected: false },
    { name: "red", isSelected: false },
    { name: "dodgerblue", isSelected: false },
    { name: "navy", isSelected: false },
    { name: "brown", isSelected: false },
    { name: "olive", isSelected: false },
    { name: "tan", isSelected: false },
    { name: "offwhite", isSelected: false },
  ]);

  useEffect(() => {
    const colorIndex = colorList.findIndex((c) => c.name === product.color);

    if (colorIndex !== -1) {
      const updatedColors = colorList.map((c, index) =>
        index === colorIndex ? { ...c, isSelected: true } : c
      );
      setColorList(updatedColors);
    }
  }, []);

  const handleColorClick = (index) => {
    const updatedColors = colorList.map((color, i) =>
      i === index
        ? { ...color, isSelected: true }
        : { ...color, isSelected: false }
    );
    setColorList(updatedColors);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    };

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...existingCartItems, cartItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    alert("ADDED");
  };

  const nav = useNavigate();

  function handleNavigate() {
    nav("/cart");
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <p className="product-price">$ {product.price}</p>
          <p className="product-rating">
            {" "}
            ({product.rating}/5) {stars}
          </p>
        </div>
        <hr />
        <p className="text">
          We named these bestselling chinos 'Ultimate' for a reason. Once you've
          tried a pair, you'll soon see why we did.
        </p>
        <p className="product-color">
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>
            1.Color{" "}
          </span>
          {product.color}
        </p>
        <Color colorList={colorList} handleColorClick={handleColorClick} />
        <hr style={{ marginTop: "30px" }} />
        <div>
          <p className="text">PRODUCT DETAILS</p>
          {/* <p className="product-category">{category}</p> */}
          <p>
            <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
            6 MONTH QUALITY GUARANTEE
          </span>
          </p>
          <p className="text">Product code: TRC0270TAN</p>
          <p className="product-description text">{product.details}</p>
          <Button
            variant="solid"
            borderRadius="none"
            colorScheme="blue"
            size="md"
            className="addToCart"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button
          margin="10px"
            variant="solid"
            borderRadius="none"
            colorScheme="blue"
            size="md"
            className="addToCart"
            onClick={handleNavigate}
          >
            Go To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
