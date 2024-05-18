import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_DATABASE = "http://localhost:2000/Login";

  const checkUser = async () => {
    try {
      const response = await fetch(`${API_DATABASE}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newData = await response.json();
      console.log("newData:", newData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Login Form</h2>
        <div className="flex flex-col gap-4">
          <input
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="password"
          />
        </div>
        <div className="form-options">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-purple-500 hover:underline">Forgot password?</a>
        </div>
        <button onClick={checkUser} className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white py-2 rounded-md mt-6">
          Login
        </button>
        <p className="mt-4 text-center">
          Not a member? <Link href="../components/SignUp" legacyBehavior><a className="text-purple-500 hover:underline">Signup now</a></Link>
          <br />
          Not a member? <Link href="../components/EmplooyDashboard" legacyBehavior><a className="text-purple-500 hover:underline">Dashboard</a></Link>

        </p>
      </div>
    </div>
  );
}
