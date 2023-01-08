import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const index = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [gender, setGender] = useState("Female");

  const router = useRouter();

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        gender: gender,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    // console.log("Submit");
  };

  return (
    <div className="bg-slate-300 min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={addUser}
        className="py-10 w-1/3 bg-teal-600 px-10 relative rounded-lg"
      >
        <p className="text-3xl rounded-full bg-white inline px-3 py-2 absolute -top-7 right-1/2 translate-x-1/2 shadow-xl font-mono">
          {" "}
          Add User
        </p>
        <div className="flex flex-col">
          <label className="label text-white">Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="name"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="label text-white">Email</label>
          <input
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="email"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="label text-white">Gender</label>
          <select
            className="outline-none py-3 text-center active:shadow-lg"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mt-5 flex justify-end gap-2">
          <Link
            href="/"
            className="bg-slate-400 px-4 py-2 rounded-md hover:opacity-75 hover:shadow text-3xl"
          >
            🔙
          </Link>
          <button
            type="submit"
            // onClick={addUser}
            className="bg-emerald-400 px-4 py-2 rounded-md hover:opacity-75 hover:shadow"
          >
            ➕Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;
