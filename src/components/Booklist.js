import { books } from "../data/books";
import "../styles/Booklist.css";
import Book from "./Book";

const Booklist = () => {
  return (
    <div className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );
};

export default Booklist;
