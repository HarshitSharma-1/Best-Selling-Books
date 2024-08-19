import { books } from "../data/books";
import "../styles/Booklist.css";
import Book from "./Book";

const Booklist = () => {
  return (
    <div className="container">
      <div className="booklist">
        {books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Booklist;
