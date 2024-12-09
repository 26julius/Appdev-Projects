import React, { useState } from "react";

const prices = {
  grapes: 5.79,
  oranges: 1.2,
  kiwis: 3.0,
  bananas: 1.0,
  cucumbers: 1.5
};

const images = {
  grapes: "https://freshdeli.ph/cdn/shop/products/120725638_442198306743317_5226567614590156039_n.jpg?v=1614035875",
  oranges: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5XZRw0gTi1rW4TJx-hSofyg2uoMSO6ga9g&s",
  kiwis: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKID21cFi6R3lc6NPsIaSNDYrLIeLBZR5ZSw&s",
  bananas: "https://nerdish.io/wp-content/uploads/2021/11/photo-1583485646409-f9feb9af2a67.jpeg",
  cucumbers: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-cWRLSbGoTTTqvbXSOaJEoDq5AEie1Y9tQ&s"
};

const App = () => {
  const [cart, setCart] = useState({
    grapes: 0,
    oranges: 0,
    kiwis: 0,
    bananas: 0,
    cucumbers: 0
  });

  const [payment, setPayment] = useState(0);
  const [paid, setPaid] = useState(false);

  const handleQuantityChange = (item, increment) => {
    setCart((prevCart) => {
      const newQuantity = prevCart[item] + increment;
      return {
        ...prevCart,
        [item]: newQuantity < 0 ? 0 : newQuantity 
      };
    });
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

 
  const calculateTotal = () => {
    let total = 0;
    for (const item in cart) {
      total += cart[item] * prices[item];
    }
    return total.toFixed(2);
  };

  const calculateChange = () => {
    const total = parseFloat(calculateTotal());
    const change = payment - total;
    return change < 0 ? 0 : change.toFixed(2);
  };


  const handleCheckout = () => {
    if (parseFloat(payment) >= parseFloat(calculateTotal())) {
      setPaid(true);
    } else {
      alert("Insufficient payment!");
    }
  };

  const generateReceipt = () => {
    const total = parseFloat(calculateTotal());
    const change = calculateChange();
    return (
      <div>
        <h2>Receipt</h2>
        <ul>
          {Object.keys(cart).map((item) => {
            if (cart[item] > 0) {
              return (
                <li key={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}: {cart[item]} x ₱{prices[item].toFixed(2)} = ₱{(cart[item] * prices[item]).toFixed(2)}
                </li>
              );
            }
            return null;
          })}
        </ul>
        <hr />
        <p>Total Price: ₱{total.toFixed(2)}</p>
        <p>Amount Paid: ₱{payment}</p>
        <p>Change: ₱{change}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Grocery Checkout</h1>
      
    
      <div>
        <h2>Select your items</h2>
        {Object.keys(prices).map((item) => (
          <div key={item} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <img src={images[item]} alt={item} style={{ width: "50px", marginRight: "10px" }} />
            <label>
              {item.charAt(0).toUpperCase() + item.slice(1)} (₱{prices[item].toFixed(2)} per unit):
            </label>
            <div>
              <button onClick={() => handleQuantityChange(item, -1)} >-</button>
              <span style={{ margin: "0 10px" }}>{cart[item]}</span>
              <button onClick={() => handleQuantityChange(item, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      
      <div>
        <h3>Total: ₱{calculateTotal()}</h3>
      </div>

      <div>
        <label>
          Enter Payment Amount: ₱
          <input
            type="number"
            value={payment}
            onChange={handlePaymentChange}
            min="0"
          />
        </label>
      </div>
   
      <button onClick={handleCheckout}>Checkout</button>

      {paid && generateReceipt()}
    </div>
  );
};

export default App;
