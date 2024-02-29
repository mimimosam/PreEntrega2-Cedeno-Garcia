import React from "react";
import { products } from "./ProductsList";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./ProductListStyles.css";

export const ProductList = (
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal
) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.stock);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className="productContainer">
      {products.map((product) => (
        <Card className="card" style={{ width: "18rem" }} key={product.id}>
          <Card.Img src={product.img} alt={product.alt} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="secondary">
              {" "}
              <Link
                className="nav-link"
                to={`/recipe-item/${product.id}`}
                activestyle={{ textDecoration: "none" }}
              >
                See Details{" "}
              </Link>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
