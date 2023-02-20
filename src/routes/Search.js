import { bookSearch } from "../until/api";
import { useState, useEffect } from "react"

const Search = () => {
  const [text, setText] = useState(""); //검색
  const [query, setQuery] = useState(""); //검색어
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true); // true 일 때 렌더링, false일 때는 검색된거 나타나지 않는다.
    }
  }, [query]); //검색어가 0이상 일때 검색어를 받아서 렌더링한다.

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
