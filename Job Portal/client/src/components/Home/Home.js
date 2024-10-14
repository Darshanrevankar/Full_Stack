import React from 'react'
import '../Home/Home.css'
import img from '../../assets/4.png'
export default function Home() {
  return (
    <div className='Home_container'>
      <div className='Home_card'>
        <div className="heading">
          <h1>"Find a you<span> enjoy</span> and you'll never <span>work</span> a day in your life"</h1>
        </div>
        <div className="details_1">
          <p>Welcome to our job website, where we've made job searching simple and efficient,
            paving the way for you to secure your dream career. We offer an extensive array of
            job opportunities from leading employers, ensuring that you have access to a diverse selection
            of positions. Our platform is equipped with a range of valuable resources and tools to enhance your
            job search experience, making it easier for you to find the perfect match. Whether you're a seasoned
            professional or just starting your career journey, we're here to support you every step of the way.
            Let's embark on this exciting journey together, connecting you with your dream career!"</p>
        </div>
        <div className="Home_btn">
          <a href="/Alljobs"><ion-icon name="briefcase-outline"></ion-icon> ALL JOBS</a>
          <a href="/Postjob"><ion-icon name="briefcase-outline"></ion-icon> POST A JOB</a>
        </div>
        <div className='information_logo'>
          <img src={img} alt="Job_Logo" />
        </div>
      </div>
    </div>
  )
}
