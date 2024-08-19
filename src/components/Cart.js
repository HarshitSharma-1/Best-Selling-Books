import "../styles/Book.css";
import "../styles/Booklist.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          <div className="booklist">
            {cartItems.map((item) => (
              <div className="book" key={item.id}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={item.img} alt="Name" />
                    </div>
                    <div className="flip-card-back">
                      <h3>{item.title}</h3>
                      <p>{item.author}</p>
                      <p>{item.rating}</p>
                      <p>{item.downloads}</p>
                      <p>{item.type}</p>
                      <h3>{item.price}</h3>
                    </div>
                  </div>
                </div>
                {/* <AddCart book={props.book} /> */}
                <div className="buttonbox">
                  <button className="button1">Buy Now</button>
                  <button
                    className="button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
