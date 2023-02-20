import axios from "axios";

const REST_API_KEY = "802cbf2611612600541f98020397dca2";
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`,
  },
});
export const bookSearch = (params) => {
  return Kakao.get("/v3/search/book", { params });
};