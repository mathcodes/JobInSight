import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
// import WikiSearch from "./components/WikiSearch/index.js";
// import WikiSignup from "./components/WikiSignup/index.js";
import Dashboard from "./pages/Dashboard";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import "./App.css";
// import Main from "./components/Main";
import SignIn from "./Routes/SignIn";
import { Switch } from "react-router-dom";
import "./App.css";

function App() {
    return ( <
        div style = {
            {
                textAlign: "center"
            }
        } >

        <
        Route path = "/" >
        <
        Switch > { /* <SignIn > */ } <
        Dashboard / >


        { /* <SignIn>    */ }

        <
        /Switch>  <
        /Route>  <
        /div>
    );
}
export default App;