import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { addtask } from "../../features/listitems/listitemsSlice";
import "./style.css";
export default function About() {
  const [task, setTask] = useState({
    id: uniqid(),
    description: "",
    category: "",
    content: "",
  });

  const onChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const dispatch = useDispatch();
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   //this.props.addTodo(this.state.title);
  //   this.setState({ description: "", category: "", content: "" });
  // };

  //onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  return (
    <form className="taskform">
      <div className="taskform">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={task.description}
          onChange={onChange}
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
          <option value="hamsjster">js</option>
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
        ></textarea>
      </div>
      <div className="taskform">
        <input
          onClick={() => dispatch(addtask(task))}
          type="button"
          value="Submit"
        />
      </div>
    </form>
  );
}
