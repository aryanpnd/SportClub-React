import React from 'react'
import './Services.css'

export default function Services() {
    return (
        <>
                <div className='servicesbody'>
                <h1 className='h1' style={{ "-webkit-text-align": "center", "text-align": "center", "color": "firebrick" }}>
                    OUR SERVICES
                </h1>
                <div className='div'>
                    <p className='p'><span className="q">We offer services such as:</span></p><br />
                    <p className='p'><span className="q">Calorie tracking:<br />we track how much calories you burned through your excercise</span></p>
                    <p className='p'><span className="q">Attendence<br />we monitor your daily attendance ,how often u visit or sports club</span></p>
                    <p className='p'><span className="q">Membership<br />We offer various membership for our members according to their comforts</span></p>
                </div></div>
            

        </>
    )
}
