import { bookSearch } from "../until/api";
import { useState, useEffect } from "react"

const Search = (props) => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true);
    }
  }, [query]);

  const onEnter = e => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  const onTextUpdate = e => {
    setText(e.target.value);
  };

  const bookSearchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, 
      size: 36
    };

    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  }

  return (
    <>
      <div>
        <input
          type="search"
          placeholder="검색어를 입력 하세요!"
          name="query"
          onKeyDown={onEnter}
          onChange={onTextUpdate}
          value={text}
        />
      </div>
      <ul>
        <div className="search">
          {books.map((book, index) => (
            <Item
              key={index}
              thumbnail={book.thumbnail}
              title={book.title}
              url={book.url}
              sale={book.sale_price}
            />
          ))}
        </div>
      </ul>
    </>
  );
};

export const Item = (props) => {

  return(
      <div>
        <dl>
          <dt>
            <img src={props.thumbnail}/>
          </dt>
          <dd>
            <div>
              <strong>{props.title}</strong>
              <br />
              <p><i>{props.sale}원</i></p>
              <a href={props.url} className="search_desc">상세정보</a>
            </div>
          </dd>
        </dl>
      </div>
  )
}


export default Search;
