import PropTypes from 'prop-types';

const Data = ({title, image, author}) => {
  return(
    <div>
      <img src={image} alt={title}/>
      <br/> 
      <strong>{title}</strong>
      <p>{author}</p>
    </div>
  );
}


// 타입검사
Data.prototype = {
  title: PropTypes.string,
  author: PropTypes.array,
  image: PropTypes.string,
};

export default Data;
