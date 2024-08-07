import "../styles/Book.css";

const Book = (props) => {
  const { img, title, author, rating } = props;

  function buyNow() {
    console.log(props.title);
    alert("Book ordered");
  }

  function addToCart() {
    console.log(props.title);
    alert("Book will be added to cart when cart is available");
  }

  return (
    <div className="book">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div className="flip-card-front">
            <img src={img} alt="Name" />
          </div>
          <div className="flip-card-back">
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{rating}</p>
            <p>{props.downloads}</p>
            <p>{props.type}</p>
            <h3>{props.price}</h3>
          </div>
        </div>
      </div>
      <div className="buttonbox">
        <button className="button1" onClick={buyNow}>
          Buy Now
        </button>
        <button className="button" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Book;
