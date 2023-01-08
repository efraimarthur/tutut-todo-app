import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";

const Done = () => {
  const [todo, setTodo] = useState([]);

  const getDoneTodo = async () => {
    const response = await axios.get("http://localhost:5000/todo");
    setTodo(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getDoneTodo();
    // console.log("welcome");
  }, []);

  //   const deleteUser = async (id) => {
  //     try {
  //       await axios.delete(`http://localhost:5000/users/${id}`);
  //       getUsers();
  //     } catch (error) {
  //       console.log({ deleteUserError: error });
  //     }
  //   };

  return (
    <>
      <Head>
        <title>Simple CRUD user</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="flex min-h-screen">
          {/* <Link
            href={"/add"}
            className="px-4 py-4 bg-emerald-300 text-slate-700 font-bold rounded-lg "
          >
            ➕ Add new User
          </Link>
          <Link
            href={"/add"}
            className="px-4 py-4 bg-emerald-300 text-slate-700 font-bold rounded-lg "
          >
            ➕ Add new User
          </Link> */}
          {/* <table className="table-auto border-2 border-amber-500 mt-5 ">
            <thead className="border-b-2 border-b-amber-500 bg-slate-800 text-white">
              <tr className="">
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6">status</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((item, index) => (
                <tr
                  className=" odd:bg-emerald-100 even:bg-pink-100"
                  key={item.id}
                >
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 ">{item.title}</td>
                  <td className="py-3 px-6">{item.description}</td>
                  <td className="py-3 px-6">{item.isDone}</td>
                  <td className="py-3 px-1 text-center">
                    <Link
                      href={`/edit/${item.id}`}
                      className="bg-sky-600 hover:opacity-70 text-white px-3 py-2 rounded-md mx-2"
                    >
                      Edit ⚙️
                    </Link>
                    <button
                      className="bg-slate-300 hover:opacity-70  px-3 py-2 rounded-md"
                      //   onClick={() => deleteUser(item.id)}
                    >
                      Delete ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <div className=" bg-slate-900 flex flex-col fixed w-[25%] h-screen left-0 pt-20">
            <div className="text-slate-50 text-xl bg-slate-700 mx-auto cursor-pointer h-20 w-[90%] flex items-center justify-center px-5 py-2 rounded-md">
              Add new Todo
            </div>
            <div className="text-slate-50 text-xl bg-slate-700 cursor-pointer mx-auto h-20 w-[90%] flex items-center justify-center px-5 py-2 rounded-md">
              BETUL BETUL BETUL
            </div>
            <div className="text-slate-50 text-xl bg-slate-700 cursor-pointer mx-auto h-20 w-[90%] flex items-center justify-center px-5 py-2 rounded-md">
              BETUL BETUL BETUL
            </div>
          </div>
          <div className="flex flex-wrap gap-5 p-10 w-[75%] absolute right-0 bg-slate-800">
            {todo.map((item, index) => (
              <div
                className="bg-slate-700 text-slate-50 p-3 shadow-lg flex flex-col rounded-md aspect-square hover:scale-110 duration-300 my-5 relative w-[30%] mx-auto"
                key={item.id}
              >
                <div className="text-xl font-bold">{item.title}</div>
                <div className="text-lg">{item.description}</div>
                <div className="text-rose-500">{`${item.isDone}`}</div>
                <div className="flex absolute gap-10 bottom-3 left-1/2 -translate-x-1/2">
                  <button className="bg-slate-900 py-3 px-6 rounded-xl hover:bg-emerald-600 duration-200">
                    Done
                  </button>
                  <button className="bg-slate-900 py-3 px-6 rounded-xl hover:bg-rose-600 duration-200">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Done;