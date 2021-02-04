import React from "react"; // we import React, 

// we call React.createContext
// we give it a title and url 
// propertes both as empty String
// then we export the Article Context  (which gets imported into the search directory)
//  

const ArticleContext = React.createContext({
  id:"id - test",
  url: "URL - test",
  username: "User Name - test",
  usernameError: "",
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  confirmPassword: "",
  confirmPasswordError: "",
  errors: {},
  redirect: false,
  handleBtnClick: () => {},
  term: "Test Term",
  query:"Test Query",
  title: "Learn JavaScript - Full Course for Beginners",
  author_name: "freeCodeCamp.org",
  author_url: "https://www.youtube.com/c/Freecodecamp",
  type: "video",
  height: 113,
  width: 200,
  version: "1.0",
  provider_name: "YouTube",
  provider_url: "https://www.youtube.com/",
  thumbnail_height: 360,
  thumbnail_width: 480,
  thumbnail_url: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
  html: "<iframe width='200px' height='113' src='https://www.youtube.com/embed/PkZNo7MFNFg?feature=oembed' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"

});
console.log(ArticleContext)
export default ArticleContext;
