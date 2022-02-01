import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "../containers/Products";
import { history } from "./history";
import { Badge, Layout, Menu, Tag } from "antd";
import Login from "../containers/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/Slices/userSlice";

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { updateProducts } from "../store/Slices/productSlice";
import Cart from "../containers/Cart";
import Checkout from "../containers/Checkout";

const { Header, Content, Footer } = Layout;

const AppRouter = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    ...state.user
  }));

  const { selectedProducts } = useSelector((state) => ({
    ...state.products
  }));

  const logoutHandler = () => {
    dispatch(updateProducts([]));
    dispatch(logout(null));
  };

  return (
    <BrowserRouter history={history}>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />

          <Menu theme="dark" mode="horizontal">
            <Link to="/">
              <Menu.Item key="1">
                <UserOutlined />
                {user ? `  ${user.firstName} ${user.lastName}` : ` Guest`}
              </Menu.Item>
            </Link>
            <Link to="/cart">
              <Menu.Item
                style={{ position: "absolute", right: "9%" }}
                onClick={() => {}}
                key="2"
              >
                
                {Object.keys(selectedProducts).length !== 0 ? (
                  // <Tag color="blue">
                  //   <span style={{ color: "red" }}>
                  //     {Object.keys(selectedProducts).length}
                  //   </span>
                  // </Tag>
                  <Badge count={Object.keys(selectedProducts).length}>
                  <ShoppingCartOutlined key="cart" style={{color: "white" }}/>
                  </Badge>
                ):(<ShoppingCartOutlined key="cart" />)}
              </Menu.Item>
            </Link>
            {!user && (
              <Link to="/login">
                <Menu.Item
                  style={{ position: "absolute", right: "0px" }}
                  key="3"
                >
                  Login
                </Menu.Item>
              </Link>
            )}
            {user && (
              <Menu.Item
                style={{ position: "absolute", right: "0px" }}
                onClick={logoutHandler}
                key="3"
              >
                Logout
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </BrowserRouter>
  );
};
export default AppRouter;
