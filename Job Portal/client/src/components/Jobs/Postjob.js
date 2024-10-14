import React, { useState } from 'react'
import '../Jobs/Postjob.css'
export default function () {

    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [workType, setWorkType] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [FormType, setFormType] = useState('login')
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function PostJob(event) {

        event.preventDefault()
        setLoading(true)
        setFormType('submitted')
        const response = await fetch('http://localhost:5000/api/create-jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                position,
                company,
                workType,
                location
            })
        })
        const data = await response.json()
        console.log(data)
        if (response.status === 200) {
            setSuccess(data.message)
            setMessage(data.message)
            console.log(success)
            setLoading(false)
        }
        else {
            setError(data.message)
            console.log(error)
            setLoading(false)
        }
        setCompany('')
        setPosition('')
        setLocation('')
        setWorkType('')
    }
    return (
        <div className='container-1'>
            <div className="wrapper_item">
                <div className="form-box-1 post">
                    <h3>POST A NEW JOB</h3>
                    <form action="#" onSubmit={PostJob}>
                        <div className="input-box_1">
                            <span className="icon">
                                <ion-icon name="logo-apple"></ion-icon>
                            </span>
                            <input type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            />
                            <label>Company</label>
                        </div>
                        <div className="input-box_1">
                            <span className="icon">
                                <ion-icon name="copy-outline"></ion-icon>
                            </span>
                            <input type="text"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                required
                            />
                            <label>Position</label>
                        </div>
                        <div className="input-box_1">
                            <span className="icon">
                                <ion-icon name="location-outline"></ion-icon>
                            </span>
                            <input type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                            <label>Location</label>
                        </div><div className="input-box_1">
                            <span className="icon">
                                <ion-icon name="accessibility-outline"></ion-icon>
                            </span>
                            <input type="text"
                                value={workType}
                                onChange={(e) => setWorkType(e.target.value)}
                                required
                            />
                            <label>Work Type</label>
                        </div>
                        <button type="submit" className="btn2">Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
