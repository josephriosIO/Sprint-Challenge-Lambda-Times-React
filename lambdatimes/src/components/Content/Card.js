import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img alt={props.card.author} src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  tab: PropTypes.string,
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};

export default Card;
