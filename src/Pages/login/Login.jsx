import { useState } from 'react'
import '../login/Login.css'
import { MdOutlineCancel } from "react-icons/md";


function Login({setShowLogin}) {

const[currState,setCurrState] = useState("Login")

    return (
      <div className='formContainer'>
          <div className='formWrapper'>
          <MdOutlineCancel onClick={()=>setShowLogin(false)}/>
          <h2>{currState}</h2>
          <span className='logo'>Brews, Blooms and Books</span>
          <span className='title'>Login</span>
              <form>
              {currState==="Login"?<></>:<input type='text' placeholder='Your Name'/>}
                  <input type='email' placeholder='email'/>
                  <input type='password' placeholder='password'/>
                  <button>{currState==="Sign In"?"Create account":"Login"}</button>
              </form>
              {currState==="Login"
              ?<p>Create a new  account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
              :<p>Already have an account? <span  onClick={()=>setCurrState("Login")}>login here</span></p>
              }
          </div>
      </div>
    )
  }
  
  export default Login