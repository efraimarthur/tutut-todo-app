import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const router = useRouter();

  const { id } = router.query;

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        gender: gender,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      const final = await response.data;

      setName(final.name);
      setEmail(final.email);
      setGender(final.gender);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserById();
  }, [id]);

  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center">
      <form
        onSubmit={updateUser}
        className="py-10 w-1/3 bg-teal-600 px-10 rounded-lg"
      >
        <p className="text-3xl rounded-full bg-white inline px-3 py-2 absolute top-12 right-1/2 translate-x-1/2 shadow-xl font-mono">
          {" "}
          Add User
        </p>
        <div className="flex flex-col">
          <label className="label text-white">Name</label>
          <input
            type="text"
            value={name}
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
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="email"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="label text-white">Gender</label>
          <select
            className="outline-none py-3 text-center hover:shadow-xl"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex flex-col mt-5">
          <label className="label text-white">ID: </label>
          <input
            type="text"
            value={id}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/4 py-3  mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 text-white "
            disabled
          />
        </div>
        <div className="mt-5 flex justify-end gap-2">
          <Link
            href="/"
            className="bg-slate-400 px-4 py-2 rounded-md hover:opacity-75 hover:shadow"
          >
            ❌Cancel edit
          </Link>
          <button
            type="submit"
            className="bg-emerald-400 px-4 py-2 rounded-md hover:opacity-75 hover:shadow"
          >
            ✔️Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
