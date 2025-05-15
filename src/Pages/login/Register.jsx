import Add from "../assets/add2.webp";
function Register() {

return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className='logo'>Brews, Blooms and Books</span>
          <span className='title'>Register</span>
              <form>
              <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="img" />
            <span>Add a profile picture</span>
          </label>
          <button>Sign Up</button>
              </form>
              <p>You have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
