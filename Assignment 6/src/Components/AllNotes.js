import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import './AllNotes.css'

export default function AllNotes() {

  const notes = useSelector((state) => state.notes)
  console.log(notes)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <>
      <div className='center-btn'>
        <button className='button-29' role="button" onClick={() => navigate('/')}>HOME</button>
      </div>
      <h3>ALL Notes</h3>
      <div className='container'>
        {
          notes.map((notes, index) => {
            return (
              <>
                <div className='card'>
                  <h5 class="card-title">{notes.title}</h5>
                  <p class="card-text">{notes.content}</p>
                  <div className='btn'>
                    <button className='delete' onClick={() => { dispatch(removeNote(index)) }}>Delete</button>
                    <button className='update' onClick={() => { navigate(`/editnote/${index}`); }}>Update</button>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>

  )
}
