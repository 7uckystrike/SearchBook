# Search Book
> 리액트 기반 카카오 API를 사용한 개인 프로젝트   
> 개발기간
>  * 1차 2022.07 
>  * 2차 2023.02

<br />

## 배포 주소
https://book-lilac-two.vercel.app

<br/>

## 시작가이드

### Requirements
* react @18.2.0
* axios : @1.3.3

### Installation
~~~
$ git clone https://github.com/7uckystrike/search-book.git
$ cd search-book
$ npm install
$ npm start
~~~


<hr/>


## 기술

### Environment
<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<img src="https://img.shields.io/badge/javasciprt-F7DF1E?style=for-the-badge&logo=javasciprt&logoColor=black"> <img src="https://img.shields.io/badge/react-black?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">


<hr />


## 프로젝트 구조

~~~
src
├── components // 공통 컴포넌트
│   └── Header
├── routes // 경로 컴포넌트
│   ├── Genres
│   ├── Search
│   └── Today
├── until // 데이터 컴포넌트
│   ├── Data
│   └── api
└── App
~~~

### components
* Header 
  * 상단 메뉴바
  * ` ex)오늘의 책, 장르별 책, 책 검색 `

### routes
* Genres
  * 장르별 책 컴포넌트
* Search
  * 책 검색 컴포넌트
* Today
  * 오늘의 책 컴포넌트

### until
* Data
  * 책 불러오기 함수 컴포넌트
* api
  * 카카오 api

<hr/>


## 구현
### 카카오 API를 받아 책 검색하기
* 검색창과 검색어를 받을 `useState()`를 각각 만든다.
* `useEffect`를 사용해 검색어가 채워졌을 때, 채워진 값을 받아서 렌더링한다.
* 카카오에서 제공하는 메소드를 사용해 검색한 책 내용을 `async - await`를 사용해 받아온다.
* `map` 함수를 사용해 UI에 나타낸다.

<br />

### 중복코드 정리

~~~
constData = ({title, image, author}) => {
 return(
    <div>
     <img src={image} alt={title}/>
     <br/>
     <strong>{title}</strong>
     <p>{author}</p>
    </div>
  );
}
~~~

* 책 정보를 불러오는 코드를 컴포넌트마다 넣어뒀는데, 불러오는 정보값이 같은 컴포넌트가 있어 정리했다.
* `until` 폴더에 `Data.js`로 따로 빼어 공통으로 사용하고 있던 `Today.js`, `Genres.js` 컴포넌트에 import하여 사용한다.
* `Search` 컴포넌트는 불러오는 정보값이 달라서 컴포넌트 안에 그대로 두었다.



<br />

### 장르별 책 추천
* 장르 버튼을 클릭하면, 기존에 있던 버튼 클래스를 삭제한다.
* 불러온 정보값을 배열로 받는 상태와 장르를 받는 상태 총 두 가지 `useState()`를 만든다.
* 버튼이 눌리면 바로 렌딩 될 수 있게 `useEffect`를 사용했다.

~~~
const handleGenres = (e) => {
  const {
   target : {id}
  } = e;
  const Btns = document.querySelectorAll("button");
  Btns.forEach((Btn) => {
   Btn.classList.remove("clickedBtn");
  });
  setGenres(id);
  getBooks();
  e.target.classList.add("clickedBtn");
}
~~~


<hr/>


## JavaSciprt ES6
* 이벤트 타겟을 받아 올 때, ES6 문법을 사용했다.

~~~
const result = (e) => {
  const content = e.target.받아올값;
  const theBox = content[0];
  console.log(theBox)
}

	 ↓ 이렇게 바꿀 수 있다! ↓

// ES6
const result = (e) => {
  const {
   target: { 받아올값 },  // 이벤트 타겟 안에 있는 어떤 값을 받아와라.
   } = e
  const theBox = content[0], // 받아온 값을 변수에 할당하고 첫번째 값을 불러와라!
  console.log(theBox)
}
~~~


<hr />


## 화면구성
<img src="https://github.com/7uckystrike/search-book/blob/main/preview/preview.gif?raw=true" alt="img" />


<hr />


### 작업일지
https://jyounge.notion.site/search-book-react-b3ed25b3324c4b0d89baa0d09d65f9ec
