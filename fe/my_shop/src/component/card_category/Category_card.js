import { memo } from "react";
import "./style.scss";


const CategoryCard = ({ image , text}) => {
  return (
    <div className="category-card">
      <div className="image-wrapper">
        <img src={image} alt={text} className="category-image" />
      </div>

      <h5 className="category-title">{text}</h5>
    
    </div>
  );
};

export default memo(CategoryCard);
