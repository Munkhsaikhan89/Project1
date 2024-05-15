import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div className="flex gap-[30px] flex-col">
      <input
        className="w-[150px] bg-gray-200"
        onChange={(e) => {
          e.target.value;
        }}
        placeholder="Fistname"
        type="text"
      />
      <input
        className="w-[150px] bg-gray-200"
        onChange={(e) => {
          e.target.value;
        }}
        placeholder="Lastname"
        type="text"
      />
      <input
        className="w-[150px] bg-gray-200"
        onChange={(e) => {
          e.target.value;
        }}
        placeholder="Email"
        type="text"
      />
      <input
        className="w-[150px] bg-gray-200"
        onChange={(e) => {
          e.target.value;
        }}
        placeholder="Password"
        type="text"
      />
      <input
        className="w-[150px] bg-gray-200"
        onChange={(e) => {
          e.target.value;
        }}
        placeholder="Re-Password"
        type="text"
      />
      <button className="bg-[blue] w-[100px] text-white">Sign Up</button>
    </div>
  );
}
