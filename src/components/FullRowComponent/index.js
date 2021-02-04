import React, { useContext } from "react";
import ArticleContext from "../../utils/ArticleContext";
import "./style.css";

// import YouTube from "../YouTube/index.js";
// import Calendar from "../Calendar/index.js";
// import Cards from "../Cards/index.js";

function FullRowComponent(props) {
  const { title, url, username } = useContext(ArticleContext);

  return (
    <>
      <div className="content">
        <div className="row rowHeader">
          <div className="col col-3">
            <strong>User Name:</strong>
            <h2>{props.name}</h2>
            {/*<strong>Interest:</strong>
            <h4>{props.occupation}</h4>
            <strong>Location:</strong>
            <h4>{props.location}</h4>*/}
            <strong>Location:</strong>
            <h4>
              Carrboro, NC
            </h4>
          </div>

          <div className="col col-9">
            <div className="row">
              <h2>Saved / Most Recent:</h2>
              <div className="col colTop colTop1">1</div>
              <div className="col colTop colTop2">2</div>
              <div className="col colTop colTop3">3</div>
              <div className="col colTop colTop4">4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullRowComponent;
