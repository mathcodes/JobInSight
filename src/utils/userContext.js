import React from "react";

const UserContext = React.createContext({
  username: "John Doe",
  interests: "",
  image: "",
  handleBtnClick: () => {}
});

export default UserContext;
