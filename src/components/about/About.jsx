import React from 'react'
import './about.css'
import about from '../../about.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={about} alt="" className="a-img" />
            </div>

        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Web Developer & Programmer
        </p>
        <p className="a-desc">
        Hi, I am a CSIT student and a tech enthusiast having a keen interest on software development.
        </p>
        <div className="a-years">
            <div className="a-year-info">
                <h2>2017</h2>
                <p>Started my journey initiating with C programming</p>
            </div>
            <div className="a-year-info">
            <h2>2018</h2>
                <p>Commenced the BSc. CSIT Program</p>
            </div>
            <div className="a-year-info">
            <h2>2019</h2>
                <p>Explored HTML, CSS, JS</p>
            </div>
            <div className="a-year-info">
            <h2>2020</h2>
                <p>Exhibited the frontend tools, especially ReactJs</p>
            </div>
            <div className="a-year-info">
            <h2>2021</h2>
                <p>Looking for opportunities</p>
            </div>

        </div>
        
        
        </div>
    </div>
  )
}

export default About