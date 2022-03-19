import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletetask,
  deletetasks,
} from "../../features/listitems/listitemsSlice";
// import "./style.css";
export default function About() {
  const [ids, setIds] = useState([]);
  const tasks = useSelector((state) => state.tasklist);
  const dispatch = useDispatch();
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   //this.props.addTodo(this.state.title);
  //   this.setState({ description: "", category: "", content: "" });
  // };

  //onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  return (
    <div>
      <button>Delete Selected</button>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" id="checkall" />
            </th>
            <th>Description</th>
            <th>Category</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" id={task.id} />
                </td>
                <td>{task.description}</td>
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
