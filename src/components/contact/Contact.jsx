import "./contact.css";
import Phone from "../../phone.png";
import Email from "../../email.png";
import Address from "../../address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_frq9yjo",
        "template_stut0pt",
        formRef.current,
        "gNwBion2dmuxCtCtw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +977-9860465340
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              kusmarozeel@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Itachhe-02, Bhaktapur,Bagmati Province, Nepal
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode? "#222":"white"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor:darkMode? "#222":"white"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode? "#222":"white"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode? "#222":"white"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;