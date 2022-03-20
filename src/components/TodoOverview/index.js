import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletetask,
  deletetasks,
} from "../../features/listitems/listitemsSlice";
// import "./style.css";
export default function TodoOverview() {
  const [ids, setIds] = useState([]);
  const tasks = useSelector((state) => state.tasklist);
  const dispatch = useDispatch();

  const checkAll = (e) => {
    e.target.checked ? setIds(tasks.map((task) => task.id)) : setIds([]);
    const checktasks = document.getElementsByClassName("checktask");

    for (var i = 0; i < checktasks.length; i++) {
      checktasks[i].checked = e.target.checked ? true : false;
    }
  };

  const checkTask = (e) => {
    const index = ids.findIndex((id) => id === e.target.id);
    index === -1
      ? setIds((previousIds) => [...previousIds, e.target.id])
      : setIds((previousIds) =>
          previousIds.slice(0, index).concat(previousIds.slice(index + 1))
        );
  };

  // useEffect(() => {
  //   const checkall = document.getElementById("checkall");
  //   console.log(checkall);
  //   //console.log(ids.length, tasks.length);
  //   checkall.checked = ids.length === tasks.lenght ? true : false;
  // }, [ids]);

  return (
    <div>
      <button
        onClick={() => {
          console.log("ids=", ids);
          dispatch(deletetasks(ids));
        }}
      >
        Delete Selected
      </button>
      <table>
        <thead>
          <tr>
            <th>
              <input onChange={checkAll} type="checkbox" id="checkall" />
            </th>
            <th>Description</th>
            <th>Category</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>
                  <input
                    onChange={checkTask}
                    type="checkbox"
                    id={task.id}
                    className="checktask"
                  />
                </td>

                <td>
                  <Link to={`/todo/${task.id}`}>{task.description}</Link>
                </td>

                <td>{task.category}</td>
                <td>
                  <button onClick={() => dispatch(deletetask(task.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
