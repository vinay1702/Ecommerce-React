import React from "react";
import { Card, Input, Button, Row, Col } from "antd";
import { CloseCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;
const CartItem = ({
  id,
  title,
  image,
  price,
  selectedProducts,
  addToCart,
  removeFromCart,
  updateQuantity
}) => {
  const selectedProd = selectedProducts[id];

  return (
    <Card style={{ width: "auto", marginBottom: 10 }} bodyStyle={{padding: 10}}>
      <Row>
        <Col span={3}><img height='60' width='60' alt={`${title}`} src={`${image}`} /></Col>
        <Col span={13}>
          <p><strong>{title}</strong></p>
          <p>{`Price: ${price}`}</p>
        </Col>
        <Col span={8}>
        <Row>
            <Col span={12}>
              <Input
                addonBefore={
                  <Button
                    onClick={() =>
                      updateQuantity({
                        ...selectedProd,
                        quantity: selectedProd.quantity + 1
                      })
                    }
                    style={{ padding: "0px" }}
                    type="link"
                  >
                    +
                  </Button>
                }
                addonAfter={
                  <Button
                    disabled={selectedProd?.quantity === 0}
                    onClick={() =>
                      {updateQuantity({
                        ...selectedProd,
                        quantity: selectedProd.quantity - 1
                      })}
                    }
                    style={{ padding: "0px" }}
                    type="link"
                  >
                    -
                  </Button>
                }
                defaultValue={selectedProd?.quantity}
                value={selectedProd?.quantity}
              />
              </Col>
              <Col span={12}>
                <Button type="link" onClick={() => removeFromCart(id)}>Remove Item</Button>
            </Col>
        </Row>
        
        </Col>
      </Row>
    </Card>
    );
};

export default CartItem;
