import { useCallback, useEffect, useState } from "react";
import { bookSearch } from "../until/api";
import Data from "../until/Data"

const Genres = () => {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState("소설");

  const getBooks = useCallback(async() => {
    let params = {
      query : genres,
      size: "10",
    };
    if (genres === "소설") {
      params = {
        query: "소설", 
        sort: "accuracy", 
        size: "10"
      }
    }
    const {
      data : { documents },
    } = await bookSearch(params);
    setBooks(documents);
    console.log(documents)

  }, [genres])



  const handleGenres = (e) => {
    const {
      target : { id },
    } = e;
    const Btns = document.querySelectorAll("button");
    Btns.forEach((Btn) => {
      Btn.classList.remove("clickedBtn");
    });
    setGenres(id);
    getBooks();
    e.target.classList.add("clickedBtn");
  };
  useEffect(() => {
    getBooks();
  }, [genres, getBooks]);

  return(
    <>
      <div>
        <button id="소설" onClick={handleGenres}>소설</button>
        <button id="교양" onClick={handleGenres}>교양</button>
        <button id="과학" onClick={handleGenres}>과학</button>
        <button id="에세이" onClick={handleGenres}>에세이</button>
      </div>
      <div class="card-body">
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
  )
}

  
export default Genres;