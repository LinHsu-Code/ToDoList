import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { addtask } from "../../features/listitems/listitemsSlice";
import "./style.css";
export default function TodoForm() {
  const [task, setTask] = useState({
    checked: false,
    description: "",
    category: "html",
    content: "",
  });

  const onChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });
  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <form className="taskform">
        <div className="taskform">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={task.description}
            onChange={onChange}
            required
          />
        </div>
        <div className="taskform">
          <label htmlFor="category">Category:</label>

          <select
            name="category"
            id="category"
            value={task.category}
            onChange={onChange}
          >
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="js">js</option>
          </select>
        </div>
        <div className="taskform">
          <label htmlFor="content">Content:</label>

          <textarea
            id="content"
            name="content"
            rows="5"
            cols="33"
            value={task.content}
            onChange={onChange}
            maxLength="100"
          ></textarea>
        </div>
        <div className="taskform">
          <input
            onClick={() => dispatch(addtask({ ...task, id: uniqid() }))}
            type="button"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
