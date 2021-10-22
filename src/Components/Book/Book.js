import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const { image, name, price, _id } = props.book;
  console.log(props.book._id);

 

  return (
    <div className="book-card">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <div className="card-footer">
        <h3>${price}</h3>
        <Link to={'/checkout/'+_id}>
          <button className="buy-now-btn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
