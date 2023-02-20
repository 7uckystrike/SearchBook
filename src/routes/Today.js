import { useEffect, useState } from "react";
import { bookSearch } from "../until/api";
import Data from "../until/Data"
import "../App.css"

const Today = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "쏜살문고",
      sort: "recency",
      size: "36",
      target: "",
    };
    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };

  return (
    <>
      <div className="card-body">
        {books.map((book, index) => (
            <Data
              key={index}
              author={book.authors}
              title={book.title}             
              image={book.thumbnail}
            />
          ))}
      </div>
  </>
  );
}

export default Today