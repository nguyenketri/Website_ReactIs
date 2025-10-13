import { AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const RatingStars = ({ rating = 0, total = 5 }) => {
  const stars = [];

  for (let i = 1; i <= total; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<AiFillStar key={i} color="#fadb14" />); // full star
    } else if (i - rating < 1) {
      stars.push(<AiTwotoneStar key={i} color="#fadb14" />); // half star
    } else {
      stars.push(<AiOutlineStar key={i} color="#fadb14" />); // empty star
    }
  }

  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
};

export default RatingStars;