import { useNavigate } from 'react-router-dom';
import "../App.css"

const Home = () => {

  const navigate = useNavigate();
 
  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button className="btn btn-danger" onClick={() => { navigate('/'); }}>오늘의 책</button>
        <button className="btn btn-warning" onClick={() => { navigate('/Genres'); }}>장르별 책</button>  
        <button className="btn btn-success" onClick={() => { navigate('/Search'); }}>책 검색</button>      
      </div>
    </>
  )
}

export default Home;