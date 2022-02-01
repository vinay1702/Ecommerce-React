import React from "react";
import { Card, Input, Button } from "antd";
import { CloseCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;
const ECard = ({
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
    <Card
      className='product-card'
      hoverable
      bodyStyle={{padding: 10}}
      style={{ width: 260, marginBottom: 10 }}
      cover={<img height='260' style={{padding: '10px 10px 0px 10px'}} alt={`${title}`} src={`${image}`} />}
      actions={
        !selectedProd
          ? [
              <Button type="text" onClick={() =>
                addToCart({ id, title, image, price, quantity: 1 
                })
                }
                key={`addToCart-${id}`}
              icon={<ShoppingCartOutlined />}>Add to cart</Button>
            ]
          : [
              <Input
                style={{width: '50%', textAlign: 'center'}}
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
            ]
      }
    >
      <Meta title={`${title}`} description={`Price: ${price}`} />
    </Card>
  );
};

export default ECard;
