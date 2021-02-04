import React from 'react'
import Todos from "../../../JISamplify/src/Routes/Todos";
// import WikiSearch from "../Components/WikiSearch";
import MyForm from './MyForm';
import FormVal from './FormVal';

export default function Main() {
  return (
    <div>
    <div className="container">
    <div className="row align-self-stretch">
      <div className="col colA"><Todos /></div>
      <div className="col colB"> </div>
      <div className="col colA"><MyForm /> </div>
      <div className="col colB">
      
      <form action="welcome_get.php" method="get">
      Name: <input type="text" name="name"/><br/>
E-mail: <input type="text" name="email"/><br/>
<input type="submit"/>
</form>
</div>
    </div>
    <div className="row align-self-stretch">
      <div className="col-8 colA"></div>
   
      <div className="col-4 colB"><FormVal/></div>
    </div>
  </div>
    </div>
  )
}
