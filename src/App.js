import React from 'react';
import './App.css';
import Dashboard from "./pages/Dashboard"
// import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { listNotes } from './graphql/queries';
// import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

 

function App() {
   
  return (
    <>
    <Dashboard/>
      <AmplifySignOut />
 </>
  );
}

export default withAuthenticator(App);

