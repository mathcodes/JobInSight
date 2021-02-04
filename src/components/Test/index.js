import React, { useContext } from "react";
import ArticleContext from "../../../../JISamplify/src/utils/ArticleContext";

// importing above
// using the useContext hook and we specifyt as the AC as the article we wanna use and then we are going 
// to destructure all of that into title and url variaables
function Test() {
  const {title, url} = useContext(ArticleContext);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
      {/* // gives us nice neat access to the title and url properties of that article we didnt 
      // have to accept it as 
      // props and make use of our title and url values inside of our return block here. */}
        <h2>{title}</h2>
        <a href={url}>{url}</a>
      </li>
    </ul>
  );
}
export default Test;
