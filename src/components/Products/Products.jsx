import React from "react";
import Grid from "@mui/material/Grid";

import Product from "./Product/Product";

const products = [
  { id: 1, name: "shoes", description: "running shoes", price: "$5" },
  { id: 2, name: "computer", description: "Apple macbook", price: "$15" },
  { id: 3, name: "computer", description: "Apple macbook", price: "$15" },
  { id: 4, name: "computer", description: "Apple macbook", price: "$15" },
  { id: 5, name: "computer", description: "Apple macbook", price: "$15" },
  { id: 6, name: "computer", description: "Apple macbook", price: "$15" },
  { id: 7, name: "computer", description: "Apple macbook", price: "$15" },
  { id: 8, name: "computer", description: "Apple macbook", price: "$15" },
  { id: 9, name: "computer", description: "Apple macbook", price: "$15" },
];
const Products = () => {
  return (
    <main>
      <div />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
