import React from "react";
import "./style.css";

function ResultList(props) {
  return (
    <div className="container containerGIF">
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item " key={result.id}>{result.title}
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default ResultList;
