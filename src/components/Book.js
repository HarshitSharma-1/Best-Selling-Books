import "../styles/Book.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Book = (props) => {
  const { addToCart } = useContext(CartContext);
  const { book } = props;

  return (
    <div className="book">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={book.img} alt="Name" />
          </div>
          <div className="flip-card-back">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.rating}</p>
            <p>{book.downloads}</p>
            <p>{book.type}</p>
            <h3>{book.price}</h3>
          </div>
        </div>
      </div>
      <div className="buttonbox">
        <button className="button1">Buy Now</button>
        <button className="button" onClick={() => addToCart(book)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Book;
