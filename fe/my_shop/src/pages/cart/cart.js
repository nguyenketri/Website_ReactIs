import React, { useState } from "react";
import "./style.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image:
        "https://cdn.tgdd.vn/Products/Images/5698/253637/acer-ek220q-h-215inch-1-600x600.jpg",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image:
        "https://cdn.tgdd.vn/Products/Images/7928/300157/tay-cam-choi-game-ipega-pg-9129-1-600x600.jpg",
    },
  ]);

  const handleQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty =
            type === "increase"
              ? item.quantity + 1
              : item.quantity > 1
              ? item.quantity - 1
              : 1;
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-header">🛒 Cart</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="product-cell">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </td>
              <td>${item.price}</td>
              <td>
                <div className="qty-box">
                  <button onClick={() => handleQuantity(item.id, "decrease")}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantity(item.id, "increase")}>
                    +
                  </button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-buttons">
        <button className="btn-outline">Return To Shop</button>
        <button className="btn-outline">Update Cart</button>
      </div>

      <div className="cart-bottom">
        <div className="coupon">
          <input type="text" placeholder="Coupon Code" />
          <button className="btn-apply">Apply Coupon</button>
        </div>

        <div className="cart-total">
          <h3>Cart Total</h3>
          <p>
            <span>Subtotal:</span> <span>${getSubtotal().toFixed(2)}</span>
          </p>
          <p>
            <span>Shipping:</span> <span>Free</span>
          </p>
          <p className="total">
            <span>Total:</span> <span>${getSubtotal().toFixed(2)}</span>
          </p>
          <button className="btn-checkout">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
