import React, { useState, useEffect } from "react";
import Container from "../Container";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
// import Alert from "../Alert";
import ArticleContext from "../../../../JISamplify/src/utils/ArticleContext";
import API from "../../../../JISamplify/src/utils/API";
import "./style.css";

//change the state... title and URL of the number
function Search() {
  const [articleState, setArticleState] = useState({  // |
    title: "WStitle-test",                                        // |
    url: "WSurl-test"                                           // | 
  });
// in essence the goal of this is to make articleState available in an article context
// so we have created an ArticleContext to do that for us: src/util/ArticleContext.js
  const [search, setSearch] = useState("Wikipedia");
  const [Error, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "JobInSight";

    if (!search) {
      return;
    }
// only difference here is that we areusing the set article state tp set those two 
// pieces of state as opposed to calling 2 individiually. 
    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found."); 
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setArticleState({ //now using these 2 pieces of state @ same time
          title: res.data[1][0],
          url: res.data[3][0]
        });
      })
      .catch(err => setError(err));
  }, );

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <ArticleContext.Provider value={articleState}>
    <h5>Wikipedia</h5>
      <div>
        <Container style={{ minHeight: "" }}>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
          />
          <SearchResults />
        </Container>
      </div>
    </ArticleContext.Provider>
  );
}

export default Search;
