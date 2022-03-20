//import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletetask,
  checktask,
  checkalltask,
} from "../../features/listitems/listitemsSlice";
import "./style.css";
export default function TodoOverview() {
  //const [ids, setIds] = useState([]);
  const tasks = useSelector((state) => state.tasklist);
  const isallchecked =
    tasks.every((task) => task.checked) && tasks.length !== 0;
  const dispatch = useDispatch();

  const handleDeleteTasks = () => {
    const checkedtasks = document.querySelectorAll("td>input:checked");
    for (let i = 0; i < checkedtasks.length; i++) {
      dispatch(deletetask(checkedtasks[i].id));
    }
  };
  return (
    <div className="tasklist-container">
      <button onClick={handleDeleteTasks}>Delete Selected</button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                onChange={(e) => dispatch(checkalltask(e.target.checked))}
                type="checkbox"
                id="checkall"
                checked={isallchecked}
              />
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
                    onChange={() => dispatch(checktask(task.id))}
                    type="checkbox"
                    id={task.id}
                    className="checktask"
                    checked={task.checked}
                  />
                </td>

                <td>
                  <Link to={`/todo/${task.id}`}>{task.description}</Link>
                </td>

                <td>{task.category}</td>
                <td>
                  <button onClick={(e) => dispatch(deletetask(task.id))}>
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
