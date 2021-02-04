import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { API, Storage } from 'aws-amplify';
import Dashbboard from '../src/pages/Dashboard'

const initialFormState = { name: '', description: '' }

function Notes()
{
  const [notes, setNotes] = useState( [] );
  const [formData, setFormData] = useState( initialFormState );

  useEffect( () =>
  {
    fetchNotes();
  }, [] );

  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   setNotes(apiData.data.listNotes.items);
  // }

  // Update the fetchNotes function to fetch an image if there is an image associated with a note

  async function fetchNotes()
  {
    const apiData = await API.graphql( { query: listNotes } );
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all( notesFromAPI.map( async note =>
    {
      if ( note.image )
      {
        const image = await Storage.get( note.image );
        note.image = image;
      }
      return note;
    } ) )
    setNotes( apiData.data.listNotes.items );
  }

  // async function createNote() {
  //   if (!formData.name || !formData.description) return;
  //   await API.graphql({ query: createNoteMutation, variables: { input: formData } });
  //   setNotes([ ...notes, formData ]);
  //   setFormData(initialFormState);
  // }

  // Update the createNote function to add the image to the local image array if an image is associated with the note

  async function createNote()
  {
    if ( !formData.name || !formData.description ) return;
    await API.graphql( { query: createNoteMutation, variables: { input: formData } } );
    if ( formData.image )
    {
      const image = await Storage.get( formData.image );
      formData.image = image;
    }
    setNotes( [...notes, formData] );
    setFormData( initialFormState );
  }

  async function deleteNote( { id } )
  {
    const newNotesArray = notes.filter( note => note.id !== id );
    setNotes( newNotesArray );
    await API.graphql( { query: deleteNoteMutation, variables: { input: { id } } } );
  }

  // In the main App function, create a new onChange function to handle the image upload
  async function onChange( e )
  {
    if ( !e.target.files[0] ) return
    const file = e.target.files[0];
    setFormData( { ...formData, image: file.name } );
    await Storage.put( file.name, file );
    fetchNotes();
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData( { ...formData, 'name': e.target.value } )}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData( { ...formData, 'description': e.target.value } )}
        placeholder="Note description"
        value={formData.description}
      />
      {/* Add an additional input to the form in the return block */}
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{ marginBottom: 30 }}>
        {/* When mapping over the notes array, render an image if it exists */}
        {
          notes.map( note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote( note )}>Delete note</button>
              {
                note.image && <img src={note.image} style={{ width: 400 }} />
              }
            </div>
          ) )
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator( Notes );