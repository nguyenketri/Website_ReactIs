import { Form, Input, Button, Checkbox } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";

export default function SignUPScreem() {

  return (
    <div class="signup-container">
  
  <div class="signup-image">
    <img
      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
      alt="signup banner"
    />
  </div>

 
  <div class="signup-form">
    <h2>Create Account</h2>

    <form action="#">
      <div class="form-group">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Create a password"
          required
        />
      </div>

      <div class="form-actions">
        <button type="submit">Sign Up</button>
      </div>

      <div class="google-signup">
        <button type="button" class="google-btn">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google icon"
          />
          Sign Up with Google
        </button>
      </div>

      <p class="account-login">
        Already have an account?
       <Link to="/login">Login</Link>
      </p>
    </form>
  </div>
</div>
  )
}
