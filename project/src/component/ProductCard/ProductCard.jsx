import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import Color from "../Color/Color";
import { Button } from "@chakra-ui/react";

const ProductCard = ({
  image,
  title,
  price,
  color,
  rating,
  category,
  details,
}) => {
  const roundedRating = Math.round(parseFloat(rating));
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
    { name: "brown", isSelected: false },
    { name: "green", isSelected: false },
    { name: "black", isSelected: false },
    { name: "teal", isSelected: false },
    { name: "red", isSelected: false },
    { name: "dodgerblue", isSelected: false },
    { name: "navy", isSelected: false },
    { name: "brown", isSelected: false },
    { name: "olive", isSelected: false },
    { name: "tan", isSelected: false },
    { name: "gray", isSelected: false },
  ]);

  useEffect(() => {
    const colorIndex = colorList.findIndex((c) => c.name === color);

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

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <p className="product-price">${price}</p>
          <p className="product-rating">
            {" "}
            ({rating}/5) {stars}
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
          {colorList.find((c) => c.isSelected)?.name.toUpperCase()}
        </p>
        <Color colorList={colorList} handleColorClick={handleColorClick} />
        <hr style={{ marginTop: "30px" }} />
        <div>
          <p className="text">PRODUCT DETAILS</p>
          {/* <p className="product-category">{category}</p> */}
          <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
            6 MONTH QUALITY GUARANTEE
          </span>
          <p className="text">Product code: TRC0270TAN</p>
          <p className="product-description text">{details}</p>
          <Button variant="solid" borderRadius="none" colorScheme="blue" size="md" className="addToCart">Add to card</Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
