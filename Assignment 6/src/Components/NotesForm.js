import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote, editNote } from '../Redux/action';
import "./NotesForm.css";

export default function NotesForm() {

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('')

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addNote(title, content))
    dispatch(editNote(title, content))
    setTitle('')
    setContent('')
    navigate('/allNotes')
  }

  return (
    <div className="formContainer">
      <div className='center-btn'>
      <button className='button-1' role='button' onClick={() => navigate('/allNotes')}>ALL NOTES</button>
      </div>
      <h3>Notes App</h3>
      <div className="container">
        <form onSubmit={handleSubmission}>
          <input type='text' name='title' value={title} placeholder='Enter the Title' onChange={(e) => setTitle(e.target.value)} required />
          <textarea type='text-a' name='content' value={content} placeholder='Enter the Content' onChange={(e) => setContent(e.target.value)} required />
          <div className='center-btn'>
            <button className='button-29'>Add note</button>
          </div>
        </form>
      </div>
    </div>
  )
}
