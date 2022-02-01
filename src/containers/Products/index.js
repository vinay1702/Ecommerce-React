import React, { useEffect } from "react";
import { Col, Row, Breadcrumb, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProducts } from "../../store/Slices/productSlice";
import ECard from "../../components/ECard";
const Products = () => {
  const dispatch = useDispatch();

  const { products, status, selectedProducts } = useSelector((state) => ({
    ...state.products
  }));

  useEffect(() => {
    if (status === "IDEAL") {
      dispatch(fetchProducts());
    }
  }, [status]);

  const addToCart = (prod) => {
    const updateProd = { ...selectedProducts };
    updateProd[prod.id] = prod;
    dispatch(updateProducts(updateProd));
  };
  const removeFromCart = (id) => {
    const updateProd = { ...selectedProducts };
    delete updateProd[id];
    dispatch(updateProducts(updateProd));
  };

  const updateQuantity = (prod) => {
    const updateProd = { ...selectedProducts };
    if(prod.quantity === 0){
      delete updateProd[prod.id]
    } else {
      updateProd[prod.id] = prod;
    }
    dispatch(updateProducts(updateProd));
  };

  return (
    <Spin spinning={products.length === 0} tip="Loading...">
      <div className="site-card-wrapper">
        <Row>
          <Col span={24}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          {products.map((product) => (
            <Col key={product.id} span={6}>
              <ECard
                {...product}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                selectedProducts={selectedProducts}
                updateQuantity={updateQuantity}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Spin>
  );
};

export default Products;
