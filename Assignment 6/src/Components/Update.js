import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editNote } from '../Redux/action';
import "./Update.css"

export default function Update() {
    const notes = useSelector((state) => state.notes)
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { index } = useParams();

    function handleSubmission1(e) {
        e.preventDefault();
        dispatch(editNote(title, content, index))
        setTitle('')
        setContent('')
        navigate('/allNotes')
    }

  return (
    <div className='btn-2'>
            <div className="btns">
                <button className='button-29' onClick={() => navigate('/')}>Home</button>
                <button className='button-29' onClick={() => navigate('/allNotes')}>Notes</button>
            </div>
            <h3>Edit Notes</h3>
            <div>
                {
                    notes.map((notes, index) => {
                        return (
                            <div className='container'>
                                <form onSubmit={handleSubmission1}>
                                    <input type='text' name='title' value={title || notes.title} onChange={(e) => setTitle(e.target.value)} required />
                                    <textarea type='text-a' name='content' value={content || notes.content} onChange={(e) => setContent(e.target.value)} required />
                                    <div className='center-btn'>
                                        <button className='button-29' role='button'>Done</button>
                                        <button className='button-29' role='button'>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        )
                    },)
                }
            </div>
        </div>
  )
}
