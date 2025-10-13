import { memo } from "react";

import { AiOutlineEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import "./style.scss";
import RatingStars from "utils/rating";

const ProductCard = ({ title, image, price, rating}) => {
  return (
    <div className="product-card">
  <div className="image-wrapper">
    <img src={image} alt={title} className="product-image" />

    <div className="icon-actions">
      <button className="like-btn">
        <CiHeart />
      </button>
      <button className="view-btn">
        <AiOutlineEye />
      </button>
    </div>
  </div>

  <h5 className="product-title">{title}</h5>
  <p className="product-price">${price}</p>

  <p style={{ margin: "auto" }}>
    <RatingStars rating={rating} total={5} />
  </p>
</div>
  );
};

export default memo(ProductCard);
