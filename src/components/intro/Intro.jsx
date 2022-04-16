import React from 'react'
import './intro.css'
import me from '../../me.jpg'

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Rojil Kusma</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Frontend Developer</div>
                        <div className="i-title-item">Flutter UI</div>
                        <div className="i-title-item">HTML</div>
                        <div className="i-title-item">CSS</div>
                        <div className="i-title-item">JavaScript</div>
                    </div>
                </div>
                <p className="i-desc">
                    Welcome to my Personal Portfolio.
                </p>
            </div>
                    </div>
        <div className="i-right">
            <div className="i-bg">
            <img src={me} alt="myself" className="i-img" />
            </div>
            
        </div>
    </div>
  )
}

export default Intro