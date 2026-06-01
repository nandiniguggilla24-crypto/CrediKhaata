import { Link } from "react-router-dom";

function Signup() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Signup</h1>

      <form>
        <input
          type="text"
          placeholder="Name"
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
        />

        <br />
        <br />

        <button>Create Account</button>
      </form>

      <br />

      <Link to="/">Back to Login</Link>
    </div>
  );
}

export default Signup;