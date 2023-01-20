import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { Icon } from "@iconify/react";

const index = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/todo", {
        title: title,
        description: description,
        isDone: false,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={addTodo}
        className="py-10 w-1/3 bg-slate-700 px-10 relative rounded-lg"
      >
        <p className="text-3xl rounded-full bg-slate-800 inline px-2 w-3/4 text-center py-2 absolute -top-7 right-1/2 translate-x-1/2 shadow-xl font-semibold text-slate-500">
          {" "}
          Add new Todo
        </p>
        <div className="flex flex-col">
          <label className="label text-white">Title</label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="name"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="label text-white">Description</label>
          <textarea
            type="text"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            placeholder="description"
          />
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <Link
            href="/"
            className="bg-slate-400 px-4 py-3 rounded-lg hover:opacity-75 hover:shadow text-xl flex items-center justify-center"
          >
            <Icon icon="ion:arrow-back-circle" className="text-2xl mr-1" />
            <span>Back</span>
          </Link>
          <button
            type="submit"
            className="bg-emerald-400 px-4 py-3 rounded-lg hover:opacity-75 hover:shadow text-xl flex items-center justify-center"
          >
            <Icon icon="ic:outline-add-circle" className="mr-1 text-2xl" />
            <span>Add Todo</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;
