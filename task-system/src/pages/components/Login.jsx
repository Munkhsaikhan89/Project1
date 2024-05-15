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
        body: JSON.parse(email, password),
      });
      const newData = await response.json();
      console.log("newData:", newData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="flex gap-[30px] flex-col">
      <div className="flex flex-col gap-[10px]">
        <input
          placeholder="Email"
          className="w-[50%] px-[20px]"
          value={email}
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-[50%] px-[20px]"
          type="text"
        />
      </div>
      <button onClick={checkUser} className="w-[50%] bg-gray-300">
        Login
      </button>
      <Link href="../components/SignUp">
        <div>to sign up</div>
      </Link>
    </div>
  );
}
