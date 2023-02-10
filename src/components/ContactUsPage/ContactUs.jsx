import React, { PureComponent } from 'react'
import './ContactUs.css'

export default class ContactUs extends PureComponent {
  render() {
    return (
      <>
        <div className="contact-form>">
          <h1>Contact Us</h1>
          <div className="txtb">
            <label>Full Name :</label>
            <input type="text" name defaultValue />
          </div>
          <div className="txtb">
            <label>Email :</label>
            <input type="email" name defaultValue />
          </div>
          <div className="txtb">
            <label>Phone Number :</label>
            <input type="text" name defaultValue />
          </div>
          <div className="txtb">
            <label>Message :</label>
            <textarea defaultValue={""} />
          </div>
          <a className="btn">Send</a>
        </div>
      </>
    )
  }
}
