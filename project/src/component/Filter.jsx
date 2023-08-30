import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Filter.css";
import { useNavigate, useParams,Link } from "react-router-dom";

const Filter = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const { category } = useParams();
  console.log(category);
  async function fetchData() {
    console.log("fetchdata");
    let res = await fetch("http://localhost:3000/products");
    let data = await res.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterCheck();
  }, [product]);

  function filterCheck() {
    if (product) {
      const filteredProducts = product.filter((el) => el.catagory === category);
      console.log(filteredProducts);
      setFilterProduct(filteredProducts);
    }
  }
  function sortProducts(option) {
    const sortedProducts = [...filterProduct];

    if (option === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "ratingAsc") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (option === "ratingDesc") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    setFilterProduct(sortedProducts);
  }

  function handleSortChange(event) {
    const selectedOption = event.target.value;
    if (selectedOption === "default") {
      setFilterProduct(product);
    } else {
      sortProducts(selectedOption);
    }
  }
  const navigate = useNavigate();

  return (
    <div>
      <div className="selectContainer">
        <select onChange={handleSortChange}>
          <option value="default">Sort By-</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="ratingAsc">Rating: Low to High</option>
          <option value="ratingDesc">Rating: High to Low</option>
        </select>
      </div>
      <br />
      <div className="mainDiv">
        {filterProduct.map((el) => (
          <Link to={`/products/${category}/${el.id}`} key={el.id}>
            <div className="productdiv">
              <Card className="card" maxW="xs" key={el.id}>
                <CardBody>
                  <Image src={el.image} alt="Product Image" borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{el.title}</Heading>
                    <Text color="blue.600" fontSize="2xl">
                      ${el.price}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;
