import React from "react";
import "./style.css";

function Card(props) {
  return (
    <>
    <h5>Card</h5>

    <div class="card">
    <div class="card-body">
      <h4 class="card-title text-muted">Card title</h4>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text text-muted">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      <a href="#B1" class="card-link">
        Card link {props.heading}
      </a>
      <a href="#D1" class="card-link">
        Another link {props.children}
      </a>
    </div>
  </div>
  </>
  );
}

export default Card;
