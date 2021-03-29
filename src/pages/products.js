import React, { useState } from "react";

import PosterCard from "../components/Card/PosterCard";
import SaleCard from "../components/Card/SaleCard";
import ShopByCategoryCard from "../components/Card/ShopByCategoryCard";
import products from "../data/Products";
import Banner from "../components/Header/Banner";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
const Product = () => {
  const [isShowProducts, setIsShowProduct] = useState(false);

  const _handleGetProduct = () => {
    setIsShowProduct(!isShowProducts);
  };
  return (
    <div>
      <Banner />
      <Container fluid className="px-4 bg-light">
        <Row>
          {products.map((product) => {
            return (
              <div className="px-3" key={product.id}>
                <SaleCard
                  imgUrl={product.imgUrl}
                  strike={product.strike}
                  price={product.price}
                  productName={product.productName}
                />
              </div>
            );
          })}
        </Row>
        {isShowProducts ? (
          <Row>
            {products.map((product) => {
              return (
                <div className="px-3" key={product.id}>
                  <ShopByCategoryCard
                    imgUrl={product.imgUrl}
                    strike={product.strike}
                    price={product.price}
                    productName={product.productName}
                  />
                </div>
              );
            })}
          </Row>
        ) : null}

        {/* <Row className="px-3 py-4">
          <Image fluid className="w-100" src="images/advertise.png"></Image>
        </Row> */}
      </Container>
      <Row className="d-flex justify-content-center my-4 py-4">
        <Button
          style={{ width: "300px" }}
          className="btn p-2 rounded-pill px-4 py-3"
          variant="primary"
          href="#"
          onClick={_handleGetProduct}
        >
          {isShowProducts ? (
            <span> View Less Products</span>
          ) : (
            <span>View More Products</span>
          )}
        </Button>
      </Row>
    </div>
  );
};

export default Product;
