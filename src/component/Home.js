import React, { useEffect, useState } from "react";
import CardView from "./CardView";
import { todoData } from "../data/Data";

function Home() {
  const [todos, setTodos] = useState([]);
  //   const todoSTeData = () => {
  //     const newArr = [];
  //     {
  //       todoData.map((value, key) => {
  //         newArr.push(value);
  //       });
  //     }
  //     setTodos(newArr);
  //   };

  useEffect(() => {
    setTodos(todoData);
  }, []);

  const deleteHandler = (id) => {
    console.log(id);
    // console.log(todos.filter((item) => item.id !== id));
    // setTodos(todos.filter((item) => item.id !== id));
  };
  //   const editHandler = (id) => {
  //     console.log(id);
  //     return todoData.filter((item) => item.id === id);
  //   };

  return (
    <div>
      {todos.map((item) => (
        <CardView key={item.id} userData={item} onDelete={deleteHandler} />
      ))}
    </div>
  );
}

export default Home;
