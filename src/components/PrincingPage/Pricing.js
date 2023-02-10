import React from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

export default function Pricing() {
  return (
    <>

      <div className='body'>

        <h1 style={{ "-webkit-text-align": "center", "text-align": "center" }}>
          MEMBERSHIP
        </h1>
        <div className='div'>

          <form className='form' method="post" style={{ "-webkit-text-align": "center", "text-align": "center" }} action="table.html">
            <span className="q">1 Month at Rs-2000</span>:<input type="radio" name="membership" /><br /><br /><br /><br />
            <span className="q">3 Months at Rs-4500</span>:<input type="radio" name="membership" /><br /><br /><br /><br />
            <span className="q">6 Months at Rs-6000</span>:<input type="radio" name="membership" /><br /><br /><br /><br />
            <span className="q">12 Months at Rs-12000</span>:<input type="radio" name="membership" /><hr />
            <Link to="/dashboard"><input type="Submit" name="submit" defaultValue="SUBMIT" style={{ "height": "100px", "border-radius": "30px" }} /></Link>
            
          </form>
          

          </div>

      </div>

    </>
  )
}
