import { Form, Input, Button, Checkbox } from "antd";
import "./style.scss";

export default function LoginPage() {

  return (
    <div class="login-container">

  <div class="login-image">
    <img
      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
      alt="login banner"
    />
  </div>


  <div class="login-form">
    <h2>Login</h2>
    <form action="#">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter username" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          required
        />
      </div>

      <div class="form-actions">
        <button type="submit">Login</button>
      </div>

      <p class="forgot-password">
        <a href="#">Forgot Password?</a>
      </p>
    </form>
  </div>
</div>

  );
}
