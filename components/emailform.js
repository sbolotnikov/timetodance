import { useState, useEffect, useContext } from 'react';
import AppContext from '../appContext';
import { useSession } from 'next-auth/react';
function Emailform(props) {
    const { data: session, loadings } = useSession();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage]= useState("");
    const value = useContext(AppContext);
    const mainEmail = value.mainEmail;
    useEffect(() => {
      if (session) {
        if (session.user.name && session.user.name.length > 0) {
          document.getElementById('userName1').value = session.user.name;
          setName(session.user.name);
        }
        if (session.user.email && session.user.email.length > 0) {
          document.getElementById('userEmail1').value = session.user.email;
          setEmail(session.user.email);
        }

      }
    }, []);
    const handleSubmit=(e)=>{
        e.preventDefault();
        let data = {
            name,
            email,
            message,
            mainEmail:mainEmail
          }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            if (res.status === 200) {   
              setName('')
              setEmail('')
              setMessage('')
              props.onChange(true);
            }
          })
    }
  return (

        <div className="absolute top-0 left-0 h-[100vh] w-[100vw] flex justify-center  items-center">
          <form
            className="w-[80%] h-[80%] max-w-[700px] max-h-[700px] bg-black rounded-md flex flex-col justify-between  items-center p-2"
            style={{ boxShadow: '0 0 150px rgb(255 236 0 / 50%)'}}
            onSubmit={handleSubmit}
          >
            <button
              className="relative w-full"
              onClick={() => {
                props.onChange(true);
              }}
            >
              <div className="absolute  -top-5 -right-5  p-2 h-2  bg-black rounded-full  flex justify-center  items-center">
                {/* <img
                  className="h-2"
                  src={'/icons/close.svg'}
                  alt="menu close"
                /> */}
                <svg viewBox="0 0 23 23" fill="#FFFFFF" className="h-2" >
            <path d="M1.06069 1.06066C1.64647 0.474877 2.59622 0.474877 3.18201 1.06066L21.5668 19.4454C22.1526 20.0312 22.1526 20.981 21.5668 21.5668C20.981 22.1525 20.0312 22.1525 19.4455 21.5668L1.06069 3.18198C0.474901 2.5962 0.474901 1.64645 1.06069 1.06066Z" />
            <path d="M1.06062 21.5668C0.47483 20.981 0.47483 20.0312 1.06062 19.4454L19.4454 1.06066C20.0312 0.474876 20.9809 0.474876 21.5667 1.06066C22.1525 1.64645 22.1525 2.5962 21.5667 3.18198L3.18194 21.5668C2.59615 22.1525 1.6464 22.1525 1.06062 21.5668Z" />
          </svg>
              </div>
            </button>
            <h2 className="w-full text-center font-extrabold">Any question?</h2>
            <p className="w-full text-gray-400">
              We'll be happy to answer! If it is urgent, please call{' '}
              <strong>+1(917) 916-28-40</strong>.
            </p>

            <input
              id="userName1"
              className="w-full rounded bg-[#0C1118] text-white"
              type="text"
              placeholder="Input your name here"
              required
              onChange={(e)=>{setName(e.target.value)}}
              value = {name}
              minLength="3"
            />

            <input
              id="userEmail1"
              className="w-full rounded bg-[#0C1118] text-white"
              type="email" 
              placeholder="E-mail"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
              value = {email}
            />
            <textarea
              className="w-full rounded bg-[#0C1118] text-white"
              placeholder="Your question or requests"
              required
              onChange={(e)=>{setMessage(e.target.value)}}
              value = {message}
              minLength="5"
            ></textarea>
            <div className="error alert alert-error"></div>
            <button type="submit" className="w-full rounded btnBlue">
              Send Message
            </button>
          </form>
        </div>
      
  );
}

export default Emailform;
