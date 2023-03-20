import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Container, Grid } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      }, []);
  });
  return (
    <div className="productList">
      <Container>
        <div className="product__content">
          {products.map((product) => {
            return (
              <Grid xs={3}>
                <Product key={product.id} product={product} />
              </Grid>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
